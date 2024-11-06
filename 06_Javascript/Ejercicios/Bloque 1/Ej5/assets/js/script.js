let tablaContenedor = document.querySelector(".tabla");

let resultado = 0;

for(let i = 1; i <= 10; i++){
    tablaContenedor.innerHTML +=
    `<div class="tabla_contenedor">
        <h2>Tabla del ${i}</h2>
        <ul class="tabla_lista" id=${i}>
        </ul>
     </div>
     `;

     let n = 0;
     while(n <= 10){
        let multiplicacion = document.getElementById(i);
        resultado = i * n;
        multiplicacion.innerHTML += 
        `<li class="tabla_item">El valor de ${i} * ${n} es: ${resultado}</li>
        `;
        n++;
     }
}