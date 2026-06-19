const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    links.classList.toggle('is-active');
});