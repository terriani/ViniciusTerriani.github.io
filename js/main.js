
//executa ao carregar a pagina
$("document").ready(function(){
    $(".button-collapse").sideNav();
    $(".scrollspy").scrollSpy();
    $(".intro-img").css("opacity", 1);
    $(".intro-img").css("left", "0");
    $(".intro-img").css("transition", "2s");
    $(".text-intro").css("opacity", 1);
    $(".text-intro").css("right", "0");
    $(".text-intro").css("transition", "2s");
  });

  //$(".btn-up").fadeOut();
  $(".skils, .skil, .progress, .projects, .project-area, .intro-img, .text-intro, .btn-up").css("opacity", 0);
 

  var width = $(window).width();
  var height = $(window).height();


if(height > width){
  if($(window).width() < 780){
    //regra para mudança de cor em telas menores que a de um celular
    $(window).scroll(function(){
    if($(document).scrollTop() > 20){
      $('.btn-up').css("bottom", "30px");
      $(".btn-up").css("opacity", 1);
      $(".btn-up").css("transition", "1s");
    }else{
      $('.btn-up').css("opacity", 0);
      $(".btn-up").css("bottom", "-200px");
      $(".btn-up").css("transition", "1s");
    }
    if($(document).scrollTop() > 780){
      $(".main").css("background-color", "#333");
      $(".main").css("transition", ".2s");
      $(".main").css("color", "#f3f3f3");
      //$(".progress").css("background-color", "#333");
      $(".progress").css("transition", ".5s");
      $(".skils").css("opacity", 1);
      $(".skils").css("transition", ".5s");
    }
    else if($(document).scrollTop() < 450){
      $(".main").css("background-color", "#f3f3f3");
      $(".main").css("transition", ".2s");
      $(".main").css("color", "#333");
      //$(".progress").css("background-color", "#f3f3f3");
      $(".progress").css("transition", ".5s");
    }
    if($(document).scrollTop() > 1100){
      $(".skil, .progress").css("opacity", 1);
      $(".skil").css("transition", ".2s");
      $(".progress-php").css("width", "70%");
      $(".progress-mysql").css("width", "30%");
      $(".progress-laravel").css("width", "10%");
      $(".progress-composer").css("width", "20%");
      $(".progress-javascript").css("width", "10%");
      $(".progress-jquery").css("width", "10%");
      $(".progress-html").css("width", "60%");
      $(".progress-css").css("width", "40%");
      $(".progress-bootstrap").css("width", "40%");
      $(".progress-materialize").css("width", "30%");
      $(".progress-git").css("width", "40%");
      $(".progress").css("transition", "5s"); 
    }
    if($(document).scrollTop() > 1950){
      $(".main").css("background-color", "#f3f3f3");
      $(".main").css("transition", ".2s");
      $(".main").css("color", "#333");
      //$(".progress").css("background-color", "#f3f3f3");
     
    }
    if($(document).scrollTop() > 2000){
      $(".progress").css("transition", "2s");
      $(".projects").css("opacity", 1);
      $(".projects").css("left", 0);
      $(".projects").css("transition", "2s");
    }
    if($(document).scrollTop() > 2300){
      $(".project-area").css("opacity", 1);
      $(".project-area").css("transition", "1s");
    }
  });
  }
}


  //aqui vai a regra para celular em modo landscap

  if(width > height){

    //formatar regras para landscape
    if($(window).width() < 780){
    //regra para mudança de cor em telas menores que a de um celular
    $(window).scroll(function(){
    if($(document).scrollTop() > 20){
      $('.btn-up').css("bottom", "30px");
      $(".btn-up").css("opacity", 1);
      $(".btn-up").css("transition", "1s");
    }else{
      $('.btn-up').css("opacity", 0);
      $(".btn-up").css("bottom", "-200px");
      $(".btn-up").css("transition", "1s");
    }
    if($(document).scrollTop() > 500){
      $(".main").css("background-color", "#333");
      $(".main").css("transition", ".2s");
      $(".main").css("color", "#f3f3f3");
      //$(".progress").css("background-color", "#333");
      $(".progress").css("transition", ".5s");
      $(".skils").css("opacity", 1);
      $(".skils").css("transition", ".5s");
    }
    else{
      
      $(".main").css("background-color", "#f3f3f3");
      $(".main").css("transition", ".2s");
      $(".main").css("color", "#333");
      //$(".progress").css("background-color", "#f3f3f3");
      $(".progress").css("transition", ".5s");
    }
    if($(document).scrollTop() > 850){
        $(".skil, .progress").css("opacity", 1);
        $(".skil").css("transition", ".2s");
        $(".progress-php").css("width", "70%");
        $(".progress-mysql").css("width", "30%");
        $(".progress-laravel").css("width", "10%");
        $(".progress-composer").css("width", "20%");
        $(".progress-javascript").css("width", "10%");
        $(".progress-jquery").css("width", "10%");
        $(".progress-html").css("width", "60%");
        $(".progress-css").css("width", "40%");
        $(".progress-bootstrap").css("width", "40%");
        $(".progress-materialize").css("width", "30%");
        $(".progress-git").css("width", "40%");
        $(".progress").css("transition", "5s");
    }
    if($(document).scrollTop() > 1600){
      $(".main").css("background-color", "#f3f3f3");
      $(".main").css("transition", ".2s");
      $(".main").css("color", "#333");
      //$(".progress").css("background-color", "#f3f3f3");
     
    }
    if($(document).scrollTop() > 1660){
      $(".progress").css("transition", "2s");
      $(".projects").css("opacity", 1);
      $(".projects").css("left", 0);
      $(".projects").css("transition", "2s");
    }
    if($(document).scrollTop() > 2050){
      $(".project-area").css("opacity", 1);
      $(".project-area").css("transition", "1s");
    }
  });
  }

  }

  


  if($(window).width() > 720){
     //regra para mudança de cor em telas maiores que a de um celular
     $(window).scroll(function(){
    if($(document).scrollTop() > 20){
      $('.btn-up').css("bottom", "30px");
      $(".btn-up").css("opacity", 1);
      $(".btn-up").css("transition", "1s");
    }else{
      $('.btn-up').css("opacity", 0);
      $(".btn-up").css("bottom", "-200px");
      $(".btn-up").css("transition", "1s");
    }   
    if($(document).scrollTop() > 400){
      $(".main").css("background-color", "#333");
      $(".main").css("transition", ".2s");
      $(".main").css("color", "#f3f3f3");
      //$(".progress").css("background-color", "#333");
      //$(".progress").css("transition", ".2s");
      $(".skils").css("opacity", 1);
      $(".skils").css("transition", ".5s");
    }
    else{
      $(".main").css("background-color", "#f3f3f3");
      $(".main").css("transition", ".2s");
      $(".main").css("color", "#222");
      //$(".progress").css("background-color", "#f3f3f3");
      //$(".progress").css("transition", ".5s");
    }
    if($(document).scrollTop() > 660){
        $(".skil, .progress").css("opacity", 1);
        $(".skil").css("transition", ".2s");
        $(".progress-php").css("width", "70%");
        $(".progress-mysql").css("width", "30%");
        $(".progress-laravel").css("width", "10%");
        $(".progress-composer").css("width", "20%");
        $(".progress-javascript").css("width", "10%");
        $(".progress-jquery").css("width", "10%");
        $(".progress-html").css("width", "60%");
        $(".progress-css").css("width", "40%");
        $(".progress-bootstrap").css("width", "40%");
        $(".progress-materialize").css("width", "30%");
        $(".progress-git").css("width", "40%");
        $(".progress").css("transition", "5s");
    }
    if($(document).scrollTop() > 1330){
      $(".main").css("background-color", "#f3f3f3");
      $(".main").css("transition", ".2s");
      $(".main").css("color", "#333");
      //$(".progress").css("background-color", "#f3f3f3");
      //$(".progress").css("transition", ".5s");
      
    }
    if($(document).scrollTop() > 1480){
      $(".projects").css("opacity", 1);
      $(".projects").css("left", 0);
      $(".projects").css("transition", "2s");
    }
    if($(document).scrollTop() > 1900){
      $(".project-area").css("opacity", 1);
      $(".project-area").css("transition", "1s");
    }
  });
  }

