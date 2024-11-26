const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];
let elementosEnCarrito = Number(localStorage.getItem("numero-carrito")) || 0;
let numerito = document.querySelector("#numerito");

const calcularTotal = () => {
    return productosEnCarrito.reduce((total, producto) => {
        return total + producto.precio * producto.cantidad;
    }, 0);
}

const comprarProductoPorId = (id) => {
    if(confirm("¿Quieres comprar el producto?")){
        let productoEliminar = productosEnCarrito.find(producto => producto.id === id);
        productosEnCarrito = productosEnCarrito.filter(producto => producto.id !== id);
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        document.getElementById(id).style.display = "none";
        localStorage.setItem("numero-carrito", elementosEnCarrito - productoEliminar.cantidad);
        elementosEnCarrito = Number(localStorage.getItem("numero-carrito")) || 0;
        cargarNumerito();
        document.querySelector("#Total").innerHTML = "";
        document.querySelector("#Total").innerHTML = calcularTotal();
        calcularTotal();
    }
};

const eliminarProductoPorId = (id) => {
    if(confirm("¿Quieres eliminar el producto?")){
        let productoEliminar = productosEnCarrito.find(producto => producto.id === id);
        productosEnCarrito = productosEnCarrito.filter(producto => producto.id !== id);
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        document.getElementById(id).style.display = "none";
        localStorage.setItem("numero-carrito", elementosEnCarrito - productoEliminar.cantidad);
        elementosEnCarrito = Number(localStorage.getItem("numero-carrito")) || 0;
        cargarNumerito();
        document.querySelector("#Total").innerHTML = "";
        document.querySelector("#Total").innerHTML = calcularTotal();
        calcularTotal();
    }
};

const comprarCarrito = () => {
    if(confirm(`¿Estás seguro que quieres comprar todos los productos por un total de $${calcularTotal()}?`)){
        localStorage.setItem("numero-carrito", 0);
        localStorage.removeItem("productos-en-carrito");
        productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];
        elementosEnCarrito = Number(localStorage.getItem("numero-carrito")) || 0;
        document.querySelector(".carrito-productos").style.display = "none";
        document.querySelector(".carrito-acciones").style.display = "none";
        cargarProductos();
        cargarNumerito();
    }
}

const vaciarCarrito = () => {
    if(confirm(`¿Estás seguro que quieres eliminar todos los productos del carrito?`)){
        localStorage.setItem("numero-carrito", 0);
        localStorage.removeItem("productos-en-carrito");
        productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];
        elementosEnCarrito = Number(localStorage.getItem("numero-carrito")) || 0;
        document.querySelector(".carrito-productos").style.display = "none";
        document.querySelector(".carrito-acciones").style.display = "none";
        cargarProductos();
        cargarNumerito();
    }
}

const cargarProductos = () => {
    if(productosEnCarrito.length != 0){

        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {
            
            let div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.id = producto.id;
            div.innerHTML = `
                    <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="carrito-producto-titulo">
                        <small>Título</small>
                        <h3>${producto.titulo}</h3>
                    </div>
                    <div class="carrito-producto-cantidad">
                        <small>Cantidad</small>
                        <p>${producto.cantidad}</p>
                    </div>
                    <div class="carrito-producto-precio">
                        <small>Precio</small>
                        <p>$${producto.precio}</p>
                    </div>
                    <div class="carrito-producto-subtotal">
                        <small>Subtotal</small>
                        <p>$${producto.precio * producto.cantidad}</p>
                    </div>
                    <button id="comprar-${producto.id}" class="carrito-producto-comprar">Comprar</button>
                    <button id="eliminar-${producto.id}" class="carrito-producto-eliminar">Eliminar</button>
                `;
    
                contenedorCarritoProductos.append(div);
                document.getElementById(`comprar-${producto.id}`).addEventListener("click", () => comprarProductoPorId(producto.id));
                document.getElementById(`eliminar-${producto.id}`).addEventListener("click", () => eliminarProductoPorId(producto.id));
        });
    
        let div = document.createElement("div");
        div.classList.add("carrito-acciones");
        div.innerHTML = `
                <div class="carrito-acciones-izquierda">
                    <button class="carrito-acciones-vaciar">Vaciar carrito</button>
                </div>
    
                <div class="carrito-acciones-derecha">
                    <div class="carrito-acciones-total">
                        <p>Total:</p>
                        <p id="Total">$${calcularTotal()}</p>
                    </div>
                    <button class="carrito-acciones-comprar">Comprar ahora</button>
                </div>
        `;
    
        contenedorCarritoProductos.append(div);
        document.querySelector(".carrito-acciones-comprar").addEventListener("click", comprarCarrito);
        document.querySelector(".carrito-acciones-vaciar").addEventListener("click", vaciarCarrito);
    
    
    }else{
        document.querySelector("#carrito-vacio").style.display = "block";
    }
}

cargarProductos();
cargarNumerito();