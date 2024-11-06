// 14. Asincronía en JavaScript
// 15. Promesas y Peticiones fetch y AJAX

// Promesas

/*const eventoFuturo = (res) => {
  return new Promise((resolve, reject) => {
    if (res === true) {
      resolve("Promesa resuelta");
    } else {
      reject("Promesa rechazada");
    }
  });
};*/

const insertarPeliculas = (listado) => {
  let lista = document.querySelector("#listaPelis");
  listado.forEach((e) => {
    lista.innerHTML += `<li>La película ${e.titulo} fue estrenada en el año ${e.anho}</li>`;
  });
};

const eventoFuturo = (res) => {
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

let valor = true;

console.log(eventoFuturo(valor));

eventoFuturo(valor)
  .then((res) => {
    insertarPeliculas(res);
  })
  .catch((res) => {
    console.log(res);
  })
  .finally(() => {
    console.log("Finalizó el proceso");
  });
