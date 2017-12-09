/**
 * provides button click events for the upper right menue that opens up
 */
$('.menuClickZone').on('click', function (event) {

    event.preventDefault();
    if ($('.menuswitch').hasClass('plus')) {

        TweenMax.staggerFrom('.s-btn', .05, {y: 10}, 0.05);

        $('.s-btn-container').removeClass('menuVis');
        $('.menuswitch').toggleClass('plus');
    }
    else {
        $('.s-btn-container').addClass('menuVis');
        $('.menuswitch').toggleClass('plus');
    }
});

/**
 * calculates frame width and margin for css
 * @type {number}
 */
var sBodyWidth = -($('.s-body').width()) / 2;
$('.s-body').css({
    'margin-left': sBodyWidth
});

var sFrontwoodWidth = -($('.s-body').width()) / 2;
$('.s-frontwood').css({
    'margin-left': sFrontwoodWidth
});

var sSidewoodWidth = -($('.s-body').width()) / 2;
$('.s-sidewood').css({
    'margin-left': sSidewoodWidth
});

var sNeckwoodWidth = -($('.s-body').width()) / 2;
$('.s-neckwood').css({
    'margin-left': sSidewoodWidth
});

var sFretboardWidth = -($('.s-body').width()) / 2;
$('.s-fretboard').css({
    'margin-left': sSidewoodWidth
});

var sMechanicsWidth = -($('.s-body').width()) / 2;
$('.s-mechanics').css({
    'margin-left': sSidewoodWidth
});

/**
 * mouseover functionality
 */
$('.s-body img, .s-frontwood img, .s-sidewood img, .s-neckwood img, .s-fretboard img, .s-mechanics img').mouseover(function () {
    $('.overInfo').text($(this).attr('alt'));

    var off = $(this).offset();
    var bot = $(this).outerHeight();
    $('.overInfo').css({
        'left': off.left,
        'bottom': bot,
        'width': $(this).outerWidth()
    });
    $('.overInfo').addClass('oi-over');
}).mouseout(function () {
    $('.overInfo').removeClass('oi-over');
});

/**
 * css events for the body chooser
 */
$('.s-bodyBtn').on('click', function () {

    $('#fabric, #fabrics').removeClass('ftog');
    $('.s-btn').removeClass('s-btnActive');
    $(this).addClass('s-btnActive');

    $('.selectees').children().removeClass('s-toggle');
    $('.s-body').addClass('s-toggle');
});

/**
 * function to change the guitar bodies and the price for body
 */
$('.s-body img').on('click', function () {

    $('.s-body img').addClass("disabledbutton");

        let children = group.children


    for(let i=0; i < children.length; i++) {
            let matArray = children[i].material.materials
            for(let j=0; j < matArray.length; j++) {
                if(matArray[j].name == 'Body front'){
                    group.remove(children[i])
                }
            }
        }

        if(this.alt =="cutaway") {
            calculationBody(269);
            $('#priceFrontend').html(priceSum);
            textureChanged = false;
            bodyChanged = true;
            configArray['bodyshape'] = 'cutaway';
            loader.load('json/meshes/shapecutaway.json', shapeloader);
        }

        else if(this.alt=="normal") {
            calculationBody(299);
            $('#priceFrontend').html(priceSum);
            textureChanged = false;
            bodyChanged = true;
            configArray['bodyshape'] = 'normal';
            loader.load('json/meshes/shapebase_working.json', shapeloader);
        }

    
    $('.s-body img').removeClass("disabledbutton");
});

/**
 * function to change the frontwood of the body
 */
$('.s-frontwood img').on('click', function () {

    $('.s-frontwood img').addClass("disabledbutton");

    if(this.alt =="maple") {
        calculationFrontWood(99)
        $('#priceFrontend').html(priceSum);
        textureChanged = true
        bodyChanged = false
        configArray['frontwood'] = 'oak';
        var whatChanged = 'Body front'
        matloader(model_mesh, initialLoading, textureChanged, bodyChanged, whatChanged)
    }
    else if(this.alt == "ash") {
        calculationFrontWood(159)
        $('#priceFrontend').html(priceSum);
        textureChanged = true
        bodyChanged = false
        configArray['frontwood'] = 'frontwood2';
        var whatChanged = 'Body front'
        matloader(model_mesh, initialLoading, textureChanged, bodyChanged,whatChanged)
    }

    $('.s-frontwood img').removeClass("disabledbutton");
});

/**
 * css click function for frontwood part of the menue
 */
$('.s-frontwoodBtn').on('click', function () {

    $('#fabric, #fabrics').removeClass('ftog');
    $('.s-btn').removeClass('s-btnActive');
    $(this).addClass('s-btnActive');

    $('.selectees').children().removeClass('s-toggle');
    $('.s-frontwood').addClass('s-toggle');
});

/**
 * dto for the frontwood button images
 */
$('.s-frontwood img').on('click', function () {

    $('.s-frontwood img').addClass("disabledbutton");
    $('.s-frontwood img').removeClass("disabledbutton");
});

/**
 * function to change the sidewood of the body
 */
$('.s-sidewood img').on('click', function () {

    $('.s-sidewood img').addClass("disabledbutton");

 if(this.alt =="walnut") {
        calculationSideWood(79)
        $('#priceFrontend').html(priceSum);
        textureChanged = true
        bodyChanged = false
        configArray['sidewood'] = 'walnut';
        var whatChanged = 'Body side'
        matloader(model_mesh, initialLoading, textureChanged, bodyChanged, whatChanged)
    }
    else if(this.alt == "pinebark") {
        calculationSideWood(139)
        $('#priceFrontend').html(priceSum);
        textureChanged = true
        bodyChanged = false
        configArray['sidewood'] = 'pinebark';
        var whatChanged = 'Body side'
        matloader(model_mesh, initialLoading, textureChanged, bodyChanged, whatChanged)
    }

    else if(this.alt =="carbon") {
        calculationSideWood(269)
        $('#priceFrontend').html(priceSum);
        textureChanged = true
        bodyChanged = false
        configArray['sidewood'] = 'carbon';
        var whatChanged = 'Body side'
        matloader(model_mesh, initialLoading, textureChanged, bodyChanged, whatChanged)
    }

    $('.s-sidewood img').removeClass("disabledbutton");
});

/**
 * css click function for sidewood part of the menue
 */
$('.s-sidewoodBtn').on('click', function () {

    $('#fabric, #fabrics').removeClass('ftog');
    $('.s-btn').removeClass('s-btnActive');
    $(this).addClass('s-btnActive');

    $('.selectees').children().removeClass('s-toggle');
    $('.s-sidewood').addClass('s-toggle');
});

/**
 * dto for the neckwood button images
 */
$('.s-sidewood img').on('click', function () {

    $('.s-sidewood img').addClass("disabledbutton");
    $('.s-sidewood img').removeClass("disabledbutton");
});

/**
 * function to change the neckwood of the body
 */
$('.s-neckwood img').on('click', function () {

    $('.s-neckwood img').addClass("disabledbutton");
    var whatChanged = 'Hed'
    var meshToChange = ''

    // searches the relevant mesh to modify
    for(let i=0; i < group.children.length; i++) {
        var singleMeshMaterials = group.children[i].material.materials
        for(let j=0; j < singleMeshMaterials.length; j++) {
            if(singleMeshMaterials[j].name == 'Hed') {
                meshToChange = group.children[i]
            }
        }
    }

    if(this.alt =="mahogany") {
        calculationNeckWood(149);
        $('#priceFrontend').html(priceSum);
        textureChanged = true;
        bodyChanged = false;
        configArray['neckwood'] = 'mahogany'
        var whatChanged = 'Hed'
         matloader(meshToChange, initialLoading, textureChanged, bodyChanged, whatChanged)
    }

    else if(this.alt == 'swampash') {
        calculationNeckWood(99);
        $('#priceFrontend').html(priceSum);
        textureChanged = true;
        bodyChanged = false;
        configArray['neckwood'] = 'swampash'
        var whatChanged = 'Hed'
         matloader(meshToChange, initialLoading, textureChanged, bodyChanged, whatChanged)
    }
    




    $('.s-neckwood img').removeClass("disabledbutton");

    // remove a child (neck) of the group and load the new neck with specified material
    //group.remove(group.children)
});

/**
 * css click function for neckwood part of the menue
 */
$('.s-neckwoodBtn').on('click', function () {

    $('#fabric, #fabrics').removeClass('ftog');
    $('.s-btn').removeClass('s-btnActive');
    $(this).addClass('s-btnActive');

    $('.selectees').children().removeClass('s-toggle');
    $('.s-neckwood').addClass('s-toggle');
});


/**
 * dto for the mechanics button images
 */
$('.s-mechanics img').on('click', function () {

    $('.s-mechanics img').addClass("disabledbutton");
    var whatChanged = 'Perlemor'
    var meshToChange = ''

    // searches the relevant mesh to modify
    for(let i=0; i < group.children.length; i++) {
        var singleMeshMaterials = group.children[i].material.materials
        for(let j=0; j < singleMeshMaterials.length; j++) {
            if(singleMeshMaterials[j].name == 'Perlemor') {
                meshToChange = group.children[i]
            }
        }
    }

    if(this.alt =="silver") {
        calculationMechanics(39);
        $('#priceFrontend').html(priceSum);
        textureChanged = true;
        bodyChanged = false;
        configArray['mechanics'] = 'silver'
        var whatChanged = 'Perlemor'
         matloader(meshToChange, initialLoading, textureChanged, bodyChanged, whatChanged)
    }

    else if(this.alt =="black") {
        calculationMechanics(79);
        $('#priceFrontend').html(priceSum);
        textureChanged = true;
        bodyChanged = false;
        configArray['mechanics'] = 'black'
        var whatChanged = 'Perlemor'
         matloader(meshToChange, initialLoading, textureChanged, bodyChanged, whatChanged)
    }

    else if(this.alt =="gold") {
        calculationMechanics(139);
        $('#priceFrontend').html(priceSum);
        textureChanged = true;
        bodyChanged = false;
        configArray['mechanics'] = 'gold'
        var whatChanged = 'Perlemor'
         matloader(meshToChange, initialLoading, textureChanged, bodyChanged, whatChanged)
    }

    $('.s-mechanics img').removeClass("disabledbutton");
});

/**
 * function to change the mechanics of the body
 */
$('.s-mechanics img').on('click', function () {

    $('.s-mechanics img').addClass("disabledbutton");

    

    $('.s-mechanics img').removeClass("disabledbutton");
});

/**
 * css click function for mechanics part of the menue
 */
$('.s-mechanicsBtn').on('click', function () {

    $('#fabric, #fabrics').removeClass('ftog');
    $('.s-btn').removeClass('s-btnActive');
    $(this).addClass('s-btnActive');

    $('.selectees').children().removeClass('s-toggle');
    $('.s-mechanics').addClass('s-toggle');
});

/**
 * dto for the mechanics button images
 */
$('.s-mechanics img').on('click', function () {

    $('.s-mechanics img').addClass("disabledbutton");
    $('.s-mechanics img').removeClass("disabledbutton");
});

$('.menushop').on('click', function() {
    openShop();
})