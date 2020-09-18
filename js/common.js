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



var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 6,
})

var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,

  navigation: {
    nextEl: '.suite_slider_button-next',
    prevEl: '.suite_slider_button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
})