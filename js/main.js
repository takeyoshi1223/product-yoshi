$(function($){
    $('.bg-switcher').bgSwitcher({
        images:['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval:5000,
        loop:true
    });
    
    $(window).scroll(function(){
        var targetElement = $('.fadein').offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll>targetElement-windowHeight+200){
            $('.fadein').css('opacity','1');
            $('.fadein').css('transform','translateY(0)');
        }
    });

    $('.more-button').on('click', function() {
        if ($('.open-box').is(':hidden')) {
        $('.open-box').slideDown();
        $(this).text('close');
        $(this).css('background-color', '#808080');
        }
        else{
        $('.open-box').slideUp();
        $(this).text('more');
        $(this).css('background-color', '#fabb51');
        }
    });

    $('.slider').slick({
        arrows:true,
        autoplay: false,
        dots:true,
        centerMode:true,
        cnterPadding:'20%',
    });

    $('nav a[href^="#"]').click(function(){
        var adjust=0;
        var speed=400;
        var href=$(this).attr("href");
        var target=$(href=="#" || href =="" ? 'html':href);
        var position = target.offset().top-adjust;
        $('body,html').animate({
            scrollTop: position
        },speed, 'swing');
        return false;
    });
});