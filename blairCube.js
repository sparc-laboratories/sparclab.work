import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const texture = new THREE.TextureLoader().load( './assets/FELK.png' );
texture.colorSpace = THREE.SRGBColorSpace;
const material = new THREE.MeshBasicMaterial( { map: texture } );
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.11;
    cube.rotation.z += 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();