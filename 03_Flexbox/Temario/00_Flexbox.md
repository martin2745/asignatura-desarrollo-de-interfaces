# **Flexbox**

**Flexbox** es un módulo de CSS diseñado para crear **layouts flexibles y alineados** de manera eficiente, permitiendo que los elementos se distribuyan y alineen de forma dinámica en un contenedor. Flexbox es especialmente útil para construir interfaces web más complejas, como menús, galerías, y layouts que se adaptan a distintos tamaños de pantalla, sin tener que usar posicionamiento o flotación.

**Ventajas de Flexbox**:

- Permite un alineamiento más preciso y fácil de los elementos.
- Es muy flexible y se adapta bien a diseños responsivos.
- Simplifica el código comparado con métodos más antiguos como el uso de `float` o `inline-block`.

- [**Índice**](#flexbox)
  - [Conceptos básicos de Flexbox](#conceptos-básicos-de-flexbox)
  - [Propiedades del Contenedor Flex](#propiedades-del-contenedor-flex)
  - [Direcciones en Flexbox](#direcciones-en-flexbox)
  - [Propiedad wrap o envoltorio](#propiedad-wrap-o-envoltorio)
  - [Orden de elementos en Flexbox](#orden-de-elementos-en-flexbox)
  - [Tamaños de los elementos flexibles](#tamaños-de-los-elementos-flexibles)
  - [Alinear elementos de forma horizontal](#alinear-elementos-de-forma-horizontal)
  - [Alinear elementos de forma vertical](#alinear-elementos-de-forma-vertical)

### Conceptos básicos de Flexbox

En Flexbox, hay dos conceptos principales:

1. **Contenedor Flex (Flex Container)**: El elemento que contiene otros elementos flexibles. Se define utilizando `display: flex;` o `display: inline-flex;` en CSS.
2. **Ítems Flex (Flex Items)**: Los elementos hijos directos del contenedor flex, que son los elementos que se alinean y distribuyen de acuerdo con las propiedades de flexbox.

### Propiedades del Contenedor Flex

Estas propiedades se aplican al contenedor y afectan a todos sus ítems:

- `display: flex;`: El contenedor padre se declara como flexible ocupando el 100% del ancho.
- `display: inline-flex;`: El contenedor padre se declara como flexible pero pasa a tener un ancho ajustado al tamaño de los elementos internos.

### Direcciones en Flexbox

Podemos definir las diferentes direcciones en las cuales queremos que los elementos se dispongan con `flex-direction`.

- **`row`** (por defecto): Los ítems se colocan en una fila **horizontal**, de **izquierda a derecha**.
- **`column`**: Los ítems se colocan en una **columna vertical**, de **arriba hacia abajo**.
- **`row-reverse`**: Los ítems se colocan en una fila **horizontal**, pero de **derecha a izquierda**.
- **`column-reverse`**: Los ítems se colocan en una **columna vertical**, pero de **abajo hacia arriba**.

### Propiedad wrap o envoltorio

La propiedad `flex-wrap` en Flexbox se utiliza para controlar si los ítems flexibles deben permanecer en una sola línea (fila o columna) o si se deben **envolver** en múltiples líneas o columnas en caso de que no haya suficiente espacio en el contenedor. Esto es especialmente útil cuando se trabaja con layouts responsivos, ya que permite ajustar automáticamente la disposición de los elementos en función del espacio disponible.

1. **`nowrap`** (valor por defecto):
   - Los ítems **no se envuelven** y se colocan en una sola línea, incluso si el espacio del contenedor no es suficiente.
   - Esto puede resultar en que los elementos se compriman para ajustarse o se desborden fuera del contenedor.
2. **`wrap`**:
   - Los ítems **se envuelven** en una nueva línea si no caben en la línea principal.
   - Las líneas adicionales se colocan por **debajo** de la primera línea, manteniendo el orden de los elementos.

_**Nota**_: Tanto `flex-direction` como `flex-wrap` se pueden agrupar en una única instrucción que se conoce como `flex-flow` donde se indicaría dirección y envoltorio.

```css
flex-flow: row wrap;
```

### Orden de elementos en Flexbox

La propiedad `order` en Flexbox se utiliza para controlar el **orden visual** de los ítems dentro de un contenedor flex por lo que se aplica en los propios elementos, no como propiedad del contenedor. Por defecto, los elementos flexibles se muestran en el orden en que aparecen en el código HTML, pero `order` permite **reordenarlos visualmente** sin cambiar el marcado HTML.

- Cada ítem flex tiene un valor de `order` por defecto de **0**.
- Al asignar valores `order` mayores o menores a los ítems, puedes modificar su posición en el contenedor.
- Los ítems con un valor `order` **menor** aparecerán **antes** que los de mayor valor, independientemente de su posición en el HTML.
- **Valores positivos o negativos**: Puedes asignar cualquier número entero positivo, negativo o cero:
  - Un valor negativo (`-1`) colocará el ítem antes de los que tienen `0` o valores positivos.
  - Un valor positivo (`1`, `2`, etc.) lo colocará después de los ítems con valores menores o iguales a cero.

### Tamaños de los elementos flexibles

La propiedad `flex-grow` en Flexbox controla la **capacidad de crecimiento** de los ítems flexibles dentro de un contenedor cuando hay **espacio adicional** disponible. En otras palabras, define cuánto puede crecer un ítem en comparación con otros ítems flexibles para ocupar el espacio sobrante en el contenedor. Tenemos que considerar lo siguiente trabajando con `flex-grow`:

- El valor de `flex-grow` es un número (puede ser un número entero o decimal) que representa la **proporción** de crecimiento que un ítem debería tener en relación con los demás ítems flexibles en el mismo contenedor.
- El valor por **defecto** es `0`, lo que significa que el ítem **no crecerá** incluso si hay espacio adicional.
- Un valor mayor que `0` permite que el ítem crezca para ocupar el espacio sobrante. Cuanto **mayor** sea el valor, más espacio ocupará el ítem en comparación con los demás.

Podemos decir que:

- Si **todos los ítems** tienen un `flex-grow` de `1`, se distribuirán equitativamente todo el espacio adicional.
- Si un ítem tiene un `flex-grow` **mayor** que los otros, ocupará **más espacio** proporcionalmente.
- Si el `flex-grow` es `0`, el ítem **no crecerá** y mantendrá su tamaño original.

_**Nota**_: La propiedad `flex-shrink` en Flexbox controla cuánto puede **encogerse** un ítem flexible si el espacio en el contenedor es **insuficiente**. Es decir, define si y cuánto se reducirá el tamaño de un ítem en comparación con otros cuando hay **falta de espacio**.

_**Nota 2**_: Por otra parte tenemos `flex-basis` la cual tiene un comportamiento similar al width. Sirve para establecer un tamaño inicial base del objeto flexible.

### Alinear elementos de forma horizontal

La propiedad `justify-content` en Flexbox se utiliza para **alinear** y **distribuir** los ítems flexibles a lo largo del **eje principal** del contenedor (horizontal si es una fila y vertical si es una columna). Permite controlar cómo se distribuyen los ítems cuando hay **espacio adicional** en el contenedor, asegurando que se coloquen de forma adecuada y equilibrada. Los valores principales son:

1. **`flex-start`/`left`** (valor por defecto): Los ítems se alinean al **inicio** del contenedor.
2. **`flex-end`/`right`**: Los ítems se alinean al **final** del contenedor.
3. **`center`**: Los ítems se alinean en el **centro** del contenedor, distribuyéndose equitativamente a ambos lados del eje.
4. **`space-between`**: Los ítems se distribuyen con el **máximo espacio posible** entre ellos. El primer ítem se alinea al inicio y el último al final, y los demás se distribuyen equitativamente en el medio.
5. **`space-around`**: Los ítems tienen **espacio igual a ambos lados**, pero el espacio en los **bordes externos** del contenedor es **la mitad** del espacio entre ítems, haciendo que haya más espacio entre los ítems que en los bordes.
6. **`space-evenly`**: Los ítems se distribuyen con **espacios iguales** tanto entre ellos como en los **bordes externos** del contenedor, garantizando una separación uniforme en todo el contenedor.

### Alinear elementos de forma vertical

La propiedad `align-items` en Flexbox se utiliza para **alinear** los ítems flexibles a lo largo del **eje transversal** del contenedor (verticalmente en una fila y horizontalmente en una columna). Esta propiedad permite definir cómo se distribuyen los ítems en el espacio disponible del contenedor, asegurando que queden alineados de acuerdo a la configuración deseada.

1. **`flex-start`**: Los ítems se alinean al **inicio** del contenedor, lo que significa que se agruparán en la parte superior (en un contenedor de fila) o a la izquierda (en un contenedor de columna).
2. **`flex-end`**: Los ítems se alinean al **final** del contenedor, agrupándose en la parte inferior (en un contenedor de fila) o a la derecha (en un contenedor de columna).
3. **`center`**: Los ítems se alinean en el **centro** del contenedor, distribuyéndose equitativamente arriba y abajo (en un contenedor de fila) o a los lados (en un contenedor de columna).
4. **`baseline`**: Los ítems se alinean según su **línea base** de texto. Esto es útil cuando tienes elementos de diferentes tamaños y quieres que se alineen de manera uniforme en base a su texto.
5. **`stretch`** (valor por defecto): Los ítems se estiran para ocupar todo el espacio disponible en el contenedor. Esto significa que, si no se establece un tamaño específico para los ítems, se expandirán para llenar el contenedor.
