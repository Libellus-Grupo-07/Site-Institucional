let aberto = false;
let a = document.querySelectorAll("a");

function mostrarMenu() {
    let navbar;

    if (aberto) {
        aberto = false;
        navbar = document.querySelector(".slow");
        navbar.classList.remove("slow");
        navbar.classList.add("nav-item");
    } else {
        aberto = true;
        navbar = document.querySelector(".nav-item");
        navbar.classList.remove("nav-item");
        navbar.classList.add("slow");
    }
}   