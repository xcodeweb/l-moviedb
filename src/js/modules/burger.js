const menu = document.querySelector(".header__mobile-nav");
const burger = document.querySelector(".burger");
const btnClose = document.querySelector(".nav-mobile__close");
const body = document.querySelector('.body');

burger.addEventListener("click", (e) => {
  menu.classList.add("active");
  body.classList.add("lock");
});

btnClose.addEventListener("click", (e) => {
  menu.classList.remove("active");
  body.classList.remove("lock");
});
