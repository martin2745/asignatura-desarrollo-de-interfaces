const validarNombre = () => {
  ocultarAviso("error-nombre");
  let nombre = document.getElementById("nombre");

  if (!nombre.value) {
    errores("Nombre obligatorio.", "error-nombre");
    return false;
  } else if (!patronNombre.test(nombre.value)) {
    errores("Nombre inválido.", "error-nombre");
    return false;
  } else if (nombre.value.length > 20) {
    errores("El nombre no puede tener más de 20 caracteres.", "error-nombre");
    return false;
  }

  return true;
};

const validarDni = () => {
  ocultarAviso("error-dni");
  let dni = document.getElementById("dni");

  if (!dni.value) {
    errores("DNI obligatorio.", "error-dni");
    return false;
  } else if (!patronDni.test(dni.value)) {
    errores("DNI inválido. Formato incorrecto.", "error-dni");
    return false;
  } else if (!validarLetraDni(dni.value)) {
    errores("DNI inválido. La letra no coincide.", "error-dni");
    return false;
  }

  return true;
};

const validarLetraDni = (dni) => {
  let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  let numero = dni.substring(0, 8);
  let letra = dni.substring(8).toUpperCase();
  let resto = numero % 23;

  return letra === letras.charAt(resto);
};

let ocultarElementos = ["error-nombre", "error-dni"];

const validar = (event) => {
  event.preventDefault();
  // Ocultar todos los mensajes de error antes de validar
  let esValido = validarNombre() && validarDni();

  if (!esValido) {
    // Detiene el envío solo si hay errores
    event.preventDefault();
  } else {
    window.location.href = "main.html";
  }
};

document.getElementById("nombre").addEventListener("blur", validarNombre);
document.getElementById("dni").addEventListener("blur", validarDni);
document.getElementById("formulario").addEventListener("submit", validar);
document
  .getElementById("limpiar")
  .addEventListener("click", () =>
    limpiarFormulario("formulario", ocultarElementos)
  );
