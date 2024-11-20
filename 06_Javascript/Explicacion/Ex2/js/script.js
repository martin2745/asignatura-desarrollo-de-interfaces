// 8. DOM
//////// getElementById()

let caja = document.getElementById("caja");
console.log(caja);
console.log(caja.innerHTML); //Contenido HTML:  <h1>Cajitas</h1>
console.log(caja.innerText); //contenido de texto:  Cajitas

caja.innerText = "Cajas de Martín";
caja.innerHTML = `
    <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
    </ul>
`;

// Modificaciones de estilos
// caja.style.background = "red";
// caja.style.width = "50%";
// caja.style.margin = "0 auto";
// caja.style.textAlign = "center";

caja.classList.add("cajita");
caja.classList.add("noExiste");

console.log(caja.classList);
console.log(Array.from(caja.classList));
console.log(caja.classList[1]);

caja.classList.forEach((e) => {
  console.log("Clase:", e);
});

//////// getElementsByClassName()
let articulos = document.getElementsByClassName("articulo");
console.log(articulos);
console.log(Array.from(articulos));
console.log(articulos[0]);

for (let e of articulos) {
  e.style.border = "5px solid black";
  e.style.margin = "5px";
}

let articulosArray = Array.from(articulos); //Hay que convertir a array el HTMLCollection

// foreach es un iterador para arrays por lo que tengo que convertirlo a array para iterarlo
articulosArray.forEach((e) => {
  console.log("Artículo por clase:", e);
  e.style.background = "green";

  e.innerHTML += "<a href='#'>enlace</a>"; //Añado más contenido HTML

  let h3 = document.createElement("h3");

  /*
  La función document.createElement("h3") crea un nuevo elemento <h3> vacío,
  pero aún no se ha insertado en el DOM. Solo se ha creado en la memoria para
  poder manipularlo.
  */

  let texto = document.createTextNode("Subtítulo");

  /*
  La función document.createTextNode("Subtítulo") crea un nodo de texto que
  contiene la palabra "Subtítulo". Este nodo no tiene una etiqueta como <h3>,
  <p>, etc., ya que es solo un texto plano.
  */

  h3.append(texto);
  e.append(h3);
});

//////// getElementsByTagName
let articulosEtiqueta = document.getElementsByTagName("article");
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
console.log(Array.from(seleccionarPorClaseTodos));

let seleccionarPorEtiquetaTodos = document.querySelectorAll("article");
console.log(seleccionarPorEtiquetaTodos);

seleccionarPorEtiquetaTodos.forEach((e, indice) => {
  let identificador = "idArticulo_".concat(indice);
  e.setAttribute("id", identificador);
  console.log("QuerySelectorAll:", e, "índice:", indice);
});

// 9. BOM

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
if (!navigator.onLine) {
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
