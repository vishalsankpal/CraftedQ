jQuery(document).ready(function($){
    $('#testimonial-items-container').owlCarousel({
        loop:false,
        nav:true,
        navigation : true,
        center: true,
        dots: false,
        responsive:{
            0:{
                items:1.4,
                margin:32,
                stagePadding: 10,
                nav:false,
                navigation : false,
            },
            767:{
                items:2,
                margin:48,
                stagePadding: 105,
            },
            1000:{
                items:3,
                margin:48,
                stagePadding: 105,
            }
        }
    })
    $('.brand-row').owlCarousel({
        loop:true,
        margin:25,
        nav:false,
        navigation : false,
        dots: false,
        responsive:{
            0:{
                items:3
            },
            767:{
                items:5
            }
        }
    })
    function owlInitialize() {
        if ($(window).width() < 992) {
            $('.brand-row').owlCarousel();
        }else{
            $('.brand-row').owlCarousel('destroy');
        }
    }
    
    owlInitialize();

    $('.mobile-toggler').click(function(){
        $('.mobile-nav').addClass('active');
    })
    $('.nav-close').click(function(){
        $('.mobile-nav.active').removeClass('active');
    })
    
    
    $(window).resize(function() {
        owlInitialize();
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('a.scrollTop').show();
        }
        else {
            $('a.scrollTop').hide();
        }
    });
    $("a.scrollTop").click(function() {
        $("html, body").animate({ scrollTop: 0 });
        return false;
    });
})