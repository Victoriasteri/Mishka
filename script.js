let hamburger = document.getElementById("hamburger");

let menu = document.getElementById("mobileMenu");

let closeBtn = document.getElementById("closeBtn");

let navbar = document.getElementById("navbar");

function openMenu() {
    hamburger.classList.toggle("hide");
    closeBtn.classList.toggle("display");
    menu.classList.toggle("menu-position");
    navbar.classList.toggle("margin");
};

hamburger.addEventListener("click", openMenu);




