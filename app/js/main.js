$(function () {
   $('.slider__inner').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true
   });

   $('.works__inner').slick({
      sliderToScroll: 4,
      slidesToShow: 4,
      adaptiveHeight: true,
      prevArrow: '<button class="slick-arrow slick-prev"><img src="images/works/left.svg" alt=""></button>',
      nextArrow: '<button class="slick-arrow slick-next"><img src="images/works/right.svg" alt=""></button>',
      responsive: [
         {
            breakpoint: 911,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 681,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 460,
            settings: {
               slidesToShow: 1,
            }
         }
      ]
   });

   $('.header__menu-btn').on('click', function () {
      $('.header__menu > ul').slideToggle();
   });

   $('.header__drop-down.drop-down').on('click', function () {
      $(this).children('.drop-down__list').toggleClass('active');
      $(this).children('.drop-down__link').toggleClass('active');

   });


});