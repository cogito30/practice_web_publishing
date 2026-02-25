$(function(){
    //menu
    $("nav>ul>li").mouseover(function(){
        $(".sub, .menuBg").stop().slideDown();
    })
    $("nav>ul>li").mouseout(function(){
        $(".sub, .menuBg").stop().slideUp();
    })
})

