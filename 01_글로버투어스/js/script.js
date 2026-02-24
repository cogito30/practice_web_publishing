$(function(){
    //menu
    $("nav>ul>li").mouseenter(function(){
        $(this).children(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })

    //slide
    let i = 0;
    function slide() {
        if (i<2) {
            i++;
        } else {
            i = 0;
        }
        $(".slide ul").animate({"margin-left":(-1200 * i)+"px"}, 1000)
    }

    setInterval(slide, 3000);

    //popup
    $(".pop").click(function(){
        $(".popup").show();
        return false;  // 링크 차단
    })
    $(".close button").click(function() {
        $(".popup").hide();
    })
})

