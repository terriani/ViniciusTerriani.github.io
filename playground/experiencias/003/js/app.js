

$(".icon-menu").click(function (){
    $("nav").toggleClass("nav-on");
    $(".bar1").toggleClass("bar1-on");
    $(".bar2").toggleClass("bar2-on");
});

function close(){
    $("nav").toggleClass("nav-on");
}