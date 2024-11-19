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

//Función que muestra mensaje de error:
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
let patronDni = /^[0-9]{8}[A-Z]$/i;
