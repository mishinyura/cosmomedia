const nav = document.querySelector('.nav'),
      menu = nav.querySelectorAll('.submenu'),
      navItem = nav.querySelectorAll('.nav__link'),
      main = document.querySelector('.main');

function start(){
    if(document.body.offsetWidth > 768){
        navItem.forEach((item) => {
            item.addEventListener('click', (e) => {
                let path = e.currentTarget.dataset.path;
                
                for(let i = 0; i < menu.length; i++){
                    menu[i].classList.remove('submenu-active')
                };
                document.querySelector(`[data-target='${path}']`).classList.add('submenu-active');
            })
        
        })

        main.onclick = () => {
            for(let i = 0; i < menu.length; i++){
                menu[i].classList.remove('submenu-active')
            };
        };
        

    }
}

start()

window.addEventListener('resize', () => {
    start()
})