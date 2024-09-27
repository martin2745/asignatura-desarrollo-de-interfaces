### Fondos y texto

### Fondos

La propiedad **`background`** en CSS es una propiedad abreviada que permite controlar todos los aspectos del fondo de un elemento en una sola línea. Esto incluye el color de fondo, las imágenes de fondo, la posición, el tamaño, el comportamiento de repetición, entre otros.

#### Propiedades que abarca `background`

La propiedad `background` combina varias propiedades individuales relacionadas con el fondo. Estas propiedades son:

1. **`background-color`**: Establece el color de fondo.
2. **`background-image`**: Especifica una o más imágenes de fondo.
3. **`background-repeat`**: Define cómo se repite la imagen de fondo.
4. **`background-position`**: Establece la posición de la imagen de fondo.
5. **`background-size`**: Ajusta el tamaño de la imagen de fondo.
6. **`background-attachment`**: Define si la imagen de fondo se desplaza con el contenido o permanece fija.
7. **`background-origin`**: Especifica el área de origen de la imagen de fondo.
8. **`background-clip`**: Define hasta dónde debe dibujarse el fondo (puede ser dentro del borde, del padding o del contenido).

#### Sintaxis abreviada

La propiedad `background` puede incluir varias de las propiedades mencionadas en una sola declaración. La sintaxis general es:

```css
background: [background-color] [background-image] [background-repeat]
  [background-attachment] [background-position] / [background-size];
```

##### Ejemplo:

```css
div {
  background: url("imagen.png") no-repeat fixed center/cover;
}
```

En este caso:

- `url('imagen.png')`: Especifica la imagen de fondo.
- `no-repeat`: Indica que la imagen no debe repetirse.
- `fixed`: Fija la imagen al viewport, lo que significa que no se desplazará con el contenido.
- `center`: Posiciona la imagen en el centro.
- `cover`: Escala la imagen para cubrir todo el área del fondo.

#### Propiedades individuales de `background`

##### 1. **`background-color`**

Define el color de fondo del elemento. Puede usar cualquier valor de color: nombre, hexadecimal, RGB, RGBA, HSL o HSLA.

```css
div {
  background-color: lightblue;
}
```

##### 2. **`background-image`**

Permite establecer una o más imágenes como fondo. Se puede usar la función `url()` para especificar la ruta de la imagen.

```css
div {
  background-image: url("fondo.jpg");
}
```

- También se pueden usar **múltiples imágenes** de fondo, separándolas por comas:

```css
div {
  background-image: url("fondo1.jpg"), url("fondo2.png");
}
```

##### 3. **`background-repeat`**

Controla si la imagen de fondo debe repetirse (en ambas direcciones, horizontal, vertical o no repetir).

- **Valores comunes**:
  - `repeat`: Repite la imagen tanto horizontal como verticalmente (valor por defecto).
  - `no-repeat`: No repite la imagen.
  - `repeat-x`: Repite la imagen solo horizontalmente.
  - `repeat-y`: Repite la imagen solo verticalmente.
  - `space`: Repite la imagen, ajustando el espacio entre las repeticiones.
  - `round`: Repite la imagen, ajustándola para que encaje perfectamente en el contenedor.

```css
div {
  background-image: url("fondo.png");
  background-repeat: no-repeat;
}
```

##### 4. **`background-position`**

Define la posición inicial de la imagen de fondo. Puede ser con palabras clave, como `left`, `right`, `top`, `bottom`, `center`, o con valores específicos en píxeles o porcentajes.

```css
div {
  background-image: url("fondo.jpg");
  background-position: top right;
}
```

También puedes usar posiciones específicas con coordenadas:

```css
div {
  background-image: url("fondo.jpg");
  background-position: 50px 100px; /* 50px desde la izquierda, 100px desde arriba */
}
```

##### 5. **`background-size`**

Especifica el tamaño de la imagen de fondo. Puede usar valores como:

- `auto`: Mantiene el tamaño original de la imagen.
- `cover`: Escala la imagen para que cubra todo el área del fondo, manteniendo la proporción.
- `contain`: Escala la imagen para que quepa completamente dentro del área, manteniendo la proporción.

```css
div {
  background-image: url("fondo.jpg");
  background-size: cover;
}
```

##### 6. **`background-attachment`**

Controla si la imagen de fondo se desplaza con el contenido o se mantiene fija.

- **Valores comunes**:
  - `scroll`: La imagen de fondo se desplaza junto con el contenido (valor por defecto).
  - `fixed`: La imagen permanece fija al hacer scroll.
  - `local`: La imagen se desplaza dentro del elemento cuando se hace scroll en su contenido.

```css
div {
  background-image: url("fondo.jpg");
  background-attachment: fixed;
}
```

##### 7. **`background-origin`**

Define el área de referencia desde donde se empieza a aplicar el fondo. Los valores pueden ser:

- `padding-box`: El fondo comienza desde el borde del padding (valor por defecto).
- `border-box`: El fondo comienza desde el borde del contenedor (incluye el borde).
- `content-box`: El fondo comienza desde el área de contenido, excluyendo padding y borde.

```css
div {
  background-image: url("fondo.jpg");
  background-origin: content-box;
}
```

##### 8. **`background-clip`**

Especifica hasta dónde se extiende el fondo dentro de un elemento.

- **Valores**:
  - `border-box`: El fondo se extiende hasta el borde exterior (valor por defecto).
  - `padding-box`: El fondo se detiene en el borde interior del padding.
  - `content-box`: El fondo solo cubre el área de contenido.

```css
div {
  background-color: lightblue;
  background-clip: padding-box;
}
```

#### Ejemplo completo

Este ejemplo muestra cómo se pueden combinar varias propiedades de fondo en una declaración completa usando la propiedad abreviada:

```css
div {
  background: url("fondo.jpg") no-repeat center/contain fixed;
  background-color: lightblue;
}
```

---

### Textos

#### 1. **`text-align`**

La propiedad **`text-align`** en CSS se utiliza para alinear el texto horizontalmente dentro de su contenedor. Afecta tanto al contenido en línea (como el texto) como a los elementos en bloque que contienen texto.

##### Valores comunes de `text-align`:

- **`left`**: Alinea el texto a la izquierda. Es el valor predeterminado en muchos navegadores, especialmente para textos en idiomas que se leen de izquierda a derecha.

  ```css
  p {
    text-align: left;
  }
  ```

- **`right`**: Alinea el texto a la derecha. Es útil en idiomas que se leen de derecha a izquierda o para diseños específicos.

  ```css
  p {
    text-align: right;
  }
  ```

- **`center`**: Centra el texto horizontalmente en el contenedor.

  ```css
  h1 {
    text-align: center;
  }
  ```

- **`justify`**: Justifica el texto, distribuyendo el espacio entre las palabras para que las líneas comiencen y terminen en el mismo punto en ambos lados, creando bordes alineados a la izquierda y derecha.

  ```css
  p {
    text-align: justify;
  }
  ```

##### Consideraciones:

- **Herencia**: La propiedad `text-align` se hereda, lo que significa que si la aplicas a un contenedor (como `div` o `body`), los elementos dentro de ese contenedor heredarán la alineación a menos que se sobrescriba.
- **Idiomas de derecha a izquierda (RTL)**: Para idiomas como árabe o hebreo, el valor predeterminado de `text-align` cambia a `right`, ya que estos idiomas se leen de derecha a izquierda.

#### 2. **`line-height`**

La propiedad **`line-height`** define la altura de cada línea de texto dentro de un elemento, afectando el espacio vertical entre las líneas. Es crucial para la legibilidad y el espaciado visual del texto.

##### Valores comunes de `line-height`:

- **Valor numérico**: Se multiplica por el tamaño de la fuente actual. Por ejemplo, un `line-height` de `1.5` significa que la altura de cada línea será 1.5 veces el tamaño de la fuente.

  ```css
  p {
    line-height: 1.5; /* 1.5 veces el tamaño de la fuente */
  }
  ```

- **Unidad fija (px, em, etc.)**: Define una altura de línea específica. Esto puede ser útil para controlar exactamente el espaciado, pero puede volverse menos flexible al cambiar el tamaño de la fuente.

  ```css
  p {
    line-height: 24px; /* Cada línea tendrá 24 píxeles de alto */
  }
  ```

- **Porcentaje**: Especifica la altura de la línea como un porcentaje del tamaño de la fuente.

  ```css
  p {
    line-height: 150%; /* La altura de la línea es 150% del tamaño de la fuente */
  }
  ```

[Ir a display y float](06-display-y-float.md)
