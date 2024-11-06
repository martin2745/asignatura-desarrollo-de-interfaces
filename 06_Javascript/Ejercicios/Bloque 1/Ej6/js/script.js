// Función flecha para obtener el año actual
const obtenerAnoActual = () => new Date().getFullYear();

// Función flecha para solicitar el año de nacimiento
const solicitarAnoNacimiento = () => {
    const anoActual = obtenerAnoActual();
    let anoNacimiento = parseInt(prompt("Introduce tu año de nacimiento:"));

    // Validar que el año esté en el rango correcto
    while (isNaN(anoNacimiento) || anoNacimiento < 1900 || anoNacimiento > anoActual) {
        alert("Por favor, introduce un año válido entre 1900 y " + anoActual + ".");
        anoNacimiento = parseInt(prompt("Introduce tu año de nacimiento:"));
    }

    // Mostrar el año de nacimiento en el HTML
    document.body.innerHTML += `<p>Tienes ${anoActual - anoNacimiento} años</p>`;
};

// Llamar a la función para solicitar el año de nacimiento
solicitarAnoNacimiento();
