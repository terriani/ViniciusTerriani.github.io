
var w_text1 = $(".t1");
var w_text2 = $(".t2");
var w_text3 = $(".t3");
var w_text4 = $(".t4");
var w_text5 = $(".t5");
var dow = $(".btn-down");


dow.css("opacity", 0);

var obj = [w_text1, w_text2, w_text3, w_text4, w_text5];


TweenMax.staggerFromTo(obj, 3, {
    scale: 0,
}, {
        opacity: 1,
    }, 0.9);

TweenMax.staggerTo(obj, 1.3, {
    //opacity: 0,
    color: "#ffca28",
}, 2);

TweenMax.to(dow, 2, {
    opacity: 1,
    delay: 9,
    ease: Bounce.easeOut, y: -15,

})

TweenMax.to(dow, 2, {
    delay: 9,
    ease: Bounce.easeOut, y: -15,
    repeat: -1,
    yoyo: true
})
