/**
 * loading manager for THREE elements
 * @type {THREE.LoadingManager}
 */
var manager = new THREE.LoadingManager();
manager.onStart = function () {
    $('.loaderBar').removeClass('loaderScaleAfter');
};

/**
 * onProgress functionality for the loader Bar to be displayed
 * @param {type} item: the item do be passed
 * @param {type} loaded: loaded percentage
 * @param {type} total: total percentage
 */
manager.onProgress = function (item, loaded, total) {
    var loadedBar = (loaded / total * 100);
    $('.progressBar').css({
        'width': (loaded / total * 100) + '%'
    });

    if ((loaded / total * 100) >= 100) {
        $('.loaderBar').addClass('loaderScaleAfter');
    }
};

/**
 * adds the meshes group to the scene
 */
manager.onLoad = function () {
    scene.add(group);
};

/**
 * json loader for the materials / meshes in JSON format
 * @type {THREE.JSONLoader}
 */
var loader = new THREE.JSONLoader(manager);