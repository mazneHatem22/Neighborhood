$(document).ready(function () {
  $(".owl-carousel.first-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".owl-carousel.first-product").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  $(".owl-carousel.first-Latest").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".owl-carousel.first-tweet").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".first-product, .first-Latest").on("mouseenter",function () {
   $(".first-product .owl-next,.first-Latest .owl-next").animate({
    right:"-0px"
   },500) 
  })

    $(".first-product, .first-Latest").on("mouseleave",function () {
    $(".first-product .owl-next,.first-Latest .owl-next").animate({
     right:"-100px"
     },500)
    
   })
    $(".first-product, .first-Latest").on("mouseenter",function () {
    $(".first-product .owl-prev,.first-Latest .owl-prev").animate({
     left:"-0px"
    },500)
    
    })
    $(".first-product, .first-Latest").on("mouseleave",function () {
    $(".first-product .owl-prev,.first-Latest .owl-prev").animate({
     left:"-100px"
    },500)
    
    })
    $(".first-tweet").on("mouseenter",function () {
      $(".first-tweet .owl-next").fadeIn(500)
      
    })
    $(".first-tweet").on("mouseleave",function () {
      $(".first-tweet .owl-next").fadeOut(500)
      
    })
    $(".first-tweet").on("mouseenter",function () {
      $(".first-tweet .owl-prev").fadeIn(500)
      
    })
    $(".first-tweet").on("mouseleave",function () {
      $(".first-tweet .owl-prev").fadeOut(500)
      
    })
    $(window).on("scroll", function () {
      if($(this).scrollTop() > 300){
        $(".up").fadeIn()
      } else{
        $(".up").fadeOut()
      }
    })
    $(".up").on("click" ,function () {
      $("html").animate({
        scrollTop:0
      },0)
      
    })
    $(function() {

      $('.circlechart').circlechart();

  });
});
