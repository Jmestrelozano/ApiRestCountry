function btnEnviar() {
    let element = document.querySelector(".contenedor");
    let navbar = document.querySelector(".navbar");
    let navbar_a = document.querySelector(".navbar-brand");
    let texto = document.querySelector(".content-texto");
    let btnBack = document.querySelector(".boton-back");

    element.classList.toggle("dark-mode");
    navbar.classList.toggle("dark-navbar");
    navbar_a.classList.toggle("dark-a");
    texto.classList.toggle("dark-texto");
    btnBack.classList.toggle("dark-bottom");
}
document.addEventListener("DOMContentLoaded", function() {
    let UI = new Interfaz()

    UI.mostrarVista()

});