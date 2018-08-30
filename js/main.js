

//variaveis
var intro_img = $(".intro-img");
var text_intro = $(".text-intro");
var btn_up = $(".btn-up");
var main = $(".main");
var skils = $(".skils");
var skil = $(".skil");
var php = $(".progress-php");
var mysql = $(".progress-mysql");
var laravel = $(".progress-laravel");
var composer = $(".progress-composer");
var js = $(".progress-javascript");
var jquery = $(".progress-jquery");
var html = $(".progress-html");
var css = $(".progress-css");
var bootstrap = $(".progress-bootstrap");
var materialize = $(".progress-materialize");
var git = $(".progress-git");
var progress = $(".progress");
var projects = $(".projects");
var project_area = $(".project-area");


//executa ao carregar a pagina
$("document").ready(function(){
    $(".button-collapse").sideNav();
    $(".scrollspy").scrollSpy();
    intro_img.css("opacity", 1);
    intro_img.css("left", "0");
    intro_img.css("transition", "2s");
    text_intro.css("opacity", 1);
    text_intro.css("right", "0");
    text_intro.css("transition", "2s");
  });
 

  //inicializa os elementos com opacidade 0 
  skils.css("opacity", 0);
  skil.css("opacity", 0);
  progress.css("opacity", 0);
  projects.css("opacity", 0);
  project_area.css("opacity", 0);
  intro_img.css("opacity", 0);
  text_intro.css("opacity", 0);
  btn_up.css("opacity", 0);

  //pega a altura e a largura da tela
  var width = $(window).width();
  var height = $(window).height();



if(height > width){
  if($(window).width() < 780){
    //regra para mudança de cor em telas menores que a de um celular
    $(window).scroll(function(){
    if($(document).scrollTop() > 20){
      btn_up.css("bottom", "30px");
      btn_up.css("opacity", 1);
      btn_up.css("transition", "1s");
    }else{
      btn_up.css("opacity", 0);
      btn_up.css("bottom", "-200px");
      btn_up.css("transition", "1s");
    }
    if($(document).scrollTop() > 780){
      main.css("background-color", "#333");
      main.css("transition", ".2s");
      main.css("color", "#f3f3f3");
      //$(".progress").css("background-color", "#333");
      progress.css("transition", ".5s");
      skils.css("opacity", 1);
      skils.css("transition", ".5s");
    }
    else if($(document).scrollTop() < 450){
      main.css("background-color", "#f3f3f3");
      main.css("transition", ".2s");
      main.css("color", "#333");
      //$(".progress").css("background-color", "#f3f3f3");
      progress.css("transition", ".5s");
    }
    if($(document).scrollTop() > 1100){
      skil.css("opacity", 1);
      progress.css("opacity", 1);
      skil.css("transition", ".2s");
      php.css("width", "70%");
      mysql.css("width", "30%");
      laravel.css("width", "10%");
      composer.css("width", "20%");
      js.css("width", "10%");
      jquery.css("width", "10%");
      html.css("width", "60%");
      css.css("width", "40%");
      bootstrap.css("width", "40%");
      materialize.css("width", "30%");
      git.css("width", "40%");
      progress.css("transition", "5s"); 
    }
    if($(document).scrollTop() > 1950){
      main.css("background-color", "#f3f3f3");
      main.css("transition", ".2s");
      main.css("color", "#333");
      //$(".progress").css("background-color", "#f3f3f3");
     
    }
    if($(document).scrollTop() > 2000){
      progress.css("transition", "2s");
      projects.css("opacity", 1);
      projects.css("left", 0);
      projects.css("transition", "2s");
    }
    if($(document).scrollTop() > 2300){
      project_area.css("opacity", 1);
      project_area.css("transition", "1s");
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
      btn_up.css("bottom", "30px");
      btn_up.css("opacity", 1);
      btn_up.css("transition", "1s");
    }else{
      btn_up.css("opacity", 0);
      btn_up.css("bottom", "-200px");
      btn_up.css("transition", "1s");
    }
    if($(document).scrollTop() > 500){
      main.css("background-color", "#333");
      main.css("transition", ".2s");
      main.css("color", "#f3f3f3");
      //$(".progress").css("background-color", "#333");
      progress.css("transition", ".5s");
      skils.css("opacity", 1);
      skils.css("transition", ".5s");
    }
    else{
      
      main.css("background-color", "#f3f3f3");
      main.css("transition", ".2s");
      main.css("color", "#333");
      //$(".progress").css("background-color", "#f3f3f3");
      progress.css("transition", ".5s");
    }
    if($(document).scrollTop() > 850){
      skil.css("opacity", 1);
      progress.css("opacity", 1);
      skil.css("transition", ".2s");
      php.css("width", "70%");
      mysql.css("width", "30%");
      laravel.css("width", "10%");
      composer.css("width", "20%");
      js.css("width", "10%");
      jquery.css("width", "10%");
      html.css("width", "60%");
      css.css("width", "40%");
      bootstrap.css("width", "40%");
      materialize.css("width", "30%");
      git.css("width", "40%");
      progress.css("transition", "5s"); 
    }
    if($(document).scrollTop() > 1600){
      main.css("background-color", "#f3f3f3");
      main.css("transition", ".2s");
      main.css("color", "#333");
      //$(".progress").css("background-color", "#f3f3f3");
     
    }
    if($(document).scrollTop() > 1660){
      progress.css("transition", "2s");
      projects.css("opacity", 1);
      projects.css("left", 0);
      projects.css("transition", "2s");
    }
    if($(document).scrollTop() > 2050){
      project_area.css("opacity", 1);
      project_area.css("transition", "1s");
    }
  });
  }

  }

  


  if($(window).width() > 720){
     //regra para mudança de cor em telas maiores que a de um celular
     $(window).scroll(function(){
    if($(document).scrollTop() > 20){
      btn_up.css("bottom", "30px");
      btn_up.css("opacity", 1);
      btn_up.css("transition", "1s");
    }else{
      btn_up.css("opacity", 0);
      btn_up.css("bottom", "-200px");
      btn_up.css("transition", "1s");
    }   
    if($(document).scrollTop() > 400){
      main.css("background-color", "#333");
      main.css("transition", ".2s");
      main.css("color", "#f3f3f3");
      //$(".progress").css("background-color", "#333");
      //$(".progress").css("transition", ".2s");
      skils.css("opacity", 1);
      skils.css("transition", ".5s");
    }
    else{
      main.css("background-color", "#f3f3f3");
      main.css("transition", ".2s");
      main.css("color", "#222");
      //$(".progress").css("background-color", "#f3f3f3");
      //$(".progress").css("transition", ".5s");
    }
    if($(document).scrollTop() > 660){
      skil.css("opacity", 1);
      progress.css("opacity", 1);
      skil.css("transition", ".2s");
      php.css("width", "70%");
      mysql.css("width", "30%");
      laravel.css("width", "10%");
      composer.css("width", "20%");
      js.css("width", "10%");
      jquery.css("width", "10%");
      html.css("width", "60%");
      css.css("width", "40%");
      bootstrap.css("width", "40%");
      materialize.css("width", "30%");
      git.css("width", "40%");
      progress.css("transition", "5s"); 
    }
    if($(document).scrollTop() > 1330){
      main.css("background-color", "#f3f3f3");
      main.css("transition", ".2s");
      main.css("color", "#333");
      //$(".progress").css("background-color", "#f3f3f3");
      //$(".progress").css("transition", ".5s");
      
    }
    if($(document).scrollTop() > 1480){
      projects.css("opacity", 1);
      projects.css("left", 0);
      projects.css("transition", "2s");
    }
    if($(document).scrollTop() > 1900){
      project_area.css("opacity", 1);
      project_area.css("transition", "1s");
    }
  });
  }

