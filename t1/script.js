import * as THREE from "three"
import {OrbitControls} from "three/addons/controls/OrbitControls.js"

const size = {
    width: 960,
    height: 540
}

const scene = new THREE.Scene()
scene.add(new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), 
    new THREE.MeshBasicMaterial({ color: 'blue' })))

const camera = new THREE.PerspectiveCamera(75, size.width / size.height)
camera.position.z = 3
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(size.width, size.height)
renderer.render(scene, camera)
