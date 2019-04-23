


var click = 0;
$(".toggle").click(function () {
    $(".inner").toggleClass("active");
    $(".toggle").toggleClass("slide");
    $(".dot").toggleClass("dot-on");
    $(".check").toggleClass("check-on");
});