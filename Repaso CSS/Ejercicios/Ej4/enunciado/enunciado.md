# Práctica responsividad web

### Instrucciones:

1. **Estructura Base:**

   - El contenedor principal `#container` debe tener un ancho del 70% del ancho de la pantalla.
   - Establece márgenes superiores e inferiores de 40px para separar el contenido del borde de la pantalla.
   - La cabecera (`header`) debe tener un ancho del 100%, una altura de 150px, y debe estar centrada con un fondo de color **lightblue** y texto oscuro.

2. **Distribución del Contenido:**

   - El contenido está dividido en dos secciones principales dentro del `#content`:
     - Una barra lateral (`aside`), que ocupa el 25% del ancho de la pantalla.
     - La sección de artículos (`#articles`), que ocupa el 75% del ancho.
   - Los artículos dentro de la sección `#articles` se deben alinear en cuadrícula (grid), ocupando un ancho del 25% y deben tener una altura de 150px, con un margen de 15px entre ellos.
   - Asigna a los artículos un color de fondo **verde** con texto blanco y un borde blanco con bordes redondeados de 10px.

3. **Diseño Responsivo:**

   - Debes hacer que la página se vea bien en distintos tamaños de pantalla usando **media queries**.

4. **Requisitos de Adaptación:**

   - **Pantallas medianas (entre 633px y 888px):**
     - Los artículos deben ocupar el 40% del ancho de la pantalla.
     - Cambia el fondo de los artículos a **rojo** en estas resoluciones.
   - **Pantallas pequeñas (menos de 632px):**
     - Los artículos deben ocupar el 90% del ancho de la pantalla.
     - Cambia el fondo de los artículos a **azul** en estas resoluciones.
     - La barra lateral debe adaptarse de manera que:
       - Ocupe el 91% del ancho.
       - Elimina el flotado y centra el contenido con un **padding** de 19px.
       - Cambia el color de fondo de la barra lateral a **naranja**.
     - La sección de artículos (`#articles`) debe ocupar el 100% del ancho disponible.

5. **Elementos adicionales:**

   - Asegúrate de que la clase `.clearfix` limpie los elementos flotantes correctamente al final de las secciones.
   - Mantén el pie de página (`footer`) visible y bien alineado en la parte inferior de la página.
