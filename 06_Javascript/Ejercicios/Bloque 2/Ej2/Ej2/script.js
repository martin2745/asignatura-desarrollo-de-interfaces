document.getElementById('agregarBtn').addEventListener('click', function () {
    const tareaInput = document.getElementById('tareaInput');
    const tareaTexto = tareaInput.value.trim();

    if (tareaTexto) {
        const lista = document.getElementById('listaTareas');
        const li = document.createElement('li');
        li.textContent = tareaTexto;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', function () {
            lista.removeChild(li);
        });

        li.appendChild(botonEliminar);
        lista.appendChild(li);

        tareaInput.value = ''; // Limpiar el campo de texto
    }
});
