import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js'

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

// import { DRACOLoader } from '/js/DRACOLoader.js';
// import { MeshSurfaceSampler } from '/js/MeshSurfaceSampler.js';
// import { TWEEN } from '/js/tween.module.min.js';

/**
 * Debug
 */
// const stats = new Stats()
// stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
// document.body.appendChild(stats.dom)

const canvas = document.querySelector('canvas')

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Scene
const scene = new THREE.Scene()

/**
 * Loaders
 */
const loadingManager = new THREE.LoadingManager();

const progressContainer = document.getElementById("progress");
const progressBar = document.getElementById("progress-bar");

loadingManager.onProgress = function(url, loaded, total) {
    progressBar.style.width = (loaded / total) * 100 + "%";
}
loadingManager.onLoad = function(url, loaded, total){
    progressContainer.style.display = "none";
    document.getElementById("start-button").style.display = "block";
    
}

// Draco loader
// const dracoLoader = new DRACOLoader()
// dracoLoader.setDecoderPath('/js/draco/');

// GLTF loader
const gltfLoader = new GLTFLoader(loadingManager)
// gltfLoader.setDRACOLoader(dracoLoader)

// Models

var island;
gltfLoader.load(
    'base2.glb', 
    function(gltf){
        island = gltf.scene;
        gltf.scene.traverse( function( node ) {
            if ( node.isMesh ) { 
                node.castShadow = true;
                node.receiveShadow = true;
            }
        } );
        scene.add(island)
});

// Camera
const camera = new THREE.PerspectiveCamera(64, sizes.width / sizes.height, 1, 90);
camera.position.set(0,30,30);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.target.set(0,0,0);
controls.enablePan = false;
controls.minPolarAngle = Math.PI/2.4;
controls.maxPolarAngle = Math.PI/2.15;
controls.minDistance = 16;
controls.maxDistance = 30;
controls.enableDamping = true;
controls.rotateSpeed = 0.25;

// Renderer
THREE.Cache.enabled = true;

// let AA = true
// if (window.devicePixelRatio > 1) {
//   AA = false
// }

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor( 0xffffff, 0);
scene.background = null;

renderer.outputEncoding = THREE.sRGBEncoding;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;


window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})


document.getElementById("start-button").onclick = function() {
    // document.getElementById("loadingscreen").classList.add("hidden");

    new TWEEN.Tween(camera.position)
    .to( { x: 0, y:3, z:16 }, 1000)
    .easing(TWEEN.Easing.Cubic.Out)
    .start()
  ;
}

// Lights
// const hemiLight = new THREE.HemisphereLight( 0xfff, 0xfff, 0.6 );
// hemiLight.color.setHSL( 0.6, 1, 0.6 );
// hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
// hemiLight.position.set( 0, 500, 0 );
// scene.add( hemiLight );

// let shadowMapSize = 13;
// const sunLight = new THREE.DirectionalLight(0xffffff, 1, 100);
// sunLight.position.set(0,12,12);
// sunLight.color.setHSL( 0.1, 1, 0.95 );
// sunLight.visible = true;
// sunLight.castShadow = true;
// sunLight.shadow.mapSize.width = 2048;
// sunLight.shadow.mapSize.height = 2048;
// sunLight.shadow.camera.near = 0.5; 
// sunLight.shadow.camera.far = shadowMapSize*2;
// sunLight.shadow.camera.top = shadowMapSize;
// sunLight.shadow.camera.bottom = -shadowMapSize;
// sunLight.shadow.camera.left = -shadowMapSize;
// sunLight.shadow.camera.right = shadowMapSize;
// sunLight.shadow.normalBias = 0.02;
// scene.add(sunLight);
// scene.add( sunLight.target );

// // const helper = new THREE.CameraHelper( sunLight.shadow.camera );
// // scene.add( helper );

// const spotLight = new THREE.SpotLight(0xffffff, 4, 6, Math.PI/4, 1, 1);
// spotLight.position.set( 0, 3.5, 0 );
// spotLight.visible = false;
// spotLight.castShadow = false;
// spotLight.shadow.mapSize.width = 1024;
// spotLight.shadow.mapSize.height = 1024;
// spotLight.shadow.camera.near = 0.5; 
// spotLight.shadow.camera.far = 2;
// spotLight.shadow.normalBias = 0.02;
// scene.add( spotLight );
// scene.add( spotLight.target );

// const helper2 = new THREE.CameraHelper( spotLight.shadow.camera );
// scene.add( helper2 );

// Cursor
const cursor = {
    x: 0,
    y: 0
}


window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = - (event.clientY / sizes.height - 0.5)
})


// let scrollSpeed = (function(){

//     let lastPos, newPos, delta
  
//     function clear() {
//       lastPos = null;
//       delta = 0;
//     }
  
//     clear();
    
//     return function(){
//       newPos = controls.getAzimuthalAngle();
//       if ( lastPos != null ){ // && newPos < maxScroll 
//         delta = newPos -  lastPos;
//       }
//       if (delta == 1 || delta == -1 ) delta = 0;
//       if (delta < -1) { 
//           delta = -delta; 
//         }
//       //else if (delta > 1) cyclist.rotation.z = 0;
//       if ( action2 )  action2.timeScale = delta*160;

//       lastPos = newPos;
//       return delta;
    
//     };
// })();


//Interaction with Objects

// window.addEventListener('click', onDocumentMouseDown, false);

// var raycaster = new THREE.Raycaster();
// var mouse = new THREE.Vector2();
// function onDocumentMouseDown( event ) {
// event.preventDefault();
// mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
// mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
// raycaster.setFromCamera( mouse, camera );
// var intersects = raycaster.intersectObjects( scene.children );
// if ( intersects.length > 0 ) {
//     console.log (intersects[1].object.name);
// }}
    

/**
 * Animate
 */
let azimuthalAngle;




const tick = () =>
 {
    // Update controls
    controls.update()

    // Update cyclist position
    azimuthalAngle = controls.getAzimuthalAngle();
   

    // spotLight.position.x = Math.sin(azimuthalAngle) * 12.4;
    // spotLight.position.z = Math.cos(azimuthalAngle) * 12.4;
    // spotLight.target.position.x = Math.sin(azimuthalAngle) * 9;
    // spotLight.target.position.z = Math.cos(azimuthalAngle) * 9;

   


    // if (mug) {
    //     mug.rotation.y -= 0.01;
    // }


    // scrollSpeed();

    TWEEN.update();

    // Render
    // stats.begin()
    renderer.render(scene, camera)
    // stats.end()

 
     // Call tick again on the next frame
     window.requestAnimationFrame(tick)
 }
 
 tick()