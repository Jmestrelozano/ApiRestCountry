let regiones = document.getElementById("regiones");
regiones.addEventListener("click", regionSeleccionada);

let Btnbuscador = document.getElementById("buscador");
Btnbuscador.addEventListener("submit", search);

function search(e) {
    e.preventDefault();
    let buscadorTexto = document.querySelector(".uk-input").value;
    let url = "https://restcountries.eu/rest/v2/";

    if (buscadorTexto !== "") {
        url += `name/${buscadorTexto}`;
    }
    fetch(url, {
            method: "GET",
        })
        .then((response) => response.json())
        .then(function Revisar(res) {

            localStorage.setItem("ArrayCountryes", JSON.stringify(res));

            let htmlTemplate = "";
            res.forEach(function(ver) {
                htmlTemplate += `
                <div class="contenedor-banderas" >
                <a onclick="buscar('${ver.name}')" href="vista.html">
                <div class="banderas">
                <div class="img-bandera"><img loading="lazy" width="500" height="400" src="${ver.flag}" alt=""></div>
                </div>
                <div class="texto-banderas">
                    <h2 class="titulo-banderas">${ver.name}</h2>
                    <p>Population: <span>${ver.population}</span> </p>
                    <p>Region: <span>${ver.region}</span></p>
                    <p>Capital: <span>${ver.capital}</span></p>
                </div>
                </a>
            </div>
               `;
                let resultado = document.getElementById("resultado");
                resultado.appendChild = htmlTemplate;
                resultado.innerHTML = htmlTemplate;
            });
        })
        .catch((error) => console.error("Error:", error));
}

function regionSeleccionada(e) {
    e.preventDefault();
    let region = e.target.textContent;
    let url = "https://restcountries.eu/rest/v2/";

    if (region !== "") {
        url += `region/${region}`;
    }
    fetch(url, {
        method: "GET",
    })

    .then((response) => response.json())
        .then(function Revisar(res) {
            localStorage.setItem("ArrayCountryes", JSON.stringify(res));

            let htmlTemplate = "";
            res.forEach(function(ver) {
                htmlTemplate += `
             <div class="contenedor-banderas" >
                <a onclick="buscar('${ver.name}')" href="vista.html">
                    <div class="banderas">
                    <div class="img-bandera"><img loading="lazy" width="500" height="400"  src="${ver.flag}" alt=""></div>
                    </div>
                     <div class="texto-banderas">
                    <h2 class="titulo-banderas">${ver.name}</h2>
                    <p>Population: <span>${ver.population}</span> </p>
                    <p>Region: <span>${ver.region}</span></p>
                    <p>Capital: <span>${ver.capital}</span></p>
                     </div>
                </a>
            </div>
               `;
                let resultado = document.getElementById("resultado");
                resultado.appendChild = htmlTemplate;
                resultado.innerHTML = htmlTemplate;
            });

        })
        .catch((error) => console.error("Error:", error));


}

const buscar = (name) => {

        localStorage.setItem('country-detail', name);

    }
    //////////////////////////////////////////////////////////////////////////////////
async function GuardarDatos() {
    let respuesta = await fetch("https://restcountries.eu/rest/v2/all")
    let datos = await respuesta.json()
    return datos
}
GuardarDatos()
    .then(function Revisar(res) {
        localStorage.setItem("DatosCountryes", JSON.stringify(res))
    });


let guardado = localStorage.getItem("DatosCountryes");
let respuesta = JSON.parse(guardado);


let result = document.getElementById("result")

let htmlTemplate = "";
respuesta.forEach(function(ver) {

    htmlTemplate += `
     <div class="contenedor-banderas" >
        <a onclick="buscar('${ver.name}')" href="vista.html">
            <div class="banderas">
            <div class="img-bandera"><img loading="lazy" width="500" height="400"  src="${ver.flag}" alt=""></div>
            </div>
             <div class="texto-banderas">
            <h2 class="titulo-banderas">${ver.name}</h2>
            <p>Population: <span>${ver.population}</span> </p>
            <p>Region: <span>${ver.region}</span></p>
            <p>Capital: <span>${ver.capital}</span></p>
             </div>
        </a>
    </div>
       `;


    let resultado = document.getElementById("resultado");
    resultado.appendChild = htmlTemplate;
    resultado.innerHTML = htmlTemplate;
});
const spinner = document.querySelector("#cargando img");
spinner.style.display = "block";
setTimeout(function() {
    spinner.style.display = "none";
    result.appendChild(htmlTemplate);
}, 3000);


////////////////////////////////////////////////////////
function btnEnviar() {
    let element = document.querySelector(".contenedor");
    let contenedor_banderas = document.querySelectorAll(
        ".columna .contenedor-banderas"
    );
    let navbar = document.querySelector(".navbar");
    let navbar_a = document.querySelector(".navbar-brand");
    let buscador = document.querySelector(".uk-input");
    let apariencia = document.querySelector(".uk-inline");
    let tituloBandera = document.querySelectorAll(
        ".contenedor-banderas .titulo-banderas"
    );
    let parrafo = document.querySelectorAll(".contenedor-banderas p");
    let dropdown = document.querySelector(".dropdown");
    element.classList.toggle("dark-mode");
    for (let i = 0; i < contenedor_banderas.length; i++) {
        let result = contenedor_banderas[i];

        result.classList.toggle("dark-banderas");
    }

    navbar.classList.toggle("dark-navbar");
    navbar_a.classList.toggle("dark-a");
    buscador.classList.toggle("dark-buscador");
    apariencia.classList.toggle("apariencia");

    for (let i = 0; i < tituloBandera.length; i++) {
        let result = tituloBandera[i];

        result.classList.toggle("dark-titulos");
    }

    for (let i = 0; i < parrafo.length; i++) {
        let result = parrafo[i];
        console.log(result);
        result.classList.toggle("dark-titulos_p");
    }
    dropdown.classList.toggle("dark-dropdown");
}