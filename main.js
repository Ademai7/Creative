const arrowBurger = document.querySelector('.menu__cross');
const bodyBurger = document.querySelector('.header-menu__wrapper');
arrowBurger.addEventListener('click', function(e){
    document.body.classList.toggle('lock');
    arrowBurger.classList.toggle('active3');
    bodyBurger.classList.toggle('active3');
});
