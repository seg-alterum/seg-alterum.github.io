import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

let object;
let controls;

// Change objToRender to the file name where scene.gltf is located
let objToRender = 'head';

const loader = new GLTFLoader();

loader.load(
  `./models/${objToRender}/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    scene.add(object);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);

const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.getElementById("container3D").appendChild(renderer.domElement);

camera.position.z = 4;

const ambient = new THREE.HemisphereLight( 0xae34eb, 0x04B2D9, 0.7 );
const light = new THREE.DirectionalLight(0xffffff, 1);
ambient.position.set(-3,0,-1)
light.position.set( 100, 0, 100 );

var lightHolder = new THREE.Group();
lightHolder.add(light);
lightHolder.add(ambient)
scene.add(lightHolder);

controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.enableZoom = false;
controls.maxPolarAngle = Math.PI/2;
controls.minPolarAngle = Math.PI/2;

function animate() {
  requestAnimationFrame(animate);
  lightHolder.quaternion.copy(camera.quaternion);
  renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


animate();