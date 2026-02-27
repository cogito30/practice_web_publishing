$(function() {
    //menu
    $("nav ul li").mouseover(function (){
        $(this).children(".sub").stop().fadeIn(200);
    })
    $("nav ul li").mouseleave(function (){
        $(".sub").stop().fadeOut(200);
    })
})