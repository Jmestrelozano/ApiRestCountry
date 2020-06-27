class Api {

    async llamarRegion(e) {
        let region = e.textContent

        let url = "https://restcountries.eu/rest/v2/";

        if (region !== "") {
            url += `region/${region}`;
        }
        let obtener = await fetch(url, { method: "GET" })
        let resultado = await obtener.json()

        return resultado

    }

    async llamarBuscador() {
        let buscadorTexto = document.querySelector(".uk-input").value;
        let url = "https://restcountries.eu/rest/v2/";

        if (buscadorTexto !== "") {
            url += `name/${buscadorTexto}`;
        }
        let obtener = await fetch(url, {
            method: "GET",
        })
        let resultado = await obtener.json()

        return resultado;
    }

    async mostrarDocumento() {
        let respuesta = await fetch("https://restcountries.eu/rest/v2/all")
        let datos = await respuesta.json()

        return datos

    }

    async llamarVista() {
        let obtener = await fetch(`https://restcountries.eu/rest/v2/name/${localStorage.getItem('country-detail')}?fullText=true
        `)

        let resultado = await obtener.json()
        return resultado
    }
}