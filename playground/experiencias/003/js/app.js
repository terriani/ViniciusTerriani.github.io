

$(".icon-menu").click(function (){
    $("nav").toggleClass("nav-on");
    $(".bar1").toggleClass("bar1-on");
    $(".bar2").toggleClass("bar2-on");
});

$(".home").click(function(){
    $("nav").toggleClass("nav-on");
    $(".bar1").toggleClass("bar1-on");
    $(".bar2").toggleClass("bar2-on");
    $("#enterprise").removeClass("enterprise-on");
    $("#portifolio").removeClass("portifolio-on");
    $("#galery").removeClass("galery-on");
    $("#contact").removeClass("contact-on");
});

$(".enterprise").click(function(){
    $("#enterprise").toggleClass("enterprise-on");
    $("nav").removeClass("nav-on");
    $("#portifolio").removeClass("portifolio-on");
    $("#galery").removeClass("galery-on");
    $("#contact").removeClass("contact-on");
    $(".bar1").toggleClass("bar1-on");
    $(".bar2").toggleClass("bar2-on");
});

$(".portifolio").click(function(){
    $("#portifolio").toggleClass("portifolio-on");
    $("nav").removeClass("nav-on");
    $("#enterprise").removeClass("enterprise-on");
    $("#galery").removeClass("galery-on");
    $("#contact").removeClass("contact-on");
    $(".bar1").toggleClass("bar1-on");
    $(".bar2").toggleClass("bar2-on");
});

$(".galery").click(function(){
    $("#galery").toggleClass("galery-on");
    $("nav").removeClass("nav-on");
    $("#enterprise").removeClass("enterprise-on");
    $("#portifolio").removeClass("portifolio-on");
    $("#contact").removeClass("contact-on");
    $(".bar1").toggleClass("bar1-on");
    $(".bar2").toggleClass("bar2-on");
});


$(".contact").click(function(){
    $("#contact").toggleClass("contact-on");
    $("nav").removeClass("nav-on");
    $("#enterprise").removeClass("enterprise-on");
    $("#portifolio").removeClass("portifolio-on");
    $(".bar1").toggleClass("bar1-on");
    $(".bar2").toggleClass("bar2-on");
});