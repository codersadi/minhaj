$(document).ready(function(){
    //Team Part 
    $('.active_team').slick({
    infinite:true,
    slidesToShow:4,
    slidesToScroll:1,
    autoplaySpeed:4000,
    autoplay:true,
    arrows:false,
    responsive: [
             {
                 breakpoint: 1200,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1,
                 }
    },
             {
                 breakpoint: 767,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                 }
    },
             {
                 breakpoint: 576,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2,
                 }
    },
         {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                 }
    }
  ]  
        
}); 
    
   //Slider Bottom
  $('.text_part').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots: true,
         fade: true,
         asNavFor: '.img_part'
     });
     $('.img_part').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         asNavFor: '.text_part',
         arrows: false,
         dots: false,
         centerMode: true,
         centerPadding: '0px',
         focusOnSelect: true,
         autoplay:true,
         fade:true,
     });
    
    //  scrolling spy
    $('body').scrollspy({target: ".navbar", offset: 50});
    
    //Smoth Scrolling
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });
    
    // Sticky Top
    $(window).scroll(function(){
       var scrolling = $(this).scrollTop();
        var sticky = $(".sticky");
        if(scrolling >= 100){
           sticky.addClass("nav_bg"); 
        }
        else{
           sticky.removeClass("nav_bg");   
        }
    });
    
    // Wow Js Code
    new WOW().init();
    
    
    //Preloader Js
    $(window).on('load', function(){
        $('.preloder').delay(2000).fadeOut(500);
    });
    
    
    document.body.onload = function () {
        /*The onload event occurs when an object has been loaded*/
        setTimeout(function () {
            var preloader = document.getElementById('page-preloader'); {
                preloader.classList.add('done');
            }
        }, 5000);
    }
    
    
    //Scroll Top
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#scroll_top').fadeIn();
        } else{
             $('#scroll_top').fadeOut();
        }
    });
    $("#scroll_top").click(function(){
        $('html ,body').animate({scrollTop : 0},800);
    });

    
    
    
    
});