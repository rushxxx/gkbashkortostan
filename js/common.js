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



// var galleryThumbs = new Swiper('.gallery-thumbs', {
//   spaceBetween: 10,
//   slidesPerView: 6,
// })
//
// var galleryTop = new Swiper('.gallery-top', {
//   spaceBetween: 10,
//
//   navigation: {
//     nextEl: '.suite_slider_button-next',
//     prevEl: '.suite_slider_button-prev',
//   },
//   thumbs: {
//     swiper: galleryThumbs,
//   },
// })

var mySwiper = new Swiper('.promo_slider', {
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
    nextEl: '.promo_slider_button-next',
    prevEl: '.promo_slider_button-prev',
  },
})


var galleryThumbs1 = new Swiper('.lobby_bar_gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 5,
})

var galleryTop1 = new Swiper('.lobby_bar_gallery-top', {
  spaceBetween: 10,

  navigation: {
    nextEl: '.thumbs_card_slider_button-next',
    prevEl: '.thumbs_card_slider_button-prev',
  },
  thumbs: {
    swiper: galleryThumbs1,
  },
})


var galleryThumbs2 = new Swiper('.banquet_menu_gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 5,
})

var galleryTop2 = new Swiper('.banquet_menu_gallery-top', {
  spaceBetween: 10,

  navigation: {
    nextEl: '.thumbs_card_slider_button-next',
    prevEl: '.thumbs_card_slider_button-prev',
  },
  thumbs: {
    swiper: galleryThumbs2,
  },
})

var galleryThumbs3 = new Swiper('.seating_thumbs', {
  spaceBetween: 16,
  slidesPerView: 5,
  followFinger: false,
})

var galleryTop3 = new Swiper('.seating_top', {
  spaceBetween: 10,

  thumbs: {
    swiper: galleryThumbs3,
  },
})