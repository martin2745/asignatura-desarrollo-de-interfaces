// 14. Asincronía en JavaScript
// 15. Promesas y Peticiones fetch y AJAX

/*
JavaScript funciona por defecto de forma síncrona, es decir, se ejecutan las instrucciones
una despues de otra y en caso de que algo produzca un error es bloqueante por lo que no se 
continua con la ejecución del código.

JavaScript tambien permite un funcionamiento asincrónico, es decir, si tenemos una función
como setTimeout que ejecuta otra función una vez concluido un tiempo determinado, JS lee la
función pero no detiene la ejecución del resto del código.
*/

console.log("Hola");
console.log("¿Qué tal todo?");
// console.log(noExiste);
setTimeout(() => console.log("Asincronía"), 1000);
// setTimeout(() => console.log(ewfrgtyh), 1000);
setInterval(() => console.log("Ejecuta cada 2 segundos"), 2000);
console.log("Adios");

// Promesas

/*
Una promesa representa un evento a futuro como una consulta a una base de datos, no sabemos
cuanto va a tardar la respuesta desde el servicio. Un ejemplo típico para visualizarlo es un
ecommerce donde sabemos la estructura de los datos que vamos a obtener pero no sabemos cuando
tendremos la respuesta (pudiendo ser esta positiva (los datos) o negativa (un 404 por ejemplo)).
*/

const insertarPeliculas = (listado) => {
  let lista = document.querySelector("#listaPelis");
  listado.forEach((e) => {
    lista.innerHTML += `<li>La película ${e.titulo} fue estrenada en el año ${e.anho}</li>`;
  });
};

const errorRespuesta = (res) => {
  let lista = document.querySelector("#listaPelis");
  lista.innerHTML += res;
}

const eventoFuturo = (res) => {
  // Acción que a futuro devolverá una respuesta aceptada o rechazada
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      let respuestaBD = [
        {
          titulo: "terminator",
          anho: 1984,
        },
        {
          titulo: "armageddon ",
          anho: 1998,
        },
      ];

      res === true ? resolve(respuestaBD) : reject("Error en la respuesta");
    }, 2000);
  });
};

console.log(eventoFuturo(true));

/*
Promise { <state>: "pending" } 
Se ejecuta de forma síncrona sin esperar la devolución de la promesa por lo que el estado es
pendiente.
*/

eventoFuturo(true)
  .then((res) => {
    console.log("Respuesta", res);
    insertarPeliculas(res);
  })
  .catch((res) => {
    console.log("Respuesta", res);
    errorRespuesta(res);
  })
  .finally(() => {
    console.log("Finalizó el proceso");
  }); 
  
/*
Se ejecuta la promesa de forma asíncrona esperando la respuesta.
*/