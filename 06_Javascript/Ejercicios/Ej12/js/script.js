//////// getElementById()

let caja = document.getElementById("caja");
console.log(caja);
console.log(caja.innerHTML);
console.log(caja.innerText);

caja.innerText = "Cajas de Martín";
caja.innerHTML = "<h1>Cajas de Martín</h1>";

// Modificaciones de estilos
// caja.style.background = "red";
// caja.style.width = "50%";
// caja.style.margin = "0 auto";
// caja.style.textAlign = "center";

caja.classList.add("cajita");
caja.classList.add("noExiste");

console.log(caja.classList);
console.log(caja.classList[1]);

caja.classList.forEach((e) => {
  console.log("Clase:", e);
});

//////// getElementsByClassName()
let articulos = document.getElementsByClassName("articulo");
console.log(articulos);
console.log(articulos[0]);

for (let e of articulos) {
  e.style.border = "5px solid black";
  e.style.margin = "5px";
}

let articulosArray = Array.from(articulos); //Hay que convertir a array el HTMLCollection

articulosArray.forEach((e) => {
  console.log("Artículo por clase:", e);
  e.style.background = "green";

  e.innerHTML += "<a href='#'>enlace</a>";
  let h3 = document.createElement("h3");
  let texto = document.createTextNode("Subtítulo");
  h3.append(texto);
  e.append(h3);
});

//////// getElementsByTagName
let articulosEtiqueta = document.getElementsByClassName("article");
console.log(articulos);
console.log(articulos[0]);

for (let e of articulos) {
  console.log("Artículo por etiqueta:", e);
}

//////// querySelector

let seleccionarPorIdentificador = document.querySelector("#caja");
console.log(seleccionarPorIdentificador);

let seleccionarPorClase = document.querySelector(".articulo");
console.log(seleccionarPorClase);

let seleccionarPorEtiqueta = document.querySelector("article");
console.log(seleccionarPorEtiqueta);

//////// querySelectorAll

let seleccionarPorClaseTodos = document.querySelectorAll(
  "#articulos .articulo"
);
console.log(seleccionarPorClaseTodos);

let seleccionarPorEtiquetaTodos = document.querySelectorAll("article");
console.log(seleccionarPorEtiquetaTodos);

seleccionarPorEtiquetaTodos.forEach((e, indice) => {
  console.log("QuerySelectorAll:", e, "índice:", indice);
});
