$(function(){
    //menu
    $("nav>ul>li").mouseover(function(){
        $(".sub, .menuBg").stop().slideDown();
    })
    $("nav>ul>li").mouseout(function(){
        $(".sub, .menuBg").stop().slideUp();
    })

    //slide
    let i = 0;

    function slide() {
        if (i<2) {
            i++;
        } else {
            i = 0;
        }
        $(".slide ul li").fadeOut();
        $(".slide ul li").eq(i).fadeIn();
    }

    setInterval(slide, 2000);
})

