$(document).ready(function(){
    $('.customer__slider').slick({
        arrows: false,
        dots: true
});
});

(function () {
    const burger = document.querySelector('.header__burger')
    const panelNavBurger = document.querySelector('.header__nav')
    const close = document.querySelector('.header__nav-close')
    const itemMenuBurger = document.querySelectorAll('.header__item')

    burger.addEventListener('click', () => {
        panelNavBurger.classList.add('header__nav-active')
    })

    close.addEventListener('click', () => {
        panelNavBurger.classList.remove('header__nav-active')
    })

    itemMenuBurger.forEach( el => {
        el.addEventListener('click', () => {
            panelNavBurger.classList.remove('header__nav-active')
        })
    })

})()
