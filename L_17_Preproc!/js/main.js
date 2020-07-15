$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    slidesToShow: 1,
    infinite: false,
    adaptiveHeight: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 550,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
