# Maquetación web

### Estilos generales

1. **Configuración básica del documento**:

   - Elimina el **espaciado predeterminado** para todos los elementos con `padding: 0px;` y `margin: 0px;`.
   - Desactiva los **estilos predeterminados de lista** (`list-style: none;`) y enlaces (`text-decoration: none;`).
   - Usa la fuente predeterminada **Verdana, Geneva, Tahoma, sans-serif**.

2. **Estilos para enlaces**:

   - Los enlaces deben tener un color **verde oscuro** con el valor `#529125`.
   - Cuando el ratón pase sobre ellos, deben cambiar a un tono más oscuro con el valor `#285616`.

3. **Fondo de la página**:

   - La página debe tener una **imagen de fondo** ubicada en la ruta `/img/paven.png`.

---

### Cabecera

1. **Estructura del `header`**:

   - El contenedor `header` debe ocupar **el 100% del ancho disponible**.

2. **Logotipo**:

   - El logotipo debe de estar centrado horizontalmente.
   - La **imagen del logotipo** debe ser centrada.
   - La imagen debe tener un **ancho de 140 píxeles**.

3. **Título del sitio** (`h1`):

   - El título del sitio debe estar **centrado**.
   - La fuente debe tener un tamaño de **40 píxeles** y un color **verde claro** con el valor `#70b231`.
   - Aplica una **sombra al texto** del título con los siguientes valores: `0px 2px 4px #333333`.

---

### Menú

1. **Contenedor del `nav`**:

   - El contenedor del menú (`nav`) debe ocupar **el 100% del ancho** del navegador.
   - El fondo del menú será de color **#333333** (gris oscuro) y su altura será de **40 píxeles**.
   - Aplica una **sombra** alrededor del menú con `0px 0px 2px grey`.

2. **Lista de navegación**:

   - La lista dentro del `nav` (`ul`) debe tener un **ancho de 1130 píxeles** y estar **centrada horizontalmente**.
   - Elimina los puntos de la lista con `list-style: none;`.

3. **Elementos del menú** (`li`):

   - Los elementos de la lista deben estar alineados **horizontalmente** utilizando `float: left;`.
   - Cada elemento debe tener una **altura de línea de 40 píxeles** para alinear el texto verticalmente.
   - Al pasar el ratón sobre un elemento `li`, el fondo debe cambiar a **verde claro** (`#70b231`) y añadir una **sombra interior** con `box-shadow: 0px 0px 4px grey inset;`.

4. **Enlaces del menú** (`li a`):

   - Cada enlace (`a`) dentro de los elementos `li` debe ocupar todo el espacio del `li` utilizando `display: block;`.
   - Los enlaces deben tener un **color de texto blanco**.

---

### Contenido Principal

1. **Contenedor del contenido** (`#content`):

   - El contenedor de contenido principal debe tener un **ancho de 1250 píxeles** y un **mínimo de altura de 1100 píxeles**.
   - Asegúrate de que el contenedor esté **centrado**.

2. **Barra lateral** (`#aside`):

   - La barra lateral debe tener un **ancho de 200 píxeles** y un fondo de **color blanco**.
   - Añade un **borde gris claro** `#ccc` y una **sombra ligera** con `box-shadow: 0px 2px 2px #ccc;`.
   - Dentro de la barra lateral, los **widgets** deben tener un **ancho de 180 píxeles** y estar centrados.

3. **Botones en la barra lateral**:

   - Los botones de la barra lateral deben tener un **fondo verde claro** (`#70b231`) y **bordes redondeados**.
   - Al pasar el ratón sobre ellos, deben tener una **sombra ligera** con `box-shadow: 0px 0px 2px gray;`.

---

### Secciones

1. **Estructura del contenedor `#sections`**:

   - El contenedor de las secciones debe flotar hacia la izquierda con un **ancho del 75%**.
   - Cada sección dentro de `#sections` debe tener un **margen superior de 40 píxeles**, fondo de **color blanco**, y una **sombra suave** con `box-shadow: 0px 0px 4px #c9c9c9;`.
   - Los párrafos dentro de las secciones deben estar **justificados**.

---

### Pie de página

1. **Estilos para el pie de página** (`footer`):

   - El pie de página debe tener un **ancho del 100%** y estar centrado.
   - El fondo debe ser de color **#333333** (gris oscuro) y el **texto de color blanco**.
   - El pie de página debe tener una **sombra ligera** con `box-shadow: 0px 0px 2px gray;`.

---

![Diseño final](../img/diseño.png)
