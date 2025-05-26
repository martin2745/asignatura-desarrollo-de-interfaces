# Transiciones y Animaciones en CSS

### Estructura General

1. **Archivos y organización**:

   - El proyecto se compone de un archivo principal `index.html` y dos páginas temáticas: `transiciones.html` y `animaciones.html`.
   - Los estilos generales se encuentran en `css/styles.css`, mientras que los estilos específicos de cada sección están en `css/transiciones.css` y `css/animaciones.css`.

---

### Página de Inicio

1. **Navegación**:

   - La página principal (`index.html`) presenta un título y un menú de navegación con enlaces a las secciones de **Transiciones** y **Animaciones**.
   - El menú utiliza una lista desordenada (`ul`) con enlaces (`a`) a cada sección.

---

### Transiciones

1. **Botón con transición**:

   - En la página `transiciones.html` se muestra un botón de enlace con el id `#boton`.
   - El botón tiene un fondo verde, texto blanco, borde negro y un tamaño fijo.
   - Se le aplican transiciones CSS para suavizar los cambios de color de fondo y borde al pasar el ratón sobre él.
   - Al hacer hover, el botón cambia su color de fondo a **orangered**, su borde a **rojo** y sus esquinas se redondean.
   - La transición del borde dura **300ms** y la del color de fondo **1s**.

2. **Personalización sugerida**:

   - Se pueden añadir o modificar transiciones para otras propiedades, como el color del texto (`color`), ajustando los tiempos para experimentar diferentes efectos visuales.

---

### Animaciones

1. **Caja animada**:

   - En la página `animaciones.html` hay un contenedor con una caja (`#caja`) que muestra el texto "Soy una caja".
   - La caja tiene un tamaño fijo, fondo **lightseagreen**, texto blanco y borde negro.
   - Se le aplica una animación definida mediante la regla `@keyframes desplazamiento2`.
   - Durante la animación:
     - La caja se desplaza horizontalmente (de 0px a 1200px y vuelve a 0px).
     - Rota 360 grados y se convierte en un círculo en el punto intermedio.
     - Cambia su color de fondo a **rojo** en el 75% del ciclo.
   - La animación dura **10 segundos**, se repite **infinitamente** y utiliza una función de tiempo **linear**.

2. **Personalización sugerida**:

   - Se pueden modificar los valores de la animación para:
     - Cambiar la distancia del desplazamiento.
     - Alterar el color de fondo en diferentes puntos.
     - Ajustar la duración, el número de repeticiones o la función de tiempo (`ease`, `ease-in-out`, etc.).

---

### Estilos Generales

1. **Reset de estilos**:

   - Se utiliza un selector universal (`*`) para eliminar márgenes, rellenos y subrayados predeterminados en todos los elementos.

---

### Ejercicios Propuestos

1. **Transiciones**:

   - Modifica la transición del botón para que el color de texto (`color`) también cambie suavemente a amarillo en 1.5 segundos al hacer hover.
   - Cambia el tiempo de transición del color de fondo a 2 segundos y el del borde a 1 segundo.
   - Experimenta añadiendo otras propiedades (como `transform` para escalar el botón al hacer hover).

2. **Animaciones**:

   - Reduce la distancia de desplazamiento de la caja a 600px.
   - Haz que el color de fondo cambie a **azul** en el 75% del ciclo.
   - Cambia la duración de la animación a 5 segundos.
   - Haz que la animación se repita solo 3 veces.
   - Cambia la función de tiempo a `ease-in-out` y observa la diferencia en el movimiento.