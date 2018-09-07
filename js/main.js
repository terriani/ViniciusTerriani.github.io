

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
var contact = $(".contact");
var body = $("body");
var first_name = $(".name");
var last_name = $(".last-name");
var email = $(".email");
var msg = $(".msg");
var contact_title = $(".title-contact");
var btn_collapse = $(".button-collapse");
var scrollspy = $(".scrollspy");
var doc = $(document);
var title = $(".title");
var win = $(window);
var btn_act = $(".btn-action");
var nav = $("nav");
var terminal = $(".terminal");
var text_terminal = $(".text-terminal");
var drag = $(".draggable");


//executa ao carregar a pagina
doc.ready(function(){
    btn_collapse.sideNav();
    scrollspy.scrollSpy();
    drag.draggable();
    body.css("overflow-x", "hidden");
    //body.css("overflow-y", "hidden");


    //animação da tela de boas vindas usando type.js 
    var typed = new Typed('.msg-wellcome', {
      strings: [
                  "sudo apt-get remove windows^300",
                  "Opsss,^300 msg errada rs^600",
                  "Olá, me chamo Vinicius Terriani",
                  "sejam ^300 muito bem vindos.",
                  "É um prazer ^500 tê-los aqui.",
                  "^1000 Espero que gostem^200 do meu ^100 site^1000!!! ^1000",
                  "<i><b> Que tal batermos um papo ?^2000 </b></i> <br>Me mande um <b><i> E-mail </b> em: <b style='color:green'>viniterriani.vt@gmail.com </i></b> <br>Aguardo seu contato. ^800 <br><br> - Role a pagina para baixo ^200e me conheça um pouco melhor."
                ],
      typeSpeed: 70,
      backSpeed: 30,
      loop: false,
      loopCount: 3,
      cursorChar:"_",
    });
  });
 

  //inicializa os elementos com opacidade 0 
  skils.css("transform", "rotate(70deg) scale(0)");
  //skils.css("transform", "scale(0)");
  skil.css("opacity", 0);
  progress.css("opacity", 0);
  projects.css("opacity", 0);
  project_area.css("transform", "scale(0)");
  intro_img.css("opacity", 0);
  text_intro.css("opacity", 0);
  btn_up.css("opacity", 0);
  contact.css("opacity", 0);
  btn_act.css("opacity", 0.6);

  //pega a altura e a largura da tela
  var width = win.width();
  var height = win.height();


doc.scroll(function(){


  if(doc.scrollTop() > height){
    btn_up.css("bottom", "30px");
    btn_up.css("opacity", 1);
    btn_up.css("transition", "1s");
    btn_act.css("bottom", "100px");
    btn_act.css("transition", "1s");
    btn_act.css("opacity", 1);
    //$(".t1, .t2, .t3, .t4, .t5").css("opacity", 1);
    //$(".t1, .t2, .t3, .t4, .t5").css("color", "#f1f1f1");
   // body.css("overflow-y", "auto");
  }else{
    btn_up.css("opacity", 0);
    btn_up.css("bottom", "-200px");
    btn_up.css("transition", "1s");
    btn_act.css("bottom", "30px");
    btn_act.css("transition", "1s");
    btn_act.css("opacity", 0.6);
  }   


  if (window.scrollY > $("#about-me").offset().top - window.innerHeight / 2) {

    main.css("bacground-color", "#f2f2f2");
    intro_img.css("opacity", 1);
    intro_img.css("left", "0");
    intro_img.css("transition", "2s");
    text_intro.css("opacity", 1);
    text_intro.css("right", "0");
    text_intro.css("transition", "2s");
    title.css("left", 0);
    title.css("transition", "3s");
    title.css("color", "#444");
    body.css("overflow-y", "auto");


  }
  if (window.scrollY > $("#skils").offset().top - window.innerHeight / 2) {
    

    main.css("background-color", "#333");
    main.css("transition", ".2s");
    main.css("color", "#f3f3f3");
    skils.css("transform", "rotate(0) scale(1)");
    //skils.css("transform", "scale(1)");
    skils.css("transition", "1s");


  }else{


      main.css("background-color", "#f3f3f3");
      main.css("transition", ".2s");
      main.css("color", "#333");
      progress.css("transition", ".5s");


  }
  if (window.scrollY > $("#skils").offset().top) {
    

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
      progress.css("transition", "2s"); 


  }
  if (window.scrollY > $("#projects").offset().top - window.innerHeight / 2) {
    

    main.css("background-color", "#f3f3f3");
    main.css("transition", ".2s");
    main.css("color", "#333");
    

    projects.css("opacity", 1);
    projects.css("left", 0);
    projects.css("transition", "1.3s");

  }

  if (window.scrollY > $("#projects").offset().top) {
    

      project_area.css("transform", "scale(1)");
      project_area.css("transition", "1s");
    
  }

  if (window.scrollY > $("#contact").offset().top - window.innerHeight / 2) {
    

    main.css("background-color", "#222");
    main.css("color", "#f2f2f2");
    contact_title.css("color", "#e91e63");

    contact.css("opacity", 1);
    contact.css("transition", "1s");

    contact_title.css("transform", "scale(1)");
    contact_title.css("transition", "1s");

     first_name.css("left", 0); 
     first_name.css("transition", "2s");
     last_name.css("right", 0);
     last_name.css("transition", "3.5s");
     email.css("left", 0);
     email.css("transition", "3s");
     msg.css("bottom", 0);
     msg.css("transition", "2.5s");
  }

});


var isOpen = true;

function closeTerminal(){
  terminal.css("display", "none");
  isOpen = false;
}



function openTerminal(){
  
  if (isOpen == true) {

      terminal.css("display", "none");
      isOpen = false;

  }else {

      terminal.css("display", "block");
      isOpen = true;

  }

}

function minTerminal(){
  terminal.css("height", "35px");
  terminal.css("width", "100px");
  text_terminal.css("display", "none");
  terminal.css("transition", ".2s");
}

function maxTerminal(){
  terminal.css("height", "");
  terminal.css("width", "");
  text_terminal.css("display", "block");
  terminal.css("transition", ".2s");
}