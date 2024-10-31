//////// Evento

//////// click
let boton = document.querySelector("#boton");

boton.addEventListener("click", (event) => { 
    alert("Acabas de pulsar en el botón."); 
    console.log(event);
});

let boton2 = document.querySelector("#boton2");

boton2.addEventListener("dblclick", (event) => { 
    alert("Pulsaste dos veces en el botón."); 
    console.log(event);
});

//////// ratón
let cajaTexto = document.querySelector("#cajaTexto");

cajaTexto.addEventListener("mouseover", (event) => { 
    alert("Pasaste por encima."); 
    console.log(event);
});

cajaTexto.addEventListener("mousemove", (event) => { 
    console.log("Me muevo en el textarea."); 
});

cajaTexto.addEventListener("mouseout", (event) => { 
    alert("Saliste del textarea."); 
    console.log(event);
});

//////// teclado
let campoTexto = document.querySelector("#campoTexto");

campoTexto.addEventListener("keydown", (event) => { 
    console.log("Pulsaste la tecla:", event.key); 
});

campoTexto.addEventListener("keyup", (event) => { 
    console.warn("Soltaste la tecla:", event.key); 
});

campoTexto.addEventListener("keypress", (event) => { 
    console.error("Mantienes la tecla:", event.key); 
});

//////// formulario
let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (event) => { 
    event.preventDefault(); 
    //Evitamos el comportamineto por defecto para que no se envie el 
    //formulario automáticamente a la dirección el action.
    
    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#correo").value;
    let genero = document.querySelector("#genero").value;
    alert(nombre);
    alert(correo);
    alert(genero);
});