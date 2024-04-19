import * as THREE from 'three';
import {MathUtils} from 'three';
import TWEEN from '@tweenjs/tween.js'

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

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

// const progressContainer = document.getElementById("progress");
// const progressBar = document.getElementById("progress-bar");

// loadingManager.onProgress = function(url, loaded, total) {
//     progressBar.style.width = (loaded / total) * 100 + "%";
// }
// loadingManager.onLoad = function(url, loaded, total){
//     progressContainer.style.display = "none";
//     document.getElementById("start-button").style.display = "block";
    
// }

// Draco loader
// const dracoLoader = new DRACOLoader()
// dracoLoader.setDecoderPath('/js/draco/');

// GLTF loader
const gltfLoader = new GLTFLoader(loadingManager)
// gltfLoader.setDRACOLoader(dracoLoader)

// Models

var island;
gltfLoader.load(
    'base.glb', 
    function(gltf){
        gltf.scene.traverse( function( node ) {

            if ( node.isMesh ) { 
                node.castShadow = true;
                node.receiveShadow = true;
            }
        } );
        scene.add(gltf.scene)
});

gltfLoader.load(
    'ground.glb', 
    function(gltf){
        // gltf.scene.traverse( function( node ) {

        
        //     if ( node.isMesh ) { 
        //         node.castShadow = true;
        //         node.receiveShadow = true;
        //     }
        // } );
        scene.add(gltf.scene)
});

gltfLoader.load(
    'river.glb', 
    function(gltf){
        gltf.scene.traverse( function( node ) {

            if ( node.isMesh ) { 
                node.castShadow = true;
                node.receiveShadow = true;
            }
        } );
        scene.add(gltf.scene)
});


gltfLoader.load(
    'boat.glb', 
    function(gltf){
        gltf.scene.traverse( function( node ) {

            if ( node.isMesh ) { 
                node.castShadow = true;
                node.receiveShadow = true;
            }
        } );
        scene.add(gltf.scene)
});


gltfLoader.load(
    'box.glb', 
    function(gltf){
        gltf.scene.traverse( function( node ) {

            if ( node.isMesh ) { 
                node.castShadow = true;
                node.receiveShadow = true;
            }
        } );
        scene.add(gltf.scene)
});


gltfLoader.load(
    'campfire.glb', 
    function(gltf){
        gltf.scene.traverse( function( node ) {

            if ( node.isMesh ) { 
                node.castShadow = true;
                node.receiveShadow = true;
            }
        } );
        scene.add(gltf.scene)
});


gltfLoader.load(
    'ladder.glb', 
    function(gltf){
        gltf.scene.traverse( function( node ) {

            if ( node.isMesh ) { 
                node.castShadow = true;
                node.receiveShadow = true;
            }
        } );
        scene.add(gltf.scene)
});


gltfLoader.load(
    'tent.glb', 
    function(gltf){
        gltf.scene.traverse( function( node ) {

            if ( node.isMesh ) { 
                node.castShadow = true;
                node.receiveShadow = true;
            }
        } );
        scene.add(gltf.scene)
});

let mixer = new THREE.AnimationMixer();
let clock = new THREE.Clock();

gltfLoader.load(
    'fire.glb', 
    function(gltf){
        // console.log(gltf)

        // let clip = mixer.clipAction(gltf.animations[0], gltf.scene);
        // clip.play();
        gltf.scene.position.set(-6, -0.1, 2.4)
        console.log(gltf.scene.position)
        scene.add(gltf.scene);
});
// // Camera
// const camera = new THREE.PerspectiveCamera(44, sizes.width / sizes.height, 0.01, 100);
// camera.position.set(-27, 21, 4);
// camera.rotation.set(-85 * MathUtils.DEG2RAD, -45.75* MathUtils.DEG2RAD , -80* MathUtils.DEG2RAD)

// it kinda works
const camera = new THREE.OrthographicCamera( sizes.width / - 2, sizes.width / 2, sizes.height / 2, sizes.height / - 2, 0.001, 100 );
camera.position.set(-50, 32, -0.1);
camera.zoom = 60;
camera.updateProjectionMatrix();


scene.add(camera);

window.camera = camera;
// Controls
let controls;
controls = new OrbitControls(camera, canvas);
// controls.target.set(0,0,0);
// controls.enablePan = false;
// controls.minPolarAngle = Math.PI/2.4;
// controls.maxPolarAngle = Math.PI/5.15;
// controls.minDistance = 16;
// controls.maxDistance = 50;
// controls.enableDamping = true;
// controls.rotateSpeed = 0.25;

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
renderer.setClearColor( 0x000000, 1);
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
    camera.left = sizes.width / - 2
    camera.right = sizes.width / 2
    camera.top = sizes.height / 2
    camera.bottom = sizes.height / - 2
    // camera.position.set(-50, 32, -0.1);
    // camera.rotation.set(-1.7032051055356119, -0.9855574759073757, -1.7292359412427576)
    // camera.zoom = 65;
    camera.updateProjectionMatrix();
    // camera.aspect = sizes.width / sizes.height;
    // camera.position.set(-50, 32, -0.1);
    // camera.rotation.set(-1.7032051055356119, -0.9855574759073757, -1.7292359412427576)
    // camera.zoom = 65;
    // camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})


// document.getElementById("start-button").onclick = function() {
//     // document.getElementById("loadingscreen").classList.add("hidden");

//     new TWEEN.Tween(camera.position)
//     .to( { x: 0, y:3, z:16 }, 1000)
//     .easing(TWEEN.Easing.Cubic.Out)
//     .start()
//   ;
// }

// Lights
const hemiLight = new THREE.HemisphereLight( 0xfff, 0xfff, 0.6 );
hemiLight.color.setHSL( 0.6, 1, 0.6 );
hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
hemiLight.position.set( 0, 500, 0 );
scene.add( hemiLight );

let shadowMapSize = 13;
const sunLight = new THREE.DirectionalLight(0xB29191, 1, 100);
sunLight.position.set(-3,0.7,2);
sunLight.color.setHSL( 0.1, 1, 0.95 );
sunLight.visible = true;
sunLight.castShadow = true;
sunLight.shadow.mapSize.width = 2048;
sunLight.shadow.mapSize.height = 2048;
sunLight.shadow.camera.near = 0.5; 
sunLight.shadow.camera.far = shadowMapSize*2;
sunLight.shadow.camera.top = shadowMapSize;
sunLight.shadow.camera.bottom = -shadowMapSize;
sunLight.shadow.camera.left = -shadowMapSize;
sunLight.shadow.camera.right = shadowMapSize;
sunLight.shadow.normalBias = 0.02;
scene.add(sunLight);
scene.add( sunLight.target );

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
    if(controls){
        controls.update()
    }

    // // Update cyclist position
    // azimuthalAngle = controls.getAzimuthalAngle();
   

    // spotLight.position.x = Math.sin(azimuthalAngle) * 12.4;
    // spotLight.position.z = Math.cos(azimuthalAngle) * 12.4;
    // spotLight.target.position.x = Math.sin(azimuthalAngle) * 9;
    // spotLight.target.position.z = Math.cos(azimuthalAngle) * 9;

   


    // if (mug) {
    //     mug.rotation.y -= 0.01;
    // }


    // scrollSpeed();

    // TWEEN.update();

    // Render
    // stats.begin()
    if ( mixer ) mixer.update( clock.getDelta() );
    renderer.render(scene, camera)

    // console.log(camera)
    // stats.end()

 
     // Call tick again on the next frame
     window.requestAnimationFrame(tick)
 }
 
 tick()