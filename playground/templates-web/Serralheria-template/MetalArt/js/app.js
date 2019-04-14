
//variables
var parallax = $(".parallax-1");
var splash_text = $(".splash-text");
var body = $("body");
var splash_screen = $(".splash-screen");
var main = $("main");
var header = $("header");
var footer = $("footer");
var doc = $(document);
var win = $(window);
var btn_up = $(".btn-up");
var btn_msg = $(".btn-msg");
var about_us = $(".about-us");
var service = $(".services");
var clients = $(".clients");
var maps = $(".maps");
var map = $(".map");
var title_map = $(".title-map");
var footer = $("footer");
var card1 = $(".card-1");
var card2 = $(".card-2");
var card3 = $(".card-3");
var title_service = $(".title-service");
var html = $("html");
var flip = $(".flip");

//initialize in page start
$("document").ready(function(){
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $(".scrollspy").scrollSpy();
    $(".galeryStill").css("display", "none");
    $(".galeryStill").css("transform", "rotateY(-180deg)");
    $(".galeryStill").css("overflow-x", "hidden")
    $(".galeryGlass").css("display", "none");
    $(".galeryGlass").css("transform", "rotateY(-180deg)");
    $(".galeryGlass").css("overflow-x", "hidden")
    $(".galeryAluminium").css("display", "none");
    $(".galeryAluminium").css("transform", "rotateY(-180deg)");
    $(".galeryAluminium").css("overflow-x", "hidden")
    $(".slider").slider();
    $(".modal").modal();
    

    splash_screen.css("background-color", "black");

    about_us.css("opacity", 0);
    about_us.css("transform", "scale(0.9)");

    card1.css("opacity", 0)
    card1.css("transform", "scale(0.9)");

    card2.css("opacity", 0)
    card2.css("transform", "scale(0.9)");

    card3.css("opacity", 0)
    card3.css("transform", "scale(0.9)");

    clients.css("opacity", 0)
    clients.css("transform", "scale(0.9)");

    maps.css("transform", "scale(0.9)");

    map.css("opacity", 0);

    title_map.css("opacity", 0);

    footer.css("opacity", 0);
    
    var options = {
        strings: ["Portões automáticos", "Portas", "Janelas", "Box de vidro", "Espelhos", "Grades de ferro", "Portões de Ferro"],
        typeSpeed: 80,
        startDelay: 100,
        backSpeed: 50,
        loop: true

      }
      
      var typed = new Typed(".typed", options);


parallax.css("opacity", 1);
splash_text.css("opacity", 1);
main.css("display", "none");
header.css("display", "none");
footer.css("display", "none");
btn_msg.css("display", "none");
btn_up.css("display", "none");

$(".l1, .l3, .l5, .l7").css("top", 0);
$(".l2, .l4, .l6, .l8").css("bottom", 0);

setTimeout(function(){
    $(".l1, .l3, .l5, .l7").css("top", "0");
    $(".l2, .l4, .l6, .l8").css("bottom", "0");
    splash_text.css("opacity", 0);
},1800);


setTimeout(function(){
    body.css("overflow-y", "auto");
    body.css("overflow-x", "hidden");
    splash_screen.css("display", "none");
    main.css("display", "block");
    header.css("display", "block");
    footer.css("display", "block");
    btn_msg.css("display", "block");
    btn_up.css("display", "block");
}, 3500);

});


doc.scroll(function(){
    if (doc.scrollTop() > 150) {
        btn_up.css("opacity", 1);
        btn_up.css("bottom", "90px");
    }else{
        btn_up.css("bottom", "-100%");
    }

    if (window.scrollY > $("#about-us").offset().top - window.innerHeight / 2) {
        about_us.css("opacity", 1);
        about_us.css("transition", ".5s ease-out");
        about_us.css("transform", "scale(1)");
    }

    if (window.scrollY > title_service.offset().top - window.innerHeight / 2) {
        title_service.css("left", 0);
    }

    if (window.scrollY > card1.offset().top - window.innerHeight / 2) {
        card1.css("opacity", 1);
        card1.css("transition", ".2s ease-out");
        card1.css("transform", "scale(1)");
    }

    if (window.scrollY > card2.offset().top - window.innerHeight / 2) {
        card2.css("opacity", 1);
        card2.css("transition", ".2s ease-out");
        card2.css("transform", "scale(1)");
    }

    if (window.scrollY > card3.offset().top - window.innerHeight / 2) {
        card3.css("opacity", 1);
        card3.css("transition", ".2s ease-out");
        card3.css("transform", "scale(1)");
    }

    if(window.scrollY > clients.offset().top - window.innerHeight / 2){
        clients.css("opacity", 1);
        clients.css("transition", ".5s ease-out");
        clients.css("transform", "scale(1)");
    }

    if (window.scrollY > title_map.offset().top - window.innerHeight / 2) {
        map.css("opacity", 1);
        map.css("left", "0%");
        map.css("transition", "1.5s ease-out")

        title_map.css("opacity", 1);
        title_map.css("right", "0%");
        title_map.css("transition", "1s ease-out")
    }

    if (window.scrollY > title_map.offset().top) {
        footer.css("opacity", 1);
    }
})

function galery_1(){
    flip.css("transform", "rotateY(-180deg)");
    flip.css("background-color", "white");
    flip.css("transition", ".5s linear");
    flip.css("overflow", "hidden");
    $(".galeryGlass").css("display", "none");
    $(".galeryAluminium").css("display", "none");

    setTimeout(function(){
        main.css("display", "none");
        header.css("display", "none");
        footer.css("display", "none");
        $(".galeryStill").css("display", "block");
        $(".galeryStill").css("transform", "rotateY(0deg)");
        $(".galeryStill").css("overflow-x", "hidden");
    }, 250);
}

function galery_2(){
    flip.css("transform", "rotateY(-180deg)");
    flip.css("background-color", "white");
    flip.css("transition", ".5s linear");
    flip.css("overflow", "hidden");
    $(".galeryStill").css("display", "none");
    $(".galeryAluminium").css("display", "none");

    setTimeout(function(){
        main.css("display", "none");
        header.css("display", "none");
        footer.css("display", "none");
        $(".galeryGlass").css("display", "block");
        $(".galeryGlass").css("transform", "rotateY(0deg)");
        $(".galeryGlass").css("overflow-x", "hidden");
    }, 250);
}


function galery_3(){
    flip.css("transform", "rotateY(-180deg)");
    flip.css("background-color", "white");
    flip.css("transition", ".5s linear");
    flip.css("overflow", "hidden");
    $(".galeryGlass").css("display", "none");
    $(".galeryStill").css("display", "none");

    setTimeout(function(){
        main.css("display", "none");
        header.css("display", "none");
        footer.css("display", "none");
        $(".galeryAluminium").css("display", "block");
        $(".galeryAluminium").css("transform", "rotateY(0deg)");
        $(".galeryAluminium").css("overflow-x", "hidden");
    }, 250);
}


function closeGalery(){
    flip.css("transform", "rotateY(0deg)");
    flip.css("background-color", "white");
    flip.css("transition", ".5s linear");

    
        $(".galeryStill").css("transform", "rotateY(180deg)");
        $(".galeryStill").css("transition", ".5s linear");
    
        $(".galeryGlass").css("transform", "rotateY(180deg)");
        $(".galeryGlass").css("transition", ".5s linear");
    
        $(".galeryAluminium").css("transform", "rotateY(180deg)");
        $(".galeryAluminium").css("transition", ".5s linear");
    

    //$(".galeryGlass").css("transform", "rotateY(180deg)");
    //$(".galeryAluminium").css("transform", "rotateY(180deg)");

    setTimeout(function(){
        main.css("display", "block");
        header.css("display", "block");
        footer.css("display", "block");
        //body.css("background-color", "white");

        
        
            $(".galeryStill").css("display", "none");
            $(".galeryStill").css("overflow-x", "hidden");
            $(".navbar-fixed").css("background-attachment", "fixed");
            $(".navbar-fixed").css("z-index", "1000");
            $(".galeryStill").css("z-index", "1");
        
            $(".galeryGlass").css("display", "none");
            $(".galeryGlass").css("overflow-x", "hidden");
            $(".navbar-fixed").css("background-attachment", "fixed");
            $(".navbar-fixed").css("z-index", "1000");
            $(".galeryGlass").css("z-index", "1");   
        
            $(".galeryAluminium").css("display", "none");
            $(".galeryAluminium").css("overflow-x", "hidden");
            $(".navbar-fixed").css("background-attachment", "fixed");
            $(".navbar-fixed").css("z-index", "1000");
            $(".galeryAluminium").css("z-index", "1");
        
        
    }, 250);
}
