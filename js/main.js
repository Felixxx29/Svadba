$(document).ready(() => {
    $('.your-class').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    //$( "#accordion" ).accordion();
    $( "#tabs" ).tabs();
    $( "#accordion" ).accordion({
        collapsible: true,
        active: false
    });
})

