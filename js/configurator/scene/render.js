/**
 * rendering function for the scene and rotation of 3d object group. Optional rotation
 * is defined here
 */
function render() {
    if ($('.rotateCheckbox')[0].checked !== false) {
        group.rotation.y -= 0.002;
    }
}

/**
 *  animating function that calls the rendering functions and handles scene and camera 
 *  to the renderer
 */
function animate() {
    requestAnimationFrame(animate);
    render();
    renderer.render(scene, camera);
}

// call of init and animate function
init();
animate();

/**
 * window resizing function. Adjusts for different sizes of the screen
 */
$(window).resize(function () {
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    camera.updateProjectionMatrix();
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
});