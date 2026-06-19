const botonHamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.navegacion .links');

botonHamburger.addEventListener('click', () => {
    botonHamburger.classList.toggle('is-active');
    menuLinks.classList.toggle('is-active');
});

const itemsMenu = document.querySelectorAll('.navegacion .item');

itemsMenu.forEach(item => {
    item.addEventListener('click', () => {
        botonHamburger.classList.remove('is-active');
        menuLinks.classList.remove('is-active');
    });
});