//----------------------------Bucles----------------------------------

// Ejemplo de bucle for
for (let i = 0; i < 5; i++) {
    console.log("Iteración número: " + i);
}

// Ejemplo de bucle while
let k = 0;
while (k < 5) {
    console.log("Iteración número: " + k);
    k++;
}

// Ejemplo de bucle do...while
let j = 0;
do {
    console.log("Iteración número: " + j);
    j++;
} while (j < 5);

// Ejemplo de bucle for...of para iterar sobre un elemento como array o string
const array = ["manzana", "banana", "cereza"];
for (const fruta of array) {
    console.log(fruta);
}

for (const letra of array[0]) {
    console.log(letra);
}

// Ejemplo de bucle for...in para operar sobre un objeto
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

//----------------------------Funciones-------------------------------

// Declaración de función
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar("Carlos"));

// Expresión de función
const despedir = function(nombre) {
    return `Adiós, ${nombre}!`;
};

console.log(despedir("Carlos"));

// Función flecha
const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 4));

const cuadradoA = a => a * a;
console.log(cuadradoA(2));

const cuadradoB = a => a * a;
console.log(cuadradoB(2));

const numero = () => 2 + 1;
console.log(numero());

// Función con múltiples parámetros
let resultado = 0;

const sumaTodos = (...numeros) => {
    numeros.forEach(numero => {
        resultado += numero;
    });
    console.log(resultado);
}

sumaTodos(1,2,3,4,5);
