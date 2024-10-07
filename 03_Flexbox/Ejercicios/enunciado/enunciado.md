# Maquetación CSS con Flexbox

En esta práctica, aprenderás a maquetar una página web utilizando **Flexbox** en CSS. La estructura y los estilos de la web estarán diseñados para adaptarse a diferentes tamaños de pantalla, desde escritorios hasta dispositivos móviles, para asegurar una visualización correcta en todos los dispositivos. A continuación, se detallan las secciones y estilos que se aplicarán a la web:

---

### Estructura del Contenedor Principal

1. **Estilos Generales**:

   - Se utiliza una fuente sans-serif en todo el documento y se eliminan los márgenes y el padding por defecto del `body`.
   - El contenedor principal (`#container`) tiene un **ancho del 90%**, está **centrado horizontalmente** y posee una **altura mínima de 700 píxeles**.
   - Se aplica una **sombra** y un **borde inferior** para dar un efecto de profundidad al contenedor.

---

### Cabecera

1. **Estructura del `header`**:

   - El `header` utiliza **Flexbox** para organizar sus elementos en una **fila** con posibilidad de envolverlos en líneas adicionales (`flex-wrap`).
   - Los elementos se alinean verticalmente en el centro gracias a `align-items: center`.
   - Se aplica una **sombra suave** para resaltar el `header`.

2. **Logotipo**:

   - El logotipo (`.logo`) ocupa el **65% del ancho** disponible en el `header` y se ajusta con **`flex-grow`** para expandirse si es necesario.
   - Se define un **margen** para separarlo de otros elementos y se estiliza el texto con una fuente **Helvetica** en **cursiva** y de **gran peso** (`900`).

3. **Menú de Navegación**:

   - El menú (`#menu`) ocupa el **30% del ancho** del `header`, y sus elementos (`ul`) se distribuyen con **Flexbox** en una **fila** ajustando el espacio disponible entre ellos (`justify-content: space-between`).
   - Los enlaces del menú (`a`) tienen una **transición suave** para cambiar de estilo al pasar el ratón sobre ellos.

---

### Contenido Principal

1. **Distribución de Contenido**:

   - El contenido principal (`#content`) utiliza **Flexbox** para organizar sus elementos en **fila**, ajustando el espacio entre ellos para una disposición ordenada.

2. **Sección de Proyectos**:

   - La sección de proyectos (`#projects`) se organiza en **fila** con **Flexbox**, permitiendo que los elementos se **ajusten** en filas adicionales según sea necesario.
   - Cada tarjeta de proyecto (`.project`) tiene un **ancho base de 250 píxeles** y se ajusta para crecer y ocupar el espacio restante utilizando **`flex-grow`**.
   - Se aplican **bordes y sombras** para darle profundidad a cada tarjeta.

---

### Barra Lateral

1. **Estilos del `aside`**:

   - La barra lateral ocupa el **15% del ancho** del contenedor principal y se organiza en **columna** utilizando **Flexbox**.
   - Se estilizan los encabezados (`h2`) y los enlaces de la lista para mantener una apariencia limpia y coherente con el resto del diseño.

---

### Pie de Página

1. **Estilos del `footer`**:

   - El pie de página se organiza en **fila** y sus elementos se alinean con **Flexbox**, permitiendo que se distribuyan en varias líneas si es necesario.
   - Se aplican **sombra y opacidad** al logotipo del pie de página para darle un efecto visual sutil.

---

### Responsividad

1. **Adaptación a Pantallas Grandes y Medianas**:

   - A medida que el ancho de la pantalla disminuye (ej. 1620px y 1350px), se ajustan los márgenes de los elementos del menú y la alineación del logotipo en el `header` para asegurar una correcta visualización.

2. **Pantallas Pequeñas (Tablets y Móviles)**:

   - Cuando el ancho es menor a **800px**, el contenido (`#content`) se reorganiza en **columna** para adaptarse a pantallas verticales.
   - En pantallas menores a **500px**, se centraliza la información del pie de página para mejorar la legibilidad.

---

### Animaciones e Interacciones

1. **Transiciones y Hover**:

   - Se aplican **transiciones suaves** de 300ms en enlaces y elementos interactivos para mejorar la experiencia del usuario.

2. **Efectos en Tarjetas de Proyecto**:

   - Los enlaces y descripciones dentro de las tarjetas cambian de color a verde al pasar el ratón sobre ellos para indicar interactividad.

![Diseño final 1](../img/diseño1.png)
