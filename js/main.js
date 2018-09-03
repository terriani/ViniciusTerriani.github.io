

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


//executa ao carregar a pagina
doc.ready(function(){
    btn_collapse.sideNav();
    scrollspy.scrollSpy();
    //intro_img.css("opacity", 1);
    //intro_img.css("left", "0");
    //intro_img.css("transition", "2s");
    //text_intro.css("opacity", 1);
    //text_intro.css("right", "0");
    //text_intro.css("transition", "2s");
    body.css("overflow-x", "hidden");
    body.css("overflow-y", "hidden");
    //title.css("left", 0);
    //title.css("transition", "3s");
    //title.css("color", "#444");
  });
 

  //inicializa os elementos com opacidade 0 
  skils.css("transform", "rotate(180deg) scale(0)");
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

/*
//celular em modo portrait
if(height > width){
  if(win.width() < 780){



    //regra para mudança de cor em telas menores que a de um celular
    win.scroll(function(){
      

      //ao descer a pagina é ativada a animação do botão de voltar ao topo
    if(doc.scrollTop() > 20){
      btn_up.css("bottom", "30px");
      btn_up.css("opacity", 1);
      btn_up.css("transition", "1s");
      btn_act.css("bottom", "100px");
      btn_act.css("transition", "1s");
      btn_act.css("opacity", 1);
      body.css("overflow-y", "auto");
    }
    //ao subir a pagina ate o topo executa a animação de desaparecimento do botão de volta ao topo
    else{
      btn_up.css("opacity", 0);
      btn_up.css("bottom", "-200px");
      btn_up.css("transition", "1s");
      btn_act.css("bottom", "30px");
      btn_act.css("transition", "1s");
      btn_act.css("opacity", 0.6);
    }

    //caso o scroll seja maior que 750px o background da pagina muda para #333333,
    //apos isto é executada uma animação de exibição de um texto de conhecimentos,
    //logo apos é executado uma animação para mostrar barras de progresso com os conhecimentos 
    if(doc.scrollTop() > height){
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
    if(doc.scrollTop() > height*2){
      main.css("background-color", "#333");
      main.css("transition", ".2s");
      main.css("color", "#f3f3f3");
      //$(".progress").css("background-color", "#333");
      progress.css("transition", ".5s");
      skils.css("opacity", 1);
      skils.css("transition", ".5s");
      $(".t1, .t2, .t3, .t4, .t5").css("opacity", 1);
      $(".t1, .t2, .t3, .t4, .t5").css("color", "#f1f1f1");
    }
    //caso o scroll seja menor que 450px o background da pagina volta a cor #f3f3f3
    else if(doc.scrollTop() < height*2){
      main.css("background-color", "#f3f3f3");
      main.css("transition", ".2s");
      main.css("color", "#333");
      //$(".progress").css("background-color", "#f3f3f3");
      progress.css("transition", ".5s");
    }

    //caso o scroll seja maior 1100px começa a exibição da animação das barras de progresso
    if(doc.scrollTop() > height*3){
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

    //apos 1950px de scroll o background da pagina volta a cor #f3f3f3
    if(doc.scrollTop() > height*4){
      main.css("background-color", "#f3f3f3");
      main.css("transition", ".2s");
      main.css("color", "#333");
      //$(".progress").css("background-color", "#f3f3f3");
     
    }

    //caso o scroll seja maior 1970px a animação da area de projetos é exibida
    if(doc.scrollTop() > height*4.3){
      projects.css("opacity", 1);
      projects.css("left", 0);
      projects.css("transition", ".5s");
    }

    //caso o scroll seja maior que 2300 a animação com os links dos projetos é exibida
    if(doc.scrollTop() > height*4.9){
      project_area.css("opacity", 1);
      project_area.css("transition", "1s");
    }

    //ao scroll ser maior que 4000 o background muda para #222
    if(doc.scrollTop() > height*8){
      main.css("background-color", "#222");
      main.css("color", "#f2f2f2");
      contact_title.css("color", "#e91e63");
    }
    //caso o scroll seja menor que 4000 a cor fa font volta para #333
    else{
      contact_title.css("color", "#666");
    }

    //se o scroll for maior que 4020 a animaçao da area de contato é executada 
    if (doc.scrollTop() > height*8.1) {
      contact.css("opacity", 1);
      contact.css("transition", "1s");
      contact_title.css("transform", "scale(1)");
      contact_title.css("transition", "1s");
    }

    //caso o scroll seja maior que 4050 a animação que monta o formulario se inicia 
    if ($(document).scrollTop() > height*8.2) {
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
  }
}


  //aqui vai a regra para celular em modo landscap

  if(width > height){

    //formatar regras para landscape
    if(win.width() < 780){
    //regra para mudança de cor em telas menores que a de um celular
    win.scroll(function(){
    if(doc.scrollTop() > 20){
      btn_up.css("bottom", "30px");
      btn_up.css("opacity", 1);
      btn_up.css("transition", "1s");
      btn_act.css("bottom", "100px");
      btn_act.css("transition", "1s");
      btn_act.css("opacity", 1);
      body.css("overflow", "auto");
    }else{
      btn_up.css("opacity", 0);
      btn_up.css("bottom", "-200px");
      btn_up.css("transition", "1s");
      btn_act.css("bottom", "30px");
      btn_act.css("transition", "1s");
      btn_act.css("opacity", 0.6);
    }
    if(doc.scrollTop() > height){
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
    if (doc.scrollTop() > height*2) {
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
    if(doc.scrollTop() > height*3){
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
    if(doc.scrollTop() > height*5.7){
      main.css("background-color", "#f3f3f3");
      main.css("transition", ".2s");
      main.css("color", "#333");
      //$(".progress").css("background-color", "#f3f3f3");
     
    }
    if(doc.scrollTop() > height*6.2){
      progress.css("transition", "2s");
      projects.css("opacity", 1);
      projects.css("left", 0);
      projects.css("transition", ".5s");
    }
    if(doc.scrollTop() > height*7){
      project_area.css("opacity", 1);
      project_area.css("transition", "1s");
    }
    if(doc.scrollTop() > height*11){
      main.css("background-color", "#222");
      main.css("color", "#f2f2f2");
      contact_title.css("color", "#e91e63");
    }
    else{
      contact_title.css("color", "#666");
    }
    if (doc.scrollTop() > height*11.2) {
      contact.css("opacity", 1);
      contact.css("transition", ".3s");
      contact_title.css("transform", "scale(1)");
      contact_title.css("transition", ".8s");
    }
    if (doc.scrollTop() > height*11.6) {
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
  }

  }

  


  if(win.width() > 720){
     //regra para mudança de cor em telas maiores que a de um celular
     win.scroll(function(){
    if(doc.scrollTop() > height){
      btn_up.css("bottom", "30px");
      btn_up.css("opacity", 1);
      btn_up.css("transition", "1s");
      btn_act.css("bottom", "100px");
      btn_act.css("transition", "1s");
      btn_act.css("opacity", 1);
      $(".t1, .t2, .t3, .t4, .t5").css("opacity", 1);
      $(".t1, .t2, .t3, .t4, .t5").css("color", "#f1f1f1");
    }else{
      btn_up.css("opacity", 0);
      btn_up.css("bottom", "-200px");
      btn_up.css("transition", "1s");
      btn_act.css("bottom", "30px");
      btn_act.css("transition", "1s");
      btn_act.css("opacity", 0.6);
    }   
    if (doc.scrollTop() > height*1) {
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
    if(doc.scrollTop() >= height*1.8){
      main.css("background-color", "#333");
      main.css("transition", ".2s");
      main.css("color", "#f3f3f3");
      //$(".progress").css("background-color", "#333");
      //$(".progress").css("transition", ".2s");
      skils.css("opacity", 1);
      skils.css("transition", ".5s");
      
      intro_img.css("opacity", 1);
      intro_img.css("left", "0");
      intro_img.css("transition", "2s");
      text_intro.css("opacity", 1);
      text_intro.css("right", "0");
      text_intro.css("transition", "2s");
      title.css("left", 0);
      title.css("transition", "3s");
      title.css("color", "#444");
    }
    else{
      main.css("background-color", "#f3f3f3");
      main.css("transition", ".2s");
      main.css("color", "#222");
      //$(".progress").css("background-color", "#f3f3f3");
      //$(".progress").css("transition", ".5s");
    }
    if(doc.scrollTop() > height*2.5){
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
    if(doc.scrollTop() > height*3.8){
      main.css("background-color", "#f3f3f3");
      main.css("transition", ".2s");
      main.css("color", "#333");
      //$(".progress").css("background-color", "#f3f3f3");
      //$(".progress").css("transition", ".5s");
      
    }
    if(doc.scrollTop() > height*3.8){
      projects.css("opacity", 1);
      projects.css("left", 0);
      projects.css("transition", "1s");
    }
    if(doc.scrollTop() > height*4.3){
      project_area.css("opacity", 1);
      project_area.css("transition", "1s");
    }
    if(doc.scrollTop() > height*6){
      main.css("background-color", "#222");
      main.css("color", "#f2f2f2");
      contact_title.css("color", "#e91e63");
    }
    else{
      contact_title.css("color", "#666");
    }
    if (doc.scrollTop() > height*6.1) {
      contact.css("opacity", 1);
      contact.css("transition", "1s");
    }
    if(doc.scrollTop() > height*6.2){
      contact_title.css("transform", "scale(1)");
      contact_title.css("transition", "1s");
    }
    if (doc.scrollTop() > height*6.3) {
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
  }
*/

doc.scroll(function(){


  if(doc.scrollTop() > height){
    btn_up.css("bottom", "30px");
    btn_up.css("opacity", 1);
    btn_up.css("transition", "1s");
    btn_act.css("bottom", "100px");
    btn_act.css("transition", "1s");
    btn_act.css("opacity", 1);
    $(".t1, .t2, .t3, .t4, .t5").css("opacity", 1);
    $(".t1, .t2, .t3, .t4, .t5").css("color", "#f1f1f1");
   // body.css("overflow-y", "auto");
  }else{
    btn_up.css("opacity", 0);
    btn_up.css("bottom", "-200px");
    btn_up.css("transition", "1s");
    btn_act.css("bottom", "30px");
    btn_act.css("transition", "1s");
    btn_act.css("opacity", 0.6);
  }   

  if (window.scrollY > $("#about-me").offset().top - 20) {
    

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
    //$(".progress").css("background-color", "#333");
    //$(".progress").css("transition", ".2s");
    skils.css("transform", "rotate(0) scale(1)");
    //skils.css("transform", "scale(1)");
    skils.css("transition", "1s");


  }else{


    main.css("background-color", "#f3f3f3");
      main.css("transition", ".2s");
      main.css("color", "#333");
      //$(".progress").css("background-color", "#f3f3f3");
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
    //$(".progress").css("background-color", "#f3f3f3");
    //$(".progress").css("transition", ".5s");

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
