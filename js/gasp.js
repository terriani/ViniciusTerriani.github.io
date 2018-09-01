

//variaveis em jquery
var intro_img = $(".intro-img");
var text_intro = $(".text-intro");
var title = $(".title");

TweenMax.to(intro_img, 1.5, {
    left: 0,
    opacity: 1,
});
TweenMax.to(text_intro,1.2, {
    right: 0,
    opacity: 1
});
TweenMax.to(title,2, {
    left: 0,
    opacity: 1
});