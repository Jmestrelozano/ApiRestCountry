class Interfaz {
    mostrarRegion(region) {
        let APIrest = new Api();

        APIrest.llamarRegion(region)
            .then((result) => {
                let htmlTemplate = "";
                for (let ver of result) {
                    const { name, flag, population, region, capital } = ver;
                    htmlTemplate += `
                 <div class="contenedor-banderas" >
                    <a onclick="buscar('${name}')" href="vista.html">
                        <div class="banderas">
                        <div class="img-bandera"><img loading="lazy" width="500" height="400"  src="${flag}" alt=""></div>
                        </div>
                         <div class="texto-banderas">
                        <h2 class="titulo-banderas">${name}</h2>
                        <p>Population: <span>${population}</span> </p>
                        <p>Region: <span>${region}</span></p>
                        <p>Capital: <span>${capital}</span></p>
                         </div>
                    </a>
                </div>
                   `;
                    let resultado = document.getElementById("resultado");
                    resultado.appendChild = htmlTemplate;
                    resultado.innerHTML = htmlTemplate;
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    mostrarBuscador() {
        let APIrest = new Api();
        APIrest.llamarBuscador()
            .then((result) => {
                let htmlTemplate = "";
                for (let ver of result) {
                    const { name, flag, population, region, capital } = ver;
                    htmlTemplate += `
                 <div class="contenedor-banderas" >
                    <a onclick="buscar('${name}')" href="vista.html">
                        <div class="banderas">
                        <div class="img-bandera"><img loading="lazy" width="500" height="400"  src="${flag}" alt=""></div>
                        </div>
                         <div class="texto-banderas">
                        <h2 class="titulo-banderas">${name}</h2>
                        <p>Population: <span>${population}</span> </p>
                        <p>Region: <span>${region}</span></p>
                        <p>Capital: <span>${capital}</span></p>
                         </div>
                    </a>
                </div>
                   `;
                    let resultado = document.getElementById("resultado");
                    resultado.appendChild = htmlTemplate;
                    resultado.innerHTML = htmlTemplate;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    mostrarDocument() {
        let APIrest = new Api();
        APIrest.mostrarDocumento()
            .then((result) => {
                localStorage.setItem("GuardarElementos", JSON.stringify(result));

                let local = localStorage.getItem("GuardarElementos");
                let ver = JSON.parse(local);

                let htmlTemplate = "";
                ver.forEach(function(result) {
                    const { name, flag, population, region, capital } = result;
                    htmlTemplate += `
                            <div class="contenedor-banderas" >
                                <a onclick="buscar('${name}')" href="vista.html">
                                    <div class="banderas">
                                    <div class="img-bandera"><img loading="lazy" width="500" height="400"  src="${flag}" alt=""></div>
                                    </div>
                                    <div class="texto-banderas">
                                    <h2 class="titulo-banderas">${name}</h2>
                                    <p>Population: <span>${population}</span> </p>
                                    <p>Region: <span>${region}</span></p>
                                    <p>Capital: <span>${capital}</span></p>
                                    </div>
                                </a>
                            </div>
                            `;

                    let resultado = document.getElementById("resultado");
                    resultado.appendChild = htmlTemplate;
                    resultado.innerHTML = htmlTemplate;
                });
            });
    }


    mostrarVista() {
        let APIrest = new Api
        let contenedor = document.getElementById("resultado");

        let div = document.createElement("div");

        let content_texto = document.createElement("div");
        content_texto.classList.add("content-texto");
        div.classList.add("content-imagen");
        contenedor.appendChild(div);
        contenedor.appendChild(content_texto);

        APIrest.llamarVista()
            .then(result => {
                result.forEach(function(ver) {
                    const { name, flag, nativeName, population, region, subregion, capital, topLevelDomain: [uno], currencies: [dos], languages: [tres], borders } = ver

                    console.log(uno)
                    div.innerHTML = ` <img loading="lazy" width="500" height="400" src="${flag}" alt="">`;
                    content_texto.innerHTML = ` <h2>${name}</h2>
                <div class="division">
                    <div class="div1">
                        <p>Native Name: <span>${nativeName}</span></p>
                        <p>Population: <span>${population}</span></p>
                        <p>Region: <span>${region}</span></p>
                        <p>Sub Region: <span>${subregion}</span></p>
                        <p>Capital: <span>${capital}</span></p>
                    </div>
                    <div class="div2">
                        <p>Top Level Domain: <span>${uno}</span></p>
                        <p>Currencies: <span>${dos.name}</span></p>
                        <p>Languages: <span>${tres.name}</span></p>
                    </div>
                </div>
                <div class="border_countries">
                    <p>Border Countries: <span>${borders[0]}</span>
                        <span>${borders[1]}</span>
                        <span>${borders[2]}</span>   
                        <span>${borders[3]}</span>  
                        <span>${borders[4]}</span></p>
                </div>`;
                });
            })
    }

    mostrarCarga() {
        let result = document.getElementById("result")
        const spinner = document.querySelector("#cargando img");
        spinner.style.display = "block";
        setTimeout(function() {
            spinner.style.display = "none";
            result.appendChild(spinner);
        }, 3000);

    }

    Darkmode() {
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

            result.classList.toggle("dark-titulos_p");
        }
        dropdown.classList.toggle("dark-dropdown");
    }
}