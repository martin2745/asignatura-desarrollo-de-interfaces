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
  let identificador = "idArticulo_".concat(indice);
  e.setAttribute("id", identificador);
  console.log("QuerySelectorAll:", e, "índice:", indice);
});

//////// BOM

alert("¡Hola a todos!");
let respuesta = prompt("¿Cómo estás?");
let confirmacion = confirm("¿Te fue bien el día?");

console.log(window);
console.log("Ancho de la ventana", window.innerWidth);
console.log("Alto de la venta", window.innerHeight);
console.log("Sabemos si la ventana está abierta o cerrada", window.closed);
console.log("DOM", window.document);
console.log("Sabemos el navegador", window.navigator.userAgent);

console.log("Objeto navigator", navigator);
console.log("Conexión a internet", navigator.onLine);
if(!navigator.onLine){
  alert("No tienes conexión a Internet");
}

console.log("Objeto location", location);
console.log("Dirección del navegador", location.href);
// console.log("Recargar la página", location.reload());

console.log("Objeto history", window.history);
console.log("Página anterior en el historial");
//window.history.back();
console.log("Página siguiente en el historial");
//window.history.forward()