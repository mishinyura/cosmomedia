document.addEventListener('DOMContentLoaded', () => {
  const followCursor = () => { // объявляем функцию followCursor
    const mouseCenter = document.querySelector('.mouse-center')
    const mouseBorder = document.querySelector('.mouse-border') // ищем элемент, который будет следовать за курсором

    window.addEventListener('mousemove', e => { // при движении курсора
      // console.log(e.pageX, e.pageY)
      const target = e.target // определяем, где находится курсор
      if (!target) return

      if (target.closest('a') || target.closest('button')) { // если курсор наведён на ссылку
        mouseBorder.classList.add('cursor-active') // элементу добавляем активный класс
      } else { // иначе
        mouseBorder.classList.remove('cursor-active') // удаляем активный класс
      }

      mouseCenter.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
      mouseCenter.style.top = e.pageY + 'px'

      setTimeout(() => {
        mouseBorder.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
        mouseBorder.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
      }, 50)

      
      
    })
  }

  followCursor() // вызываем функцию followCursor

})