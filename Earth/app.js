// app.js

// Create scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load textures
const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load(
    'https://threejsfundamentals.org/threejs/resources/images/earth-day.jpg',
    () => {
        console.log('Earth texture loaded successfully');
    },
    undefined,
    (err) => {
        console.error('Error loading earth texture', err);
    }
);
const normalTexture = textureLoader.load(
    'https://threejsfundamentals.org/threejs/resources/images/earth-normal.jpg',
    () => {
        console.log('Normal texture loaded successfully');
    },
    undefined,
    (err) => {
        console.error('Error loading normal texture', err);
    }
);
const specularTexture = textureLoader.load(
    'https://threejsfundamentals.org/threejs/resources/images/earth-specular.jpg',
    () => {
        console.log('Specular texture loaded successfully');
    },
    undefined,
    (err) => {
        console.error('Error loading specular texture', err);
    }
);

// Create Earth geometry and material
const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
const earthMaterial = new THREE.MeshPhongMaterial({
    map: earthTexture,
    normalMap: normalTexture,
    specularMap: specularTexture,
    shininess: 10
});

const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

// Add a light source
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5, 3, 5);
scene.add(light);

// Set the camera position
camera.position.z = 3;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the Earth for a dynamic effect
    earth.rotation.y += 0.001;

    renderer.render(scene, camera);
}

animate();

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
