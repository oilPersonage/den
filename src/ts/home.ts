import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { HDRLoader } from "three/addons/loaders/HDRLoader.js";
import { isIndex, isMobile } from "ts/config";
import { factoryShadow } from "./factoryShadow";
// const gui = new GUI()
let animatedId = null;
let mixer = null;
let isPlaying = false;
let animate = null;

// const repoName = ''
const repoName = "/den";
const wrapper = document.querySelector(".canvas-wrapper") as HTMLElement;
const clock = new THREE.Clock(); // для delta time

if (isIndex) {
  const TARGET = isMobile
    ? new THREE.Vector3(-1.5, 0, 1.5)
    : new THREE.Vector3(0, 0, -0);
  const lightData = {
    1: { x: -0.8, y: 20, z: 15, strength: 2400 },
    2: { x: 20, y: 20, z: -6, strength: 2400 },
    3: { x: -20, y: 8, z: -6, strength: 2500 }
    // 4: { x: 0, y: 3, z: 4, strength: 10, target: new THREE.Vector3(0, -20, 4), noShadow: true },
    // 5: { x: -1, y: 3, z: 4, strength: 10, target: new THREE.Vector3(0, -20, 4), noShadow: true },
  };
  const actions = [];

  // Сцена, камера, рендерер
  const scene = new THREE.Scene();
  const width = wrapper.clientWidth;
  const height = wrapper.clientHeight;
  const camera = new THREE.OrthographicCamera(
    -width / 2,
    width / 2,
    height / 2,
    -height / 2,
    -1000,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setClearAlpha(0);
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // мягкие, сглаженные тени
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMappingExposure = 1; // Уменьшить яркость (0.6 = тусклее)
  wrapper.appendChild(renderer.domElement);

  function createLights() {
    for (const key of Object.keys(lightData)) {
      const { x, y, z, strength, target, noShadow } = lightData[key];
      const light = factoryShadow({
        scene,
        color: 0xffffff,
        strength,
        position: new THREE.Vector3(x, y, z),
        delayIntensity: !!target,
        noShadow
      });

      scene.add(light);

      if (target) {
        light.target.position.copy(target);
      }

      // const folder = gui.addFolder(key)

      // folder
      // 	.add(lightData[key], 'x', -20, 1)
      // 	.max(20)
      // 	.onChange((v) => (light.position.x = v))
      // folder
      // 	.add(lightData[key], 'y', -20, 1)
      // 	.max(20)
      // 	.onChange((v) => (light.position.y = v))
      // folder
      // 	.add(lightData[key], 'z', -20, 1)
      // 	.max(20)
      // 	.onChange((v) => (light.position.z = v))
      // folder.add(lightData[key], 'strength').onChange((v) => (light.intensity = v))
    }
  }

  const loader = new GLTFLoader();
  let model;
  loader.load(
    repoName + `/home2.glb`,
    (gltf) => {
      model = gltf.scene;
      scene.background = null;
      scene.add(model);

      mixer = new THREE.AnimationMixer(gltf.scene);
      // prepareConfiguration(gltf, scene, camera)

      // Центрирование модели
      // const box = new THREE.Box3().setFromObject(model)
      // const center = box.getCenter(new THREE.Vector3())
      // model.position.sub(center)

      gltf.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        // action.setLoop(THREE.LoopPingPong, Infinity);
        action.setLoop(THREE.LoopOnce);
        action.clampWhenFinished = true;
        action.play(); // ВСЕ анимации по своим таймингам!
        actions.push(action);
      });

      gltf.scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.material.mapping = THREE.EquirectangularReflectionMapping;
          obj.castShadow = true; // если этот объект должен бросать тень
          obj.receiveShadow = true; // если по нему должна проходить/падать тень
          obj.material.side = THREE.FrontSide; // иногда помогает с артефактами
        }
      });
      createLights();
    },
    undefined,
    (error) => console.error("Ошибка загрузки:", error)
  );

  // Контролы камеры (minDistance 1, без переворота)
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.minDistance = 5; // Не ближе 1м
  controls.maxDistance = 5;
  controls.minPolarAngle = Math.PI / 8; // Не опускаться слишком низко
  controls.maxPolarAngle = Math.PI / 2.4; // Не переворачивать вверх
  controls.target.copy(TARGET);
  controls.enablePan = false; // запрет перемещения камеры
  controls.enableZoom = false; // при необходимости — ещё и зум
  controls.minAzimuthAngle = Math.PI / 4; // 45 градусов влево
  controls.maxAzimuthAngle = Math.PI / 1.6; // 45 градусов вправо

  // Адаптация размера
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  // Только рабочие параметры OrbitControls
  // HDRI/Skybox окружение
  const hdrLoader = new HDRLoader();
  hdrLoader.load(repoName + `/sky.hdr`, (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envMap = pmremGenerator.fromEquirectangular(texture).texture;

    scene.environment = envMap; // освещение = PMREM
    // texture.envMapIntensity = 1.5

    pmremGenerator.dispose();

    scene.background = null;
  });

  const light = new THREE.AmbientLight(0xffffff, 0.7); // soft white light
  scene.add(light);

  camera.position.set(5, 5, 5);
  camera.zoom = 55;
  camera.updateProjectionMatrix();
  camera.lookAt(TARGET);
  // Анимация
  animate = () => {
    animatedId = requestAnimationFrame(animate);
    controls.update();
    if (isPlaying && mixer) {
      mixer.update(clock.getDelta()); // ✅ ТОЛЬКО когда играет
    }

    renderer.render(scene, camera);
  };
}

export function stopAnimationModel() {
  clock.stop();
  cancelAnimationFrame(animatedId);
  isPlaying = false;
}
export function playAnimationModel() {
  if (isPlaying) return;
  clock.start();
  animate?.();
  isPlaying = true;
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        playAnimationModel();
      } else {
        stopAnimationModel();
      }
    });
  },
  {
    threshold: 0.1 // Сработает, когда хотя бы 10% хедера в кадре
  }
);

export function animateModel() {
  wrapper?.classList.add("show");
  observer.observe(wrapper);
}

export {};
