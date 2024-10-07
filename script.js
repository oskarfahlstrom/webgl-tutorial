import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

console.log("hello world!")


// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
const tick = () => {
    const elapsedTime = 
    clock.getElapsedTime()
    // Update controls
    controls.update()
    // Render
    renderer.render(scene, camera)
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick()
