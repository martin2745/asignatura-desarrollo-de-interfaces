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

const validarPassword = () => {
  ocultarAviso("error-password");
  let password = document.getElementById("password");

  if (!password.value) {
    errores("La contraseña es obligatoria.", "error-password");
    return false;
  } else if (!patronPassword.test(password.value)) {
    errores(
      "La contraseña debe tener entre 8 y 16 caracteres y solo puede contener letras, números y los caracteres ·$%&/().",
      "error-password"
    );
    return false;
  }

  return true;
};

let ocultarElementos = ["error-nombre", "error-password"];

const validar = (event) => {
  event.preventDefault();
  // Ocultar todos los mensajes de error antes de validar
  let esValido = validarNombre() && validarPassword();

  if (!esValido) {
    // Detiene el envío solo si hay errores
    event.preventDefault();
  } else {
    window.location.href = "main.html";
  }
};

document.getElementById("nombre").addEventListener("blur", validarNombre);
document.getElementById("password").addEventListener("blur", validarPassword);
document.getElementById("formulario").addEventListener("submit", validar);
document
  .getElementById("limpiar")
  .addEventListener("click", () =>
    limpiarFormulario("formulario", ocultarElementos)
  );
