document.getElementById('miBoton').addEventListener('click', function () {
    alert('¡Has hecho clic en el botón!');
    this.style.backgroundColor = 'red';
    this.disabled = true;
});
