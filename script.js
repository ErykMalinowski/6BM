const hamburger = document.querySelector(".page-hamburger");
const iconHamburger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const nav = document.querySelector(".page-navigation");

hamburger.addEventListener("click", function () {
    iconHamburger.classList.toggle("show");
    iconX.classList.toggle("show");
    nav.classList.toggle("show");
});

const concertBtns = document.querySelectorAll(".concerts__info>button");

concertBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        let span = document.createElement("span");
        span.textContent = "Have fun!";
        span.style.fontSize = "16px";
        span.style.fontWeight = "bold";

        btn.replaceWith(span);
    });
});

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);
});