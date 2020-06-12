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



let contenedor = document.getElementById("resultado");



var guardado = localStorage.getItem("ArrayCountryes");
let respuesta = JSON.parse(guardado);


let div = document.createElement("div");

let content_texto = document.createElement("div");
content_texto.classList.add("content-texto");
div.classList.add("content-imagen");
contenedor.appendChild(div);
contenedor.appendChild(content_texto);

// Logica para una sola bandera

fetch(`https://restcountries.eu/rest/v2/name/${localStorage.getItem('country-detail')}?fullText=true
`, {
        method: 'GET'
    }).then(response => response.json())
    .then(response => {

        response.forEach(function(ver) {
            div.innerHTML = ` <img loading="lazy" width="500" height="400" src="${ver.flag}" alt="">`;
            content_texto.innerHTML = ` <h2>${ver.name}</h2>
        <div class="division">
            <div class="div1">
                <p>Native Name: <span>${ver.nativeName}</span></p>
                <p>Population: <span>${ver.population}</span></p>
                <p>Region: <span>${ver.region}</span></p>
                <p>Sub Region: <span>${ver.subregion}</span></p>
                <p>Capital: <span>${ver.capital}</span></p>
            </div>
            <div class="div2">
                <p>Top Level Domain: <span>${ver.topLevelDomain[0]}</span></p>
                <p>Currencies: <span>${ver.currencies[0].name}</span></p>
                <p>Languages: <span>${ver.capital}</span></p>
            </div>
        </div>
        <div class="border_countries">
            <p>Border Countries: <span>${ver.borders[0]}</span>
                <span>${ver.borders[1]}</span>
                <span>${ver.borders[2]}</span>   
                <span>${ver.borders[3]}</span>  
                <span>${ver.borders[4]}</span></p>
        </div>`;
        });

    })