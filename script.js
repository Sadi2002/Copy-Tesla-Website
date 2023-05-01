const menu = document.querySelector('.menu');
const navigationBar = document.querySelector('.navigation__bar');
const closeNavBtn = document.querySelector('.close-navigation');
const rightBarList = document.querySelector('.navigation__bar-list');


const barToLeft = () => {
    navigationBar.classList.remove('out');
    navigationBar.classList.add('active-bar');
}

const barToRight = () => {
    navigationBar.classList.remove('active-bar');
    navigationBar.classList.add('out');
}

menu.addEventListener('click', barToLeft)
closeNavBtn.addEventListener('click', barToRight)


// Current screen width
let screenWidth = window.screen.width;

if(screenWidth < 1200){
 let tesla3 = document.createElement('li')
 tesla3.textContent = 'Model 3'

 let teslaY = document.createElement('li')
 teslaY.textContent = 'Model Y'

 let teslaS = document.createElement('li')
 teslaS.textContent = 'Model S'

 let teslaX = document.createElement('li')
 teslaX.textContent = 'Model X'

 let charge = document.createElement('li')
 charge.textContent = 'Ładowanie'

 rightBarList.append(tesla3,teslaY,teslaS, teslaX,charge)
} else if(screenWidth >= 1200) {
    tesla3.remove()
    teslaY.remove()
    teslaS.remove()
    teslaX.remove()
    charge.remove()
}


