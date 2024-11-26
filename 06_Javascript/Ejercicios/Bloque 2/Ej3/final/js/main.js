let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


let elementosEnCarrito = Number(localStorage.getItem("numero-carrito")) || 0;
let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];
let contenedorProductos = document.querySelector("#contenedor-productos");
let botonesCategorias = document.querySelectorAll(".boton-categoria");
let tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll("#producto-agregar");
let numerito = document.querySelector("#numerito");

const cargarProductos = (productosElegidos) => {
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML =`<img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="producto-detalles">
                            <h3 class="producto-titulo">${producto.titulo}</h3>
                            <p class="producto-precio">$${producto.precio}</p>
                            <button class="producto-agregar" id="${producto.id}" onclick="agregarAlCarrito('${producto.id}')">Agregar</button>
                       </div>`;
        
        contenedorProductos.append(div);
    });
};

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", event => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        event.currentTarget.classList.add("active");

        if(event.currentTarget.id != "todos"){
            tituloPrincipal.innerText = boton.innerText;
            let productoBoton = productos.filter(producto => producto.categoria.id === event.currentTarget.id);
            cargarProductos(productoBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

const agregarAlCarrito = id => {
    let productoAgregado = "";
    if(productosEnCarrito.length !== 0 && productosEnCarrito.some(producto => producto.id === id)){
        productoAgregado = productosEnCarrito.find(producto => producto.id === id);
    }else{
        productoAgregado = productos.find(producto => producto.id === id);
    }

    if(productosEnCarrito.some(producto => producto.id === id)){
        productoAgregado.cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

const actualizarNumerito = () => {
    elementosEnCarrito++;
    numerito.innerText = elementosEnCarrito;
    localStorage.setItem("numero-carrito", elementosEnCarrito);
}

const cargarNumerito = () => {
    numerito.innerText = elementosEnCarrito;
}

cargarNumerito();