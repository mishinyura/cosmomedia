import * as flsFunctions from './modules/functions.js';
import './modules/mouse.js'
import './modules/menu.js'
import './modules/burger.js'
import './modules/hero.js'
import './modules/swiper-bundle.min.js'

flsFunctions.isWebp();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // spaceBetween: 100,
  centeredSlides: true,
  parallax: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    1030: {
      slidesPerView: 1.5,
    }
  },

  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const slider = new Swiper('.slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // spaceBetween: 100,
  centeredSlides: true,
  parallax: true,
  slidesPerView: 1,
  centeredSlides: true,

  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});


const revSlider = new Swiper('.reviews__wrapper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // spaceBetween: 100,
  centeredSlides: true,
  parallax: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    1030: {
      slidesPerView: 1.5,
    }
  },

  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});