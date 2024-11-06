let marca = "Audi", velocidad = 200, stock = true, modelos = ["R8", "A5", "A3"];

let frase = `Tenemos coches de la marca ${marca}, pueden ir hasta ${velocidad} km/h. `;

if(stock){
    frase += `Dispones de los siguientes modelos:`;
    modelos.forEach((modelo) => {
        frase += `<br/> - ${modelo}`;
    });
}

let caja = document.getElementById("caja");
caja.innerHTML = frase;