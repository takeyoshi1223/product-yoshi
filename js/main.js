$(function($){
    $('.bg-switcher').bgSwitcher({
        images:['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval:5000,
        loop:true
    });
    
    $('fadein').css('visibility', 'hidden')
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
        if (scroll>targetElement-windowHeight+200){
           $(this).addClass('fadein_visible')
        }
        });
    });

    $('.fuwat').css('visibility', 'hidden');
    $(window).scroll(function() {
      var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
      $('.fuwat').each(function() {
        var objectPosition = $(this).offset().top;
        if (topWindow > objectPosition - windowHeight + 200) {
          $(this).addClass("fuwatAnime");
        }
      });
    });

    $('.slider').slick({
        dots:true,
        slidesToShow:4
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