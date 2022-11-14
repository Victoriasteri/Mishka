let hamburger = document.getElementById("hamburger");

let menu = document.getElementById("mobileMenu");

let closeBut = document.getElementById("closeBtn");

let navbar = document.getElementById("navbar");

function openMenu() {
    hamburger.classList.toggle("hide");
    closeBut.classList.toggle("display");
    menu.classList.toggle("menu-position");
    navbar.classList.toggle("margin");
};

hamburger.addEventListener("click", openMenu);

function closeMenu() {
    hamburger.classList.remove("hide");
    closeBut.classList.remove("display");
    menu.classList.remove("menu-position");
    navbar.classList.remove("margin");
}

closeBut.addEventListener("click", closeMenu);




