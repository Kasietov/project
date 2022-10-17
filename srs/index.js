window.onload = function() {
const burgerMenu = document.querySelector('.burger-menu');
    const headerMenu = document.querySelector('.header__menu');

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');
})
}