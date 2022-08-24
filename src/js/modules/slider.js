// const sliderContainer = document.querySelector('.slider'),
//       slider = sliderContainer.querySelector('.slider__slide'),
//       slide = slider.querySelectorAll('.slider__item'),
//       btnPrev = sliderContainer.querySelector('.slider__btn_prev'),
//       btnNext = sliderContainer.querySelector('.slider__btn_next');
// console.log(slide[1].clientWidth)
// let countSlide = slide.length, //Количество слайдов в массиве
//     activeIndex = 1, //Индекс активного слайда в массиве slider
//     widthSlider = slider.clientWidth, //Видимая ширина контейнера
//     widthSlide = slide[activeIndex].clientWidth, //Ширина активного слайда
//     position = 800;

// console.log(slider)
// console.log(slide[1])

// // slide.firstElementChild
// // slide.lastElementChild

// function activeSlide(){
//     for(let i = 0; i < countSlide; i++){
//         if (slide[i].className.includes('slide-active')){
//             activeIndex = i

//         }
//     }
// }

// widthSlide = slide[activeIndex].clientWidth

// console.log(widthSlide)
// function nextSlide(){
//     for(let i = 0; i < countSlide; i++){
//         slide[i].style.left = '-' + position + 'px'
//     }
//     position += widthSlide
// }

// window.addEventListener('resize', () => {
//     widthSlider = slider.clientWidth
//     widthSlide = slide[activeIndex].clientWidth
//     console.log(widthSlider)
//     console.log(widthSlide)
    
// })
// btnNext.addEventListener('click', () => {
//     nextSlide() 
// })


// //Если клик, то передвинуть классы active на 1 item вперед