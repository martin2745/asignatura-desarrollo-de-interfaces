document.addEventListener('DOMContentLoaded', function () {
    let contador = sessionStorage.getItem('visitas') || 0;
    contador = parseInt(contador) + 1;
    sessionStorage.setItem('visitas', contador);
    document.getElementById('contador').textContent = contador;
});
