const wrapper = document.querySelector("#dots-canvas");
// import GUI from "lil-gui";

import * as THREE from "three";

// --- НАСТРОЙКИ ---
const CONFIG = {
  spacing: 20, // Расстояние между точками (пиксели)
  baseRadius: 0.9, // Базовый радиус
  hoverRadius: 2.3, // Радиус при наведении
  influenceRadius: 2050.0, // Радиус влияния мыши
  color: new THREE.Color(0x000000),
  // color: new THREE.Color(0x808080),
  density: 1.5 // Плотность точек (1.0 = стандарт)
};

// --- ИНИЦИАЛИЗАЦИЯ THREE.JS ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Ортографическая камера для 2D
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  powerPreference: "high-performance"
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
      value: resolution
    },
    u_scroll: { value: new THREE.Vector2(0, 0) },
    u_spacing: { value: CONFIG.spacing },
    u_baseRadius: { value: CONFIG.baseRadius },
    u_influenceRadius: { value: CONFIG.influenceRadius },
    u_color: { value: CONFIG.color },
    u_density: { value: CONFIG.density }
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

void main() {
    vec2 st = vUv;
    vec2 pixelCoord = st * u_resolution + u_scroll;
    vec2 mousePixel = u_mouse * u_resolution + u_scroll;
    
    vec2 gridPos = floor(pixelCoord / u_spacing);
    vec2 dotPos = (gridPos + 0.5) * u_spacing;
    
    vec2 distToDot = pixelCoord - dotPos;
    float dist = length(distToDot);
    
    vec2 mouseToDot = dotPos - mousePixel;
    float distToMouse = length(mouseToDot);

    // ПЛАВНОЕ влияние мыши через smoothstep
    // В центре мыши (distToMouse = 0) -> influence = 1
    // На границе радиуса (distToMouse = u_influenceRadius) -> influence = 0
    // Между ними - плавный переход
    float mouseInfluence = 1.0 - smoothstep(0.0, u_influenceRadius, distToMouse);
    
    // Рисуем точку
    float alpha = dist < u_baseRadius ? 1.0 : 0.0;
		float mouseAlpha = 0.1 - smoothstep(0.0, u_influenceRadius, distToMouse);
    
    gl_FragColor = vec4(u_color,  alpha * mouseAlpha);
}`
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
  console.log(material.uniforms.u_scroll.value.y);
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
function updateDotCount() {
  const cols = Math.ceil(window.innerWidth / CONFIG.spacing) * CONFIG.density;
  const rows = Math.ceil(window.innerHeight / CONFIG.spacing) * CONFIG.density;
  const total = Math.floor(cols * rows);
}
updateDotCount();
window.addEventListener("resize", updateDotCount);

// --- АНИМАЦИЯ ---
let clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  // Обновляем время для анимации
  time.value += clock.getDelta();
  material.uniforms.u_time.value = time.value;

  renderer.render(scene, camera);
}

animate();

// --- ДОПОЛНИТЕЛЬНЫЙ ЭФФЕКТ: СЛУЧАЙНЫЕ ЦВЕТА ---
// Раскомментируйте для радужных точек
/*
        setInterval(() => {
            const hue = Math.random();
            material.uniforms.u_color.value.setHSL(hue, 0.8, 0.6);
        }, 2000);
        */

console.log("🚀 Shader dots запущен!");
console.log("💪 Используется GPU для миллионов точек");
