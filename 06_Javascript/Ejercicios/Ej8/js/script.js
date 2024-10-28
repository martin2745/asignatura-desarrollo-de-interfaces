let frase = "Vamos a aprender este lenguaje tan importante";

let palabra = prompt(`En esta frase: ${frase} ¿Qué palabra querrias reemplazar?`);
let reemplazo = prompt(`Has elegido la palabra ${palabra}. ¿Por qué palabra vas a reemplazarla?`);

const reemplazar = (palabraOriginal, palabraReemplazo) => {
    let fraseFinal = frase;
    let busqueda = frase.search(palabraOriginal); //Posición de la palabra

    if(busqueda && busqueda !== -1){
        fraseFinal = frase.replace(palabraOriginal, palabraReemplazo);
    }else{
        fraseFinal = "Esa palabra no existe";
    }

    return fraseFinal;
}

alert(reemplazar(palabra, reemplazo));