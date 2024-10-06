### 1. **Propiedades relacionadas con los colores**

En CSS, los colores se pueden aplicar a distintos elementos utilizando varias propiedades. Las principales son:

- **`color`**: Define el color del texto.
- **`background-color`**: Establece el color de fondo de un elemento.
- **`border-color`**: Define el color de los bordes de un elemento.

#### Ejemplos básicos:

```css
p {
  color: blue; /* Color del texto */
  background-color: yellow; /* Color de fondo */
  border: 2px solid red; /* Borde con color */
}
```

### 2. **Formas de definir colores**

CSS permite definir colores de diversas formas, dependiendo de la preferencia o el nivel de personalización que necesites. Las más comunes son:

#### A. **Nombres de colores predefinidos**

CSS soporta alrededor de 140 nombres de colores estándar como `red`, `blue`, `green`, `yellow`, `black`, etc.

```css
h1 {
  color: red;
}
```

#### B. **Valores hexadecimales (`#rrggbb`)**

Un color hexadecimal está compuesto por tres pares de dígitos que representan la intensidad del rojo, verde y azul (RGB), cada uno con un valor de 00 a FF.

```css
h2 {
  color: #3498db; /* Un tono de azul */
}
```

#### C. **Valores RGB (`rgb()`)**

Con `rgb()`, defines el color mediante los valores de los componentes rojo, verde y azul, cada uno entre 0 y 255.

```css
div {
  background-color: rgb(255, 99, 71); /* Color Tomate */
}
```

#### D. **Valores RGBA (`rgba()`)**

`rgba()` es igual que `rgb()`, pero con un valor adicional de **opacidad** (transparencia) llamado canal alfa, que va de 0 (totalmente transparente) a 1 (completamente opaco).

```css
p {
  background-color: rgba(0, 128, 0, 0.5); /* Verde con 50% de opacidad */
}
```

### 3. **Propiedad `opacity`**

La propiedad `opacity` controla la opacidad de un elemento completo, no solo de su color de fondo. Su valor varía de 0 (completamente transparente) a 1 (completamente opaco).

```css
img {
  opacity: 0.7; /* 70% de opacidad */
}
```

### 4. **Transparencia y combinaciones con `background-color`**

El uso de `rgba()` o `hsla()` es útil para aplicar colores con transparencia sin afectar otros estilos de un elemento.

```css
div {
  background-color: rgba(255, 0, 0, 0.5); /* Fondo rojo transparente */
  color: white; /* Texto en blanco */
}
```

[Ir a fondos y textos](05-fondos-y-textos.md)
