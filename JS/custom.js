$(function (){
    'use strict';
    // il fait le scroll
    $('html').niceScroll();
    //change header height
    $('.header').height($(window).height());
    //scroll to features
    $('.header .arrow i').click(function () {
        $('html , body').animate({
            scrollTop: $('.features').offset().top
        },1000);
    });
});
