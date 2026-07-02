const wrapper = document.querySelector("#dots-canvas");
// import GUI from "lil-gui";

import * as THREE from "three";

// --- НАСТРОЙКИ ---
const CONFIG = {
  spacing: 20, // Расстояние между точками (пиксели)
  baseRadius: 1, // Базовый радиус
  color: new THREE.Color(0x000000),
  // color: new THREE.Color(0x808080),
  density: 1.5, // Плотность точек (1.0 = стандарт)
};

// --- ИНИЦИАЛИЗАЦИЯ THREE.JS ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Ортографическая камера для 2D
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  powerPreference: "high-performance",
});
renderer.setClearColor(0x000000, 0);
renderer.setClearAlpha(0);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
wrapper.appendChild(renderer.domElement);

// --- ПОЛНОЭКРАННЫЙ КВАДРАТ ДЛЯ ШЕЙДЕРА ---
const geometry = new THREE.PlaneGeometry(2, 2);

// --- ПОЛОЖЕНИЕ МЫШИ (передаем в шейдер) ---
const mouse = new THREE.Vector2(0, 0);
const resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);

// --- ВРЕМЯ ДЛЯ АНИМАЦИИ ---
const time = { value: 0 };

// --- ШЕЙДЕРЫ ---
const material = new THREE.ShaderMaterial({
  uniforms: {
    u_time: { value: 0 },
    u_mouse: { value: new THREE.Vector2(0, 0) },
    u_resolution: {
      value: resolution,
    },
    u_scroll: { value: new THREE.Vector2(0, 0) },
    u_spacing: { value: CONFIG.spacing },
    u_influenceRadius: { value: CONFIG.spacing * 20 },
    u_baseRadius: { value: CONFIG.baseRadius },
    u_color: { value: CONFIG.color },
    u_density: { value: CONFIG.density },
  },
  vertexShader: `
			varying vec2 vUv;
			void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
			}
            `,
  fragmentShader: `
			precision highp float;
varying vec2 vUv;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform vec2 u_scroll;
uniform float u_time;
uniform float u_spacing;
uniform float u_baseRadius;
uniform float u_influenceRadius;
uniform vec3 u_color;
uniform float u_density;

// Perlin noise functions — вставь перед main()
vec4 permute(vec4 x) {
    return mod(((x*34.0)+1.0)*x, 289.0);
}
vec2 fade(vec2 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}
float cnoise(vec2 P) {
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0);
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0;
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x, gy.x);
    vec2 g10 = vec2(gx.y, gy.y);
    vec2 g01 = vec2(gx.z, gy.z);
    vec2 g11 = vec2(gx.w, gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 *
        vec4(dot(g00,g00), dot(g01,g01), dot(g10,g10), dot(g11,g11));
    g00 *= norm.x; g01 *= norm.y; g10 *= norm.z; g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

void main() {
    vec2 st = vUv;
    vec2 pixelCoord = st * u_resolution + u_scroll;
    vec2 mousePixel = u_mouse * u_resolution + u_scroll;

    vec2 gridPos = floor(pixelCoord / u_spacing);
    vec2 dotPos = (gridPos + 0.5) * u_spacing;

    // Вектор от мыши к точке
    vec2 mouseToDot = dotPos - mousePixel;
    float distToMouse = length(mouseToDot);

    // Сила отталкивания — чем ближе, тем сильнее
    float pushStrength = 10.0; // пикселей максимальное смещение
    float influence = 1.0 - smoothstep(0.0, u_influenceRadius, distToMouse);
    vec2 pushDir = normalize(mouseToDot + 0.001); // +0.001 чтоб не делить на 0
    
    // Смещаем dotPos
    vec2 displacedDotPos = dotPos + pushDir * influence * pushStrength;

    // Считаем дистанцию уже от смещённой точки
    vec2 distToDot = pixelCoord - displacedDotPos;
    float dist = length(distToDot);

    float noise = cnoise(gridPos * 0.02 + u_time * 0.1);
    float n = noise * 0.5 + 0.5;
    float threshold = 0.5;
    float noiseAlpha = smoothstep(threshold, threshold + 0.2, n);

    float alpha = dist < u_baseRadius ? .1 : 0.0;

    gl_FragColor = vec4(u_color, alpha * noiseAlpha);
}`,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// --- ОБРАБОТЧИКИ СОБЫТИЙ ---
window.addEventListener("mousemove", (event) => {
  // Нормализованные координаты мыши (0 до 1)
  mouse.x = event.clientX / window.innerWidth;
  mouse.y = 1.0 - event.clientY / window.innerHeight; // OpenGL координаты

  material.uniforms.u_mouse.value.set(mouse.x, mouse.y);
});
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const scrollX = window.scrollX;

  material.uniforms.u_scroll.value.set(scrollX, -scrollY);
});

// Добавляем эффект при удалении мыши с экрана
renderer.domElement.addEventListener("mouseleave", () => {
  material.uniforms.u_mouse.value.set(-100, -100); // Убираем мышь далеко
});

// Touch support для мобильных
renderer.domElement.addEventListener("touchmove", (event) => {
  event.preventDefault();
  const touch = event.touches[0];
  mouse.x = touch.clientX / window.innerWidth;
  mouse.y = 1.0 - touch.clientY / window.innerHeight;
  material.uniforms.u_mouse.value.set(mouse.x, mouse.y);
});

renderer.domElement.addEventListener("touchend", () => {
  material.uniforms.u_mouse.value.set(-100, -100);
});

// Ресайз
window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setSize(width, height);
  material.uniforms.u_resolution.value.set(width, height);

  // Обновляем проекцию камеры
  camera.left = -1;
  camera.right = 1;
  camera.top = 1;
  camera.bottom = -1;
  camera.updateProjectionMatrix();
}

// --- ПОДСЧЕТ КОЛИЧЕСТВА ТОЧЕК ДЛЯ ИНФО ---

// --- АНИМАЦИЯ ---
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  // Обновляем время для анимации
  time.value += clock.getDelta();
  material.uniforms.u_time.value = time.value;

  renderer.render(scene, camera);
}

animate();
