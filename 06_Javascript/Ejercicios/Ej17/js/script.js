const url_usuarios = "https://jsonplaceholder.typicode.com/users";
const url_pokemon = "https://pokeapi.co/api/v2/pokemon";
const url_productos = "./js/productos.json";

const buscar = (url, id_listado) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
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
buscar_pokemon(url_pokemon, "#lista_pokemon");
buscar(url_productos, "#lista_productos");
