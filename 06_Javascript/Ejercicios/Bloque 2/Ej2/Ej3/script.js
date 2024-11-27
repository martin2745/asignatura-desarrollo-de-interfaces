document.addEventListener('DOMContentLoaded', function () {
    const saludo = document.getElementById('saludo');
    const nombreGuardado = localStorage.getItem('nombre');

    if (nombreGuardado) {
        saludo.textContent = `¡Hola, ${nombreGuardado}!`;
    }

    document.getElementById('guardarNombreBtn').addEventListener('click', function () {
        const nombreInput = document.getElementById('nombreInput').value.trim();
        if (nombreInput) {
            localStorage.setItem('nombre', nombreInput);
            saludo.textContent = `¡Hola, ${nombreInput}!`;
        }
    });
});
