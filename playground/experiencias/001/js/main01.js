
var wellcome = $(".wellcome");
var terminal = $(".terminal");
var c1 = $(".circle-1");
var c2 = $(".circle-2");
var c3 = $(".circle-3");
var terminal_path = $(".terminal-path");
var msg_wellcome = $(".msg-wellcome"); 
var editor = $(".editor");

wellcome.css("background-color", "white");
terminal.css("background", "transparent");
terminal.css("box-shadow", "none");
terminal.css("border-radius", "none");
terminal.css("border", "0");
terminal.css("top", "0");
terminal.css("width", 0);
c1.css("opacity", 0);
c2.css("opacity", 0);
c3.css("opacity", 0);
terminal_path.css("opacity", 0);
msg_wellcome.css("opacity", 0);

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 5,
    cursorChar:"",
});


setTimeout(function(){
    terminal.css("background-color", "rgba(59,13,50, 1)");
}, 6860);

setTimeout(function(){
    terminal.css("padding-left", "10px");
}, 7620);

setTimeout(function(){
    terminal.css("padding-right", "10px");
}, 8280);

setTimeout(function(){
    terminal.css("height", "25rem");
}, 9500);

setTimeout(function(){
    terminal.css("margin", "20px auto");
}, 14800);

setTimeout(function(){
    terminal.css("width", "65vw");
}, 15190);

setTimeout(function(){
    terminal.css("border-radius", "8px 8px 0 0");
}, 10900);

setTimeout(function(){
    terminal.css("border-top", "35px solid #444");
}, 11600);

setTimeout(function(){
    terminal.css("box-shadow", "3px 3px 20px #111");
}, 12080);

setTimeout(function(){
    terminal.css("top", "15vh");
}, 13200);

setTimeout(function(){
    terminal_path.css("opacity", 1);
}, 14100);

setTimeout(function(){
    terminal_path.css("color", "greenyellow");
}, 15800);


setTimeout(function(){
    msg_wellcome.css("opacity", 1);
}, 16300);

setTimeout(function(){
    c1.css("background-color", "red");
    c2.css("background-color", "red");
    c3.css("background-color", "red");
    c1.css("opacity", 1);
    c2.css("opacity", 1);
    c3.css("opacity", 1);
    c1.css("top", "0");
    c2.css("top", "0");
    c3.css("top", "0");
}, 19000);

setTimeout(function(){
    c1.css("border-radius", "50%");
    c2.css("border-radius", "50%");
    c3.css("border-radius", "50%");
}, 21000);

setTimeout(function(){
    c1.css("top", "-30px");
    c2.css("top", "-30px");
    c3.css("top", "-30px");
}, 22500);

setTimeout(function(){
    c2.css("background-color", "yellow");
}, 25000);

setTimeout(function(){
    c3.css("background-color", "green");
}, 27000);