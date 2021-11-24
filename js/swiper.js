'use strict'

let gallerySlider = function () {
  const swiperGallery = new Swiper(".swiper-gallery", {
    speed: 800,
    slidesPerView: "auto",
    spaceBetween: 15,
    effect: "slide",
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    }
  });
};

gallerySlider();
