// Открывание и закрывание меню по нажатию кнопки
const closeButton = document.querySelector(".slide-menu-header__close-button");
const burgerButton = document.querySelector(".logo-burger-btn-section__burger-button");

const menuToHide = document.querySelector(".opacity-container");

burgerButton.addEventListener("click", () => {
    menuToHide.style.cssText = "display: block;";
    console.log();
});

closeButton.addEventListener("click", () => {
    menuToHide.style.cssText = "display: none;";
    console.log();
});