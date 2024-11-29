// Función para limpiar el contenido del formulario
const limpiarFormulario = (formulario, elementos) => {
  ocultarAvisos(elementos);
  document.getElementById(formulario).reset();
};

// Función que oculta el div de errores
const ocultarAvisos = (elementos) => {
  elementos.forEach((e) => {
    document.getElementById(e).style.display = "none";
  });
};

// Función que oculta el div de errores e intentos
const ocultarAviso = (id) => {
  document.getElementById(id).style.display = "none";
};

// Función que muestra el div de errores e intentos
const mostrarAviso = (id) => {
  document.getElementById(id).style.display = "block";
};

// Función que muestra mensaje de error:
const errores = (mensaje, id) => {
  const errors = document.getElementById(id);
  if (errors) {
    errors.innerHTML = mensaje;
    mostrarAviso(id);
  } else {
    return false;
  }
};

// Patrones
let patronNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const patronPassword = /^[a-zA-Z0-9·.$%&/()]{8,16}$/;

// Función de cargar número de elementos en carrito
const cargarNumerito = () => {
  numerito.innerText = elementosEnCarrito;
}

// Función para desconectarse de la web
const logoElements = document.querySelectorAll(".logo");

logoElements.forEach((logoElement) => {
    logoElement.addEventListener("click", () => {
        localStorage.setItem("numero-carrito", 0);
        localStorage.removeItem("productos-en-carrito");
        window.location.href = "index.html";
    });
});
