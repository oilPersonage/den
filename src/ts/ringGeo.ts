import * as THREE from 'three'

export function ringGeometry(scene) {
	const radius = 10 // Радиус
	const thickness = 10 // Толщина кольца
	const innerR = radius - thickness
	const outerR = radius

	const ringGeo = new THREE.RingGeometry(innerR, outerR, 64, 1)
	ringGeo.rotateX(-Math.PI / 2)

	const ringMat = new THREE.MeshStandardMaterial({
		// color: 0xffffff,
		receiveShadow: true, // ✅ Тени работают
	})
	const ringMesh = new THREE.Mesh(ringGeo, ringMat)
	ringMesh.position.y = 0.2
	scene.add(ringMesh)
}
