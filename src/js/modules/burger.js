const burger = document.querySelector('.burger'),
      navBar = document.querySelector('.nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active')
    navBar.classList.toggle('nav-active')
})