import * as flsFunctions from './modules/functions.js';
import './modules/mouse.js'
import './modules/menu.js'
import './modules/burger.js'
import './modules/hero.js'
import './modules/animation.js'
import './modules/swiper-bundle.min.js'

flsFunctions.isWebp();





//progress Bar and header

let header = document.querySelector('.header'),
  fullHeight = document.body.scrollHeight,
  innerPage = window.innerHeight,
  progressBar = document.querySelector('.footer__ellipse'),
  progressBtn = document.querySelector('.footer__btn-progress');


function fillProgress() {
  fullHeight = document.body.scrollHeight
  innerPage = window.innerHeight
  progressBar.style.strokeDashoffset = 270 - (scrollY * 270 / (fullHeight - innerPage)) + '%'
}

window.addEventListener('scroll', fillProgress)
window.addEventListener('resize', fillProgress)


window.addEventListener('scroll', () => {
  if (scrollY >= 200) {
    header.style.backgroundColor = 'black'
    progressBtn.classList.add('progress-active')
  } else {
    document.querySelector('.header').style.backgroundColor = 'transparent'
    progressBtn.classList.remove('progress-active')
  }
})

progressBtn.addEventListener('click', () => {
  document.querySelector('.hero').scrollIntoView({
    block: 'nearest',
    behavior: 'smooth'
  });
})







const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
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

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});




const revSlider = new Swiper('.reviews__wrapper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
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
});




const fslider = new Swiper('.first_slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
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



const sslider = new Swiper('.second_slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  parallax: true,
  slidesPerView: 1,
  centeredSlides: true,
  inverse: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: fraction,
  },

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

fslider.controller.control = sslider
sslider.controller.control = fslider
// sslider.changeLanguageDirection(rtl)