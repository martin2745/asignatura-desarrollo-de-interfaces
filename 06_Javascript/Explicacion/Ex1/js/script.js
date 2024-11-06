// Consola
//alert("Hola que tal");
console.log("Hola que tal");
console.warn("Advertencia");
console.error("Errores");
//let confirmacion = confirm("¿Quieres continuar?");
//let numero = prompt("Dime un número");


// 1. Variables
console.warn("Variables");
let nombre = "Martín Gil Blanco";
let edad = 24;
let cantidad = 15.5;
let pais = "España";
let conocimientos = ["html", "css", "javascript"];
let persona = { nombre: "Juan", edad: 30 };
const PI = 3.1416;
let booleano = true;                 
let indefinido;                      
let nulo = null;         
let resultado = "hola" / 2;      // Intentar dividir una cadena de texto por un número            

// 2. Tipos de datos
console.warn("Tipos de datos");
console.log("Tipo de nombre:", typeof nombre);              // string
console.log("Tipo de edad:", typeof edad);                  // number
console.log("Tipo de cantidad:", typeof cantidad);          // number
console.log("Tipo de PI:", typeof PI);                      // number
console.log("Tipo de pais:", typeof pais);                  // string
console.log("Tipo de conocimientos:", typeof conocimientos);// object
console.log("Tipo de persona:", typeof persona);            // object
console.log("Tipo de booleano:", typeof booleano);          // boolean
console.log("Tipo de indefinido:", typeof indefinido);      // undefined
console.log("Valor de nulo:", nulo);                        // null
console.log("Valor de resultado", resultado);               // NaN Representar un valor que no es un número válido en una operación matemática

console.log(`Hola soy ${nombre}, tengo ${edad} años y vivo en ${pais}`);

edad = 67;
conocimientos.push("java");

console.log("Ahora tengo " + edad + " años y he aprendido " + conocimientos[3]);

// Diferencia var y let
console.warn("Let y var");

function ejemploVarLet() {
    var mensaje = "Hola desde var";
    let saludo = "Hola desde let";
    if (true) {
        var mensaje = "Var dentro del bloque"; // Esta reasignación afecta el`mensaje` fuera del bloque.
        let saludo = "Let dentro del bloque"; // Esta `let` es independiente y solo existe en este bloque.
        console.log(mensaje); // "Var dentro del bloque".
        console.log(saludo); // "Let dentro del bloque".
    }
    console.log(mensaje); // "Var dentro del bloque" (el valor cambió globalmente dentro de la función).
    console.log(saludo); // "Hola desde let" (no fue afectado por el bloque `if`).
}

ejemploVarLet();

// 3. Métodos de Interés para Números y Cadenas

// números
console.warn("Números");

let numero = 4.5;
console.log("Redondeo hacia el entero más próximo", Math.round(numero)); // 5
numero = 4.4;
console.log("Redondeo hacia el entero más próximo", Math.round(numero)); // 4

numero = -4.1;
console.log("Redondeo hacia arriba", Math.ceil(numero)); // -4

numero = -4.9;
console.log("Redondeo hacia abajo", Math.floor(numero)); // -5

numero = 4.9;
console.log("Redondeo hacia abajo", Math.trunc(numero)); // 4

numero = -5;
console.log("Valor absoluto", Math.abs(numero)); // 5

numero = Math.random();
console.log("Número aleatorio entre 0 y 1", numero.toFixed(2)); // redondeo a dos decimales
console.log("Número aleatorio entre 0 y 10", Math.floor(numero * 10) +1); // redondeo a dos decimales

let cadenaEntera = "10";
let cadenaDecimal = "3.14159";
let cadenaNoValida = "texto";

// Usando parseInt() para convertir a entero
let entero = parseInt(cadenaEntera);
console.log(entero);  // 10

// Usando parseFloat() para convertir a decimal
let decimal = parseFloat(cadenaDecimal);
console.log(decimal);  // 3.14159

// Usando Number() para convertir a número
numero = Number(cadenaEntera);
console.log(numero);  // 10 (como número)

// Intentando parsear una cadena no numérica
let invalido = parseInt(cadenaNoValida);
console.log(invalido);  // NaN


// cadenas
console.warn("Cadenas");

let mensaje = "Hola, mundo!";
console.log("minúscualas", mensaje.toLowerCase);
console.log("MAYÚSCULAS", mensaje.toUpperCase);

numero = 12345;
let texto = String(numero);  // Convierte el número a string
console.log(texto, typeof texto);  // "12345" "string"

booleano = true;
let textoBooleano = String(booleano);  // Convierte el booleano a string
console.log(textoBooleano, typeof textoBooleano);  // "true" "string"

let objeto = { name: "Maria", age: 28 };
let textoObjeto = JSON.stringify(objeto);  // Convierte el objeto a string JSON
console.log(textoObjeto, typeof textoObjeto);  // '{"name":"Maria","age":28}' "string"

let arreglo = [1, 2, 3, 4];
let textoArreglo = arreglo.toString();  // Convierte el array a string
console.log(textoArreglo, typeof textoArreglo);  // "1,2,3,4" (elementos separados por coma) "string"

// Objeto Date
console.warn("Fechas");

let fechaActual = new Date();
console.log(fechaActual); // Muestra la fecha y hora actual
// Fecha específica (año, mes, día, horas, minutos, segundos, milisegundos)
let fechaEspecifica = new Date(2024, 10, 10, 12, 30, 0, 0); // Meses en JavaScript van de 0 (enero) a 11 (diciembre)
console.log(fechaEspecifica); // Muestra: "Sat Nov 04 2023 12:30:00 GMT..."

console.log("Año actual", fechaEspecifica.getFullYear());
console.log("Mes actual", fechaEspecifica.getMonth());
console.log("Día de mes", fechaEspecifica.getDate());
console.log("Día de la semana (0 es domingo)", fechaEspecifica.getDay());

// 4. Arrays
console.warn("Arrays");

let arrayVacio = [];
let frutas = ["manzana", "banana", "cereza"];
let numeros = new Array(1, 2, 3, 4);

frutas.push("naranja"); // ["manzana", "banana", "cereza", "naranja"]
console.log(frutas);

let ultimaFruta = frutas.pop(); // "naranja"
console.log(frutas);
console.log(ultimaFruta);

let primeraFruta = frutas.shift(); // "manzana"
console.log(frutas);
console.log(primeraFruta);

frutas.unshift("fresa"); // ["fresa", "banana", "cereza"]
console.log(frutas);

let indiceCereza = frutas.indexOf("cereza"); // 2
console.log(indiceCereza);

let existeBanana = frutas.includes("banana"); // true
console.log(existeBanana);

let otrasFrutas = ["naranja", "piña"]
let todasLasFrutas = frutas.concat(otrasFrutas);
console.log(frutas);
console.log(otrasFrutas);
console.log(todasLasFrutas);
let subArray = todasLasFrutas.slice(1, 3); // ["banana", "cereza"]
console.log(subArray);

console.log(todasLasFrutas.join(", "));
console.log(todasLasFrutas.reverse());

//recorrido de array
console.warn("Recorrido de array");
for(let i = 0; i < todasLasFrutas.length; i++){
    console.log(`Posición ${i}: ${todasLasFrutas[i]}`);
}

for(let i in todasLasFrutas){
    console.log(`Posición ${i}: ${todasLasFrutas[i]}`);
}

for(let fruta of todasLasFrutas){
    console.log(fruta);
}

/*
foreach: Itera los elementos de array y no devuelve nada.
map: Aplica una función sobre cada elemento del array devolviendolo.
*/
todasLasFrutas.forEach((fruta) => {
    console.log(fruta);
});

todasLasFrutas.forEach((fruta, i) => {
    console.log(`Posición ${i}: ${fruta.toUpperCase()}`);
});

let frutasMayusculas = todasLasFrutas.map((fruta, i) => {
    console.log(`Posición ${i}: ${fruta.toUpperCase()}`);
    return fruta.toUpperCase();
});

console.log(frutasMayusculas);

// 5.Operadores
// 6. Estructuras de Control
console.warn("Estructuras de control");

let valor1 = "0";
let valor2 = 0;

if (valor1 === valor2) {
    console.log("valor1 y valor2 son estrictamente iguales en contenido y tipo");
} else if (valor1 == valor2) {
    console.log("valor1 y valor2 son iguales en valor, pero no en tipo");
} else {
    console.log("Ninguna condición se cumplió");
}

// 7. Funciones
console.warn("Funciones");

function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
console.log(saludar("Martín"));

function saludarAnonimo(nombre = "Anónimo") {
    return `Hola, ${nombre}!`;
}
console.log(saludarAnonimo());

// Función anónima asignada a una variable
const saludarFlecha = (nombre = "Anónimo") => {
    return `Hola, ${nombre}!`;
}

console.log(saludarFlecha("Marcos"));

//rest
const saludarVarios = (...nombres) => {
    nombres.forEach(nombre => {
        console.log(`Hola, ${nombre}!`);
    })
}

saludarVarios("Mateo", "Juan", "María");