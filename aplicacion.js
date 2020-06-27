let regiones = document.querySelector("#regiones");
regiones.addEventListener("click", regionSeleccionada);

let Btnbuscador = document.querySelector("#buscador");
Btnbuscador.addEventListener("submit", search);

function regionSeleccionada(e) {
    let UI = new Interfaz()
    UI.mostrarRegion(e.target)
}

function search(e) {
    e.preventDefault();
    let UI = new Interfaz()
    UI.mostrarBuscador()
}


document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    let UI = new Interfaz();
    UI.mostrarDocument()
    UI.mostrarCarga()

});

function btnEnviar() {
    let UI = new Interfaz()
    UI.Darkmode()
}
const buscar = (name) => {

    localStorage.setItem('country-detail', name);

}