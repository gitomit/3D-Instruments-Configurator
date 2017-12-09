/**
 * loader manager functions for progressbar, starting and loading
 * @type {qt}
 */
var manager = new THREE.LoadingManager();
manager.onStart = function () {
    $('.loaderBar').removeClass('loaderScaleAfter');
}
manager.onProgress = function (item, loaded, total) {
    var loadedBar = (loaded / total * 100);
    $('.progressBar').css({
        'width': (loaded / total * 100) + '%'
    });

    if ((loaded / total * 100) >= 100) {
        $('.loaderBar').addClass('loaderScaleAfter');
    }
}
manager.onLoad = function () {
    scene.add(group);
}

/**
 * json loader for the materials / meshes
 * @type {THREE.JSONLoader}
 */
var loader = new THREE.JSONLoader(manager);