import * as THREE from 'three'

export function factoryShadow(prps) {
	const { scene, color, strength, position, delayIntensity, noShadow } = prps
	const spotLight = new THREE.SpotLight(color, delayIntensity ? 0 : strength)
	spotLight.position.copy(position)
	spotLight.lookAt(0, 0, -1)
	// ТЕНЬ #1: target в сцену!
	scene.add(spotLight.target)

	spotLight.angle = Math.PI / 4 // ширина ~45° (имитирует размер)
	spotLight.penumbra = 0.7 // мягкие края
	spotLight.distance = 30

	// Тени!
	if (!noShadow) {
		spotLight.castShadow = true
		spotLight.shadow.mapSize.set(5200, 5200)
		spotLight.shadow.camera.near = 0.5
		spotLight.shadow.camera.far = 50
		spotLight.shadow.normalBias = 0.02
		spotLight.shadow.camera.fov = 60
	}

	if (delayIntensity) {
		setTimeout(() => {
			spotLight.intensity = strength
		}, 5000)
	}

	return spotLight
}
