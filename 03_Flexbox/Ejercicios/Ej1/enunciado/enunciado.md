# Maquetación de Portafolio Web con Flexbox

En esta práctica, aprenderás a crear una página web de portafolio utilizando **Flexbox** para organizar los elementos visualmente de manera flexible y adaptable. La web se estructura con un diseño responsivo que se ajusta correctamente tanto en dispositivos de escritorio como móviles, asegurando una experiencia de usuario fluida. A continuación, se detallan las secciones principales que implementarás, junto con los estilos y características que aplicarás en cada una.

---

### Estructura General del Contenedor Principal

1. **Estilos Globales**:

   - Elimina los márgenes y padding por defecto, utilizando la fuente **sans-serif** en todo el documento.
   - El contenedor principal (`#container`) tiene un **ancho del 90%**, está **centrado horizontalmente** y tiene un **margen vertical** de 2vw.
   - Se aplica una **sombra ligera** y un **borde inferior** para dar un efecto de profundidad al contenedor.

---

### Cabecera

1. **Estructura del `header`**:

   - El `header` utiliza **Flexbox** para organizar el contenido en una **fila** que se envuelve cuando sea necesario, gracias a `flex-wrap: wrap`.
   - Los elementos dentro del `header` se alinean verticalmente en el centro utilizando `align-items: center`.
   - Se aplica una **sombra** al `header` para darle un efecto de relieve.

2. **Logotipo**:

   - El logotipo (`.logo`) ocupa el **50% del ancho** disponible en el `header`, pero puede expandirse o reducirse utilizando **`flex-grow`** para ocupar espacio adicional cuando sea necesario.
   - El texto del logotipo se estiliza con una fuente **Helvetica**, **cursiva**, de **gran peso** (`1000`) y con un **tamaño de 2.5vw**.

3. **Menú de Navegación**:

   - El menú de navegación (`#menu`) ocupa el **50% del ancho** del `header` y utiliza **Flexbox** para distribuir los elementos en una **fila** con **espaciado uniforme** entre ellos (`justify-content: space-evenly`).
   - Los enlaces (`a`) tienen un **tamaño de fuente de 1.5vw** y experimentan una **transición suave** de 300ms al pasar el ratón sobre ellos, cambiando de color y añadiendo un fondo al efecto hover.

---

### Contenido Principal

1. **Distribución del Contenido**:

   - El contenido principal (`#content`) se organiza utilizando **Flexbox** para disponer el **aside** y los proyectos en una **fila**.
   - Los elementos dentro del contenido principal están separados de forma equitativa gracias a `justify-content: space-between`.

2. **Barra Lateral (`aside`)**:

   - La barra lateral ocupa el **15% del ancho** del contenedor y se organiza en **columna** con **Flexbox**.
   - Los enlaces dentro de la barra lateral están estilizados con un fondo gris claro y cambian a oscuro al pasar el ratón, aplicando un **efecto hover** que dura 300ms.

3. **Sección de Proyectos**:

   - Los proyectos (`#projects`) se organizan en **fila** utilizando **Flexbox**, permitiendo que los artículos (`.project`) se ajusten en varias filas cuando sea necesario.
   - Cada proyecto ocupa un **20% del ancho** disponible, tiene un **borde sutil** y una **sombra ligera**.
   - Las imágenes dentro de cada proyecto se adaptan al 100% del contenedor, y el texto de los proyectos cambia de color al pasar el ratón sobre ellos, indicando interactividad.

---

### Pie de Página

1. **Estructura del `footer`**:

   - El pie de página se organiza en **fila** utilizando **Flexbox**, con los elementos alineados verticalmente en el centro.
   - El logotipo del pie de página se muestra con una **opacidad del 50%** y se posiciona a la derecha, mientras que la información del autor se alinea a la izquierda.

---

### Responsividad

1. **Adaptación a Pantallas Grandes y Medianas**:

   - A medida que el ancho de la pantalla disminuye, el logotipo y el menú en el `header` se ajustan, manteniendo una disposición adecuada para pantallas de hasta **800px**.

2. **Pantallas Pequeñas (Tablets y Móviles)**:

   - En pantallas más pequeñas, como tablets y móviles, el contenido principal se reorganiza en **columna**, ocupando el 100% del ancho disponible para garantizar una buena visualización en pantallas verticales.
   - Los elementos dentro del pie de página también se redistribuyen en varias filas para mejorar la legibilidad en pantallas de **500px o menos**.

---

### Animaciones e Interacciones

1. **Efectos Hover y Transiciones**:

   - Los enlaces y elementos interactivos tienen **transiciones suaves** de 300ms al pasar el ratón, mejorando la experiencia del usuario.
   - Las tarjetas de proyectos incluyen un cambio de color en los enlaces cuando el usuario interactúa con ellos.

---

![Diseño final 1](../img/diseño1.png)
