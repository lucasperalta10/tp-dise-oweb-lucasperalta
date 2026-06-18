const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
    links.classList.toggle("is-active");
    hamburger.classList.toggle("is-active");
});

const items = document.querySelectorAll(".item");
items.forEach((item) => {
    item.addEventListener("click", () => {
        hamburger.classList.remove("is-active");
        links.classList.remove("is-active");
    });
});