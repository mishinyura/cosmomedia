// const mouseBorder = document.querySelector('.mouse-border'),
//       mouseCenter = document.querySelector('.mouse-center');
      

// window.addEventListener('mousemove', (event) => {
//   // console.log(event.pageX, event.pageY)
//   console.log(event.offsetX, event.offsetY)
//   mouseBorder.style.left = event.pageX - 10 + 'px'
//   mouseBorder.style.top = event.pageY - 10 + 'px'
//   mouseCenter.style.left = event.pageX - 2 + 'px'
//   mouseCenter.style.top = event.pageY - 2 + 'px'
// })

document.addEventListener('DOMContentLoaded', () => {

  const followCursor = () => { // объявляем функцию followCursor
    const mouseBorde = document.querySelector('.mouse-border') // ищем элемент, который будет следовать за курсором

    window.addEventListener('mousemove', e => { // при движении курсора
      // console.log(e.pageX, e.pageY)
      console.log(window.pageYOffset, window.pageXOffset)
      const target = e.target // определяем, где находится курсор
      if (!target) return

      if (target.closest('a') || target.closest('button')) { // если курсор наведён на ссылку
        mouseBorde.classList.add('cursor-active') // элементу добавляем активный класс
      } else { // иначе
        mouseBorde.classList.remove('cursor-active') // удаляем активный класс
      }

      mouseBorde.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
      mouseBorde.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
    })
  }

  followCursor() // вызываем функцию followCursor

})