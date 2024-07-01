// app.js
// Create scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Add a light
const light = new THREE.PointLight(0xffffff);
light.position.set(10, 10, 10);
scene.add(light);

// Replace the material with a more complex one
const advancedMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
cube.material = advancedMaterial;

// Rotate the cube with mouse movement
document.addEventListener('mousemove', (event) => {
    cube.rotation.x = (event.clientY / window.innerHeight) * 2 * Math.PI;
    cube.rotation.y = (event.clientX / window.innerWidth) * 2 * Math.PI;
});

animate();
