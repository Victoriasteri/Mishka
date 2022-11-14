let hamburger = document.getElementsByClassName("header__titile");

let menu = document.getElementsByClassName("mobile-menu");

let closeBtn = document.getElementsByClassName("navbar__close-img");

function openMenu() {
    hamburger.classList.toggle("hide");
    closeBtn.classList.toggle("display");
    menu.classList.toggle("menu-position");
};

hamburger.addEventListener("click", openMenu);




