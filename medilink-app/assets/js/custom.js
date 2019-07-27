var owlinit = function(){
  $('.top-specialist-slider').owlCarousel({
    margin:20,
    slideSpeed: 3000,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    navText: false,
    nav:true,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    },
});
$('.news-section-slider').owlCarousel({
    margin:20,
    slideSpeed: 3000,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    navText: false,
    nav:true,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    },
});
 $(window).scroll(function () {
      if ($(window).scrollTop() > 250) {
        $(".sticky").addClass("fixed");
      } else {
        $(".sticky").removeClass("fixed");
      }

      // if(isScrolledIntoView($('.footer'))){
      //   $(".sticky").removeClass("fixed");
      // }

    });

    // function isScrolledIntoView(elem){
    //     var $elem = $(elem);
    //     var $window = $(window);

    //     var docViewTop = $window.scrollTop();
    //     var docViewBottom = docViewTop + $window.height();

    //     var elemTop = $elem.offset().top;
    //     var elemBottom = elemTop + $elem.height();

    //     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    // } 
    $('.ListGet').on('click',function(){
        $(this).next('.list').toggle();
        $(this).toggleClass('blur')   
    })
    // $('.ListGet').add('.list').on('focusout',function(){
    //     $(this).next('.list').hide();
    //   $(this).removeClass('blur');   
    // })  
}
