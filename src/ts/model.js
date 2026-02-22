import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js'
import { factoryShadow } from './factoryShadow'
import Stats from 'three/examples/jsm/libs/stats.module'
import { ringGeometry } from './ringGeo'
// import { prepareConfiguration } from './animation.js'
//
const wrapper = document.querySelector('.canvas-wrapper')

export const TARGET = new THREE.Vector3(0, 0, -0)
export let mixer = null
const clock = new THREE.Clock() // для delta time

// Сцена, камера, рендерер
const scene = new THREE.Scene()
const width = wrapper.clientWidth
const height = wrapper.clientHeight
const camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, -1000, 1000)

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setClearColor(0x000000, 0)
renderer.setClearAlpha(0)
renderer.setSize(width, height)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap // мягкие, сглаженные тени
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMappingExposure = 1 // Уменьшить яркость (0.6 = тусклее)
wrapper.appendChild(renderer.domElement)

const stats = new Stats()
stats.showPanel(0) // 0: fps, 1: ms, 2: mb (память)
document.body.appendChild(stats.dom)

// Загрузка GLTF
const loader = new GLTFLoader()
let model
loader.load(
	'./building.glb',
	(gltf) => {
		model = gltf.scene
		scene.background = null
		scene.add(model)

		mixer = new THREE.AnimationMixer(gltf.scene)
		// prepareConfiguration(gltf, scene, camera)

		// Центрирование модели
		// const box = new THREE.Box3().setFromObject(model)
		// const center = box.getCenter(new THREE.Vector3())
		// model.position.sub(center)

		gltf.animations.forEach((clip) => {
			const action = mixer.clipAction(clip)
			action.setLoop(THREE.LoopPingPong, Infinity)
			action.play() // ВСЕ анимации по своим таймингам!
		})

		gltf.scene.traverse((obj) => {
			if (obj.isMesh) {
				obj.material.mapping = THREE.EquirectangularReflectionMapping
				obj.castShadow = true // если этот объект должен бросать тень
				obj.receiveShadow = true // если по нему должна проходить/падать тень
				obj.material.side = THREE.FrontSide // иногда помогает с артефактами
			}
		})
	},
	undefined,
	(error) => console.error('Ошибка загрузки:', error),
)

// Контролы камеры (minDistance 1, без переворота)
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.minDistance = 5 // Не ближе 1м
controls.maxDistance = 5
controls.minPolarAngle = Math.PI / 8 // Не опускаться слишком низко
controls.maxPolarAngle = Math.PI / 2.4 // Не переворачивать вверх
controls.target.copy(TARGET)
controls.enablePan = false // запрет перемещения камеры
controls.enableZoom = false // при необходимости — ещё и зум
controls.minAzimuthAngle = Math.PI / 4 // 45 градусов влево
controls.maxAzimuthAngle = Math.PI / 1.6 // 45 градусов вправо

// Адаптация размера
window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
})

// Только рабочие параметры OrbitControls

// HDRI/Skybox окружение
const hdrLoader = new HDRLoader()
hdrLoader.load('./sky.hdr', (texture) => {
	texture.mapping = THREE.EquirectangularReflectionMapping

	const pmremGenerator = new THREE.PMREMGenerator(renderer)
	const envMap = pmremGenerator.fromEquirectangular(texture).texture

	scene.environment = envMap // освещение = PMREM
	// texture.envMapIntensity = 1.5

	pmremGenerator.dispose()

	scene.background = null
})

factoryShadow(scene, 0xffffff, 5000, 2, 2, new THREE.Vector3(5, 20, 15), false)
factoryShadow(scene, 0xffffff, 500, 2, 2, new THREE.Vector3(20, 10, 15), false)
factoryShadow(scene, 0xffffff, 400, 2, 2, new THREE.Vector3(5, 5, -15), false)

// ringGeometry(scene)

const light = new THREE.AmbientLight(0xffffff, 1) // soft white light
scene.add(light)

camera.position.set(5, 5, 5)
camera.zoom = 55
camera.updateProjectionMatrix()
camera.lookAt(TARGET)
// Анимация
function animate() {
	requestAnimationFrame(animate)

	// Копирует позицию target в бокс
	controls.update()
	const delta = clock.getDelta() // время между кадрами
	mixer?.update(delta)

	renderer.render(scene, camera)
	stats.update()
}
animate()
