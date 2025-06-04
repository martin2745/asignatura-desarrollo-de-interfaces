# Transformaciones, Transiciones y Animaciones con CSS3

### Estructura General

**Objetivo:**  
Practicar y comprender el uso de transformaciones, transiciones y animaciones en CSS3 para crear efectos visuales dinámicos e interactivos. La tarea se divide en tres partes, cada una centrada en una de estas características de CSS3.

---

### Parte 1: Transformaciones

1. **Estructura HTML:**
   - Crea un archivo HTML básico con un contenedor (`.container`) que incluya cuatro imágenes.
   - Las imágenes deben estar correctamente referenciadas y posicionadas dentro del contenedor.

2. **Estilos CSS:**
   - Define el contenedor como un flexbox para distribuir las imágenes uniformemente.
   - Aplica un borde sólido negro de 5px a todas las imágenes.
   - Establece un ancho del 15% para cada imagen.

3. **Transformaciones:**
   - Aplica diferentes transformaciones a cada imagen:
     - **Rotación:** Rota cada imagen en distintos ángulos (por ejemplo, 45°, 15°, -15°, -45°).
     - **Traslación:** Desplaza las imágenes en diferentes direcciones usando `translateX`, `translateY` o `translate`.
     - **Escalado:** Escala las imágenes en diferentes proporciones con `scale`, `scaleX` o `scaleY`.
     - **Sesgado:** Aplica un efecto de sesgado (`skew`) a las imágenes.
     - **Transformaciones combinadas:** Combina varias transformaciones en una sola imagen (por ejemplo, rotación, escalado y traslación).
     - **Cambio de origen de transformación:** Modifica la propiedad `transform-origin` para observar cómo afecta al resultado.

---

### Parte 2: Transiciones

1. **Estructura HTML:**
   - Crea un archivo HTML básico con un título (``) y un contenedor (`.container`).

2. **Estilos CSS:**
   - Define un estilo básico para el título, incluyendo color, fondo y alineación.
   - Define un estilo básico para el contenedor, incluyendo color de fondo, tamaño y forma.

3. **Transiciones:**
   - Aplica una transición al título que cambie el color del texto y el fondo al pasar el ratón por encima.
   - Aplica una transición al contenedor que cambie el color de fondo y la forma (por ejemplo, de cuadrado a círculo) al pasar el ratón por encima.
   - Utiliza diferentes propiedades de transición (`transition-duration`, `transition-timing-function`, `transition-property`) para controlar el efecto.

---

### Parte 3: Animaciones

1. **Estructura HTML:**
   - Crea un archivo HTML básico con un contenedor (`.container`) que incluya un círculo (`#pulse`) y un cuadrado (`#movingSquare`).

2. **Estilos CSS:**
   - Define un estilo básico para el círculo, incluyendo tamaño, color de fondo y forma.
   - Define un estilo básico para el cuadrado, incluyendo tamaño, color de fondo y posición.

3. **Animaciones:**
   - Crea una animación para el círculo que cambie su tamaño, color de fondo y posición al pasar el ratón por encima.
   - Crea una animación para el cuadrado que lo haga moverse por la pantalla en diferentes direcciones.
   - Usa `@keyframes` para definir las animaciones y aplícalas a los elementos correspondientes.

---

### Indicaciones adicionales

- **Transformaciones:** Experimenta con diferentes valores de `rotate`, `translate`, `scale`, `skew` y `transform-origin` para ver cómo afectan a los elementos.
- **Transiciones:** Usa diferentes funciones de temporización (`ease-in`, `ease-out`, `linear`, etc.) para observar cómo influyen en el efecto de transición.
- **Animaciones:** Usa `@keyframes` para definir animaciones y experimenta con distintas propiedades (`width`, `height`, `background-color`, `margin`, `top`, `left`).
- Prueba las diferentes transformaciones y transiciones, comentando en la hoja de estilos las que ya hayas probado. Entrega todas las pruebas, de modo que se puedan descomentar para verificar su funcionamiento.