import * as THREE from 'three'

export function factoryShadow(scene, color, intens, w, h, position, isHelper) {
	const spotLight = new THREE.SpotLight(color, intens)
	spotLight.position.copy(position)
	spotLight.lookAt(0, 0, -1)

	// ТЕНЬ #1: target в сцену!
	scene.add(spotLight.target)

	spotLight.angle = Math.PI / 4 // ширина ~45° (имитирует размер)
	spotLight.penumbra = 0.7 // мягкие края
	spotLight.distance = 30

	// Тени!
	spotLight.castShadow = true
	spotLight.shadow.mapSize.set(5200, 5200)
	spotLight.shadow.camera.near = 0.5
	spotLight.shadow.camera.far = 50
	spotLight.shadow.normalBias = 0.02
	spotLight.shadow.camera.fov = 60
	scene.add(spotLight)

	if (!isHelper) return

	//   // Визуальная Plane остаётся
	const planeGeo = new THREE.PlaneGeometry(w, h)
	const planeMat = new THREE.MeshStandardMaterial({
		color: color,
		emissive: 0x444444,
		emissiveIntensity: intens * 0.3,
	})
	const lightPlane = new THREE.Mesh(planeGeo, planeMat)
	lightPlane.position.copy(position)
	lightPlane.lookAt(0, 0, -1)
	lightPlane.castShadow = true // панель бросает тень
	lightPlane.receiveShadow = false
	scene.add(lightPlane)

	const helper = new THREE.CameraHelper(spotLight.shadow.camera)
	scene.add(helper) // Зеленый конус должен захватывать модель
}
