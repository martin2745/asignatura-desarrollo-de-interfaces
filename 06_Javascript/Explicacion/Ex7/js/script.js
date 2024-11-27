// 14. Asincronía en JavaScript
// 15. Promesas y Peticiones fetch y AJAX

/*
fetch es una función nativa de JavaScript que se utiliza para realizar solicitudes HTTP
desde el navegador. Es una API moderna y más sencilla que el objeto XMLHttpRequest y
permite trabajar con solicitudes y respuestas de recursos a través de promesas.
*/

const url_usuarios = "https://jsonplaceholder.typicode.com/users";
const url_productos = "./js/productos.json";
const url_pokemon = "https://pokeapi.co/api/v2/pokemon";

const buscar = (url, id_listado) => {
  fetch(url)
    .then((res) => {
      console.log("Respuesta en crudo", res); // Objeto response
      return res.json();
    })
    .then((data) => {
      console.log("Respuesta en JSON", data);
      let listado = document.querySelector(id_listado);
      data.forEach((usuario) => {
        const li = document.createElement("li");
        li.textContent = usuario.name;
        listado.append(li);
      });
    });
};

const buscar_pokemon = (url, id_listado) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let listado = document.querySelector(id_listado);
      data.results.forEach((pokemon) => {
        const li = document.createElement("li");
        li.textContent = pokemon.name;
        listado.append(li);
      });
    });
};

buscar(url_usuarios, "#lista_usuarios");
buscar(url_productos, "#lista_productos");
buscar_pokemon(url_pokemon, "#lista_pokemon");
