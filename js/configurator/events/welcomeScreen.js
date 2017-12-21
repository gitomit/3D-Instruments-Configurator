/**
 * opens the welcome screen on startup of application with the sweetalert library
 * @return {undefined}
 */
function welcome() {
    swal({
        title: "Welcome to the 3D Instruments-Configurator",
        text: "Click and hold the left mouse button "+"<img src='assets/img/app/leftmouse.png'>"+"and move the mouse in any direction" +
        " to change the view of the product. Use the mouse wheel "+"<img src='assets/img/app/mousewheel.png'>"+"to zoom in and out." +
        "The menue to change body shape, woods or mechanic colors opens with the " +
        "<img src='assets/img/app/menuebutton.png'> button in the upper right corner.Note that all gizzmoes custom guitars "+
        "have carefully selected mahogany quality tonewood for a perfect warm and sustainable sound. ",
        html: true,
        confirmButtonColor:"#878181",
        confirmButtonText: "Start Configuring!",
    });
}