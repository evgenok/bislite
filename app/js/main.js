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
      adaptiveHeight: true
   });
});