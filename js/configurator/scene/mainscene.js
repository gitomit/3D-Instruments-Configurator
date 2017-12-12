/**
 *  setting up the scene, camera, loader and renderer variables for the init function to work with for the first
 *  startup of application 
 */
var scene, camera, renderer;
var controls;
var SCREEN_WIDTH, SCREEN_WIDTH;
var group = new THREE.Object3D();
var textureChanged = false;
var bodyChanged = false;
var initialLoading = true;

/**
 * saves the current configuration of the instrument in an unidimensional array
 */
var configArray = [];
configArray['bodyshape'] = 'normal';
configArray['frontwood'] = 'oak';
configArray['sidewood'] = 'walnut';
configArray['fretboard'] = 'rosewood';
configArray['mechanics'] = 'silver';
configArray['neckwood'] = 'mahogany';

/**
 * saves the integer values for the prices of the instrument in a multidimensional array
 */
var priceSet = [['body',299], ['workingHoursFixed',279], ['frontwood', 99], ['sidewood', 79], ['neckwood', 149], ['fretboard', 29], ['mechanics', 39]];

/**
 * init function for setting up the scene, controls, camera etc. for the first time on startup of browser application
 * @param:
 * @returns: 
 */
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, .1, 500);
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render);
    controls.minDistance = 5;
    controls.maxDistance = 35
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 1;
    controls.addEventListener('change', render);
    camera.position.x = 8;
    camera.position.y = -2;
    camera.position.z = 18;
    camera.lookAt(scene.position);
    
    hemilight1 = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.4);
    hemilight1.position.set(-300, 200, -3000);
    scene.add(hemilight1);
    spotlight1 = new THREE.SpotLight(0xffffff);
    spotlight1.position.set(300, 300, -1000);
    scene.add(spotlight1);
    spotlight2 = new THREE.SpotLight(0xffffff);
    spotlight2.position.set(-300, 300, 1000);
    scene.add(spotlight2);
    
    loader.load('json/meshes/shapebase_working.json', shapeloader);
    loader.load('json/meshes/fretboard_working.json', shapeloader);
    loader.load('json/meshes/bridge1057.json', shapeloader);
    loader.load('json/meshes/headtop1134.json', shapeloader);
    loader.load('json/meshes/neck1215.json', shapeloader);
    loader.load('json/meshes/stringthick.json', shapeloader);
    loader.load('json/meshes/stringthin.json', shapeloader);
    loader.load('json/meshes/frets.json', shapeloader);
    loader.load('json/meshes/rules.json', shapeloader);
    loader.load('json/meshes/saddle.json', shapeloader);
    loader.load('json/meshes/screw.json', shapeloader);
    loader.load('json/meshes/screwblack.json', shapeloader);
    loader.load('json/meshes/spring.json', shapeloader);
    loader.load('json/meshes/tuningpegsscrew.json', shapeloader);
    loader.load('json/meshes/tuningpegs.json', shapeloader);
    loader.load('json/meshes/rosette1233.json', shapeloader);
    loader.load('json/meshes/mechanics1141.json', shapeloader);
    loader.load('json/meshes/metal.json', shapeloader);
    loader.load('json/meshes/nut.json', shapeloader);

    priceSum = calculatePriceSum(priceSet);
    $('#priceFrontend').html(priceSum);
    $('.rotateCheckbox')[0].checked = true;
    $("#container").append(renderer.domElement);
    welcome();
}