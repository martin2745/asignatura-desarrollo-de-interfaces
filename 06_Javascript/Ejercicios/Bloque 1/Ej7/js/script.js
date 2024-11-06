let palabra = prompt("introduce una palabra");

const palabraMayusculas = palabra => {
    let upper = palabra.toUpperCase();
    let counter = palabra.length;
    return "La palabra ha sido " + upper + " y tiene " + counter + " letras.";
}

alert(palabraMayusculas(palabra));