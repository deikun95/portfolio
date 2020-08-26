const button = document.querySelector(".burger__btn");
const btnLine = button.querySelector(".btn__line");
const burgerMenu = document.querySelector(".burger__menu");
const container = document.querySelector(".container");
// const links = document.getElementsByClassName('burger__item', 'socials__item')
const linkButtons = document.querySelector(".header__buttons");
let check = false;

button.addEventListener("click", (e) => {
  burgerMenu.classList.toggle("burger__menu--active");
  btnLine.classList.toggle("active");
  linkButtons.classList.toggle("active-menu");
  check = true;
});

container.addEventListener("click", (e) => {
  if (check) {
    burgerMenu.classList.toggle("burger__menu--active");
    btnLine.classList.toggle("active");
    linkButtons.classList.toggle("active-menu");
    check = false;
  }
});
burgerMenu.addEventListener("click", (e) => {
  console.log(1);
  burgerMenu.classList.toggle("burger__menu--active");
  btnLine.classList.toggle("active");
  linkButtons.classList.toggle("active-menu");
  check = false;
});
