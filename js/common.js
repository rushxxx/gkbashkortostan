var mySwiper = new Swiper('.hero_slider', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 1,
  loop :true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hero_slider_button-next',
    prevEl: '.hero_slider_button-prev',
  },
})

var mySwiper = new Swiper('.nav_slider', {
  // Optional parameters
  slidesPerView: 1,
  loop :true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.nav_slider_button-next',
    prevEl: '.nav_slider_button-prev',
  },
})