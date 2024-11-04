// local

let crear_local = () => {
  localStorage.setItem("usuario", "Ramón Pérez");
}

let mostrar_local = () => {
  console.log("local", localStorage.getItem("usuario"));
}

let modificar_local = () => {
  localStorage.setItem("usuario", "Ramón Pérez González");
}

let eliminar_local = () => {
  localStorage.removeItem("usuario");
}

document.getElementById("crear_local").addEventListener("click", crear_local);
document.getElementById("mostrar_local").addEventListener("click", mostrar_local);
document.getElementById("modificar_local").addEventListener("click", modificar_local);
document.getElementById("eliminar_local").addEventListener("click", eliminar_local);

// sesion

let crear_sesion = () => {
  sessionStorage.setItem("usuario", "Martín Gil");
}

let mostrar_sesion = () => {
  console.log("sesion", sessionStorage.getItem("usuario"));
}

let modificar_sesion = () => {
  sessionStorage.setItem("usuario", "Martín Gil Blanco");
}

let eliminar_sesion = () => {
  sessionStorage.removeItem("usuario");
}

document.getElementById("crear_sesion").addEventListener("click", crear_sesion);
document.getElementById("mostrar_sesion").addEventListener("click", mostrar_sesion);
document.getElementById("modificar_sesion").addEventListener("click", modificar_sesion);
document.getElementById("eliminar_sesion").addEventListener("click", eliminar_sesion);