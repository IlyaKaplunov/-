const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');

if (burger) {
    const menu = document.querySelector('.header__menu');
    burger.addEventListener('click', function(e) {
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    });
}


const arrow = document.querySelector('.catalog__sidebar-arrow');

if (arrow) {
    const catList = document.querySelector('.catalog-list__sidebar');
    arrow.addEventListener('click', function(e) {
        arrow.classList.toggle('active');
        catList.classList.toggle('active');
    });
}