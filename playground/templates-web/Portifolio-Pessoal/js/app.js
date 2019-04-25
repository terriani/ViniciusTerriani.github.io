

$(".icon-menu").click(function (){
    $("nav").toggleClass("nav-on");
    $(".bar1").toggleClass("bar1-on");
    $(".bar2").toggleClass("bar2-on");
});

$(".home").click(function(){
    $("nav").toggleClass("nav-on");
    $(".bar1").toggleClass("bar1-on");
    $(".bar2").toggleClass("bar2-on");
    $("#about-me").removeClass("about-me-on");
    $("#portifolio").removeClass("portifolio-on");
    $("#skils").removeClass("skils-on");
    $("#contact").removeClass("contact-on");
});

$(".about-me").click(function(){
    $("#about-me").toggleClass("about-me-on");
    $("nav").removeClass("nav-on");
    $("#portifolio").removeClass("portifolio-on");
    $("#skils").removeClass("skils-on");
    $("#contact").removeClass("contact-on");
    $(".bar1").toggleClass("bar1-on");
    $(".bar2").toggleClass("bar2-on");
});

$(".portifolio").click(function(){
    $("#portifolio").toggleClass("portifolio-on");
    $("nav").removeClass("nav-on");
    $("#about-me").removeClass("about-me-on");
    $("#skils").removeClass("skils-on");
    $("#contact").removeClass("contact-on");
    $(".bar1").toggleClass("bar1-on");
    $(".bar2").toggleClass("bar2-on");
});

$(".skils").click(function(){
    $("#skils").toggleClass("skils-on");
    $("nav").removeClass("nav-on");
    $("#about-me").removeClass("about-me-on");
    $("#portifolio").removeClass("portifolio-on");
    $("#contact").removeClass("contact-on");
    $(".bar1").toggleClass("bar1-on");
    $(".bar2").toggleClass("bar2-on");
});


$(".contact").click(function(){
    $("#contact").toggleClass("contact-on");
    $("nav").removeClass("nav-on");
    $("#about-me").removeClass("about-me-on");
    $("#portifolio").removeClass("portifolio-on");
    $(".bar1").toggleClass("bar1-on");
    $(".bar2").toggleClass("bar2-on");
});