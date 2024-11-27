// 12. Objetos en JavaScript y JSON

// Objetos literales
// Es una estructura de datos que agrupa propiedades y métodos bajo un
// mismo nombre.

let pelicula = {
  titulo: "terminator",
  anho: 1984,
  genero: "ciencia ficción",
  protagonista: "Arnold Schwarzenegger",
  elenco: ["Arnold", "Linda Hamilton", "Resto"],
  descripcion: function(){
    return `${this.titulo} es una peli de ${this.genero}, protagonizada por ${this.protagonista} y lanzada en el año ${this.anho}`;
  },
  descripcionDos: () => {
    return `${pelicula.titulo} es una peli de ${pelicula.genero}, protagonizada por ${pelicula.protagonista} y lanzada en el año ${pelicula.anho}`;
  },
  mostrarElenco: () => {
    console.log("Elenco de actores");
    pelicula.elenco.forEach(nombre => {
      console.log("Nombre del actor:", nombre);
    })
  },
  detalles: {
    duracion: "120 minutos",
    pegi: 18
  }
};

console.log(pelicula);
console.log(pelicula.protagonista);
console.log(pelicula["genero"]);
pelicula.director = "Martín Gil";
console.log(pelicula.director);
pelicula.secuela = "Terminator 2: El juicio final";
console.log(pelicula.secuela);
console.log(pelicula.detalles);
console.log(pelicula.detalles.duracion);
delete pelicula.detalles;
console.log(pelicula.detalles);


console.log(pelicula.descripcion()); //Con this accedo al propio objeto en el que estoy
console.log(pelicula.descripcionDos());
pelicula.mostrarElenco()

console.log(pelicula);

// Objeto JSON
// JSON = Javascript object notation
// JSON no permiten funciones a diferencia de los objetos y solo permiten tipos primitivos de datos: números, string, booleanos...

let palaPadel = {
  nombre: "Metalbone",
  marca: "Adidas",
  anho: 2022,
  peso: 350,
  forma: "Diamante",
  dureza: "Media"
};

console.log(palaPadel);
let palaDePadelJSON = JSON.stringify(palaPadel); //Conversión de objeto JavaScript a JSON String para la comunicación con otro servicio y envío de datos
console.log(palaDePadelJSON);
let objetoConvertido = JSON.parse(palaDePadelJSON); //Conversión de objeto JSON String a JavaScript para usarlo como un objeto literal de JS

let caja = document.querySelector("#datos");
console.log("recorrido de JSON u objeto");
for(let clave in palaPadel){
  console.log(clave, ":", palaPadel[clave]);
  caja.innerHTML += `<p>${clave}: ${palaPadel[clave]}</p>`;
}

// Usando Object.entries para obtener claves y valores
Object.entries(palaPadel).forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});

// Usando Object.values para obtener valores
Object.values(palaPadel).forEach((valor) => {
  console.log(valor);
});

// Usando Object.keys para obtener claves
Object.keys(palaPadel).forEach((clave) => {
  console.log(clave);
  console.log(palaPadel[clave]);
});
