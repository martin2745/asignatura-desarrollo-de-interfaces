# Fuentes en CSS

En CSS, las **fuentes** son una parte esencial del diseño de las páginas web. Controlan la apariencia del texto y permiten que los desarrolladores ajusten tanto el estilo tipográfico como la legibilidad del contenido. Las fuentes en CSS se configuran principalmente a través de la propiedad `font-family`, junto con otras propiedades para el tamaño, estilo, peso, etc.

## 1. Propiedad `font-family`
La propiedad `font-family` especifica qué fuentes usar para el texto. Puedes proporcionar una lista de fuentes como una cadena de alternativas (o "stack"), lo que significa que si el navegador no encuentra la primera fuente, usará la siguiente en la lista.

#### Ejemplo:
```css
body {
  font-family: "Arial", "Helvetica", sans-serif;
}
```

- `"Arial"` es la primera opción.
- `"Helvetica"` es la segunda opción si la primera no está disponible.
- `sans-serif` es una familia genérica que será usada si ninguna de las fuentes específicas está disponible.

### Familias de fuentes genéricas
En CSS, existen cinco familias de fuentes genéricas que sirven como una opción de respaldo si ninguna de las fuentes específicas está disponible:

1. `serif`: Fuentes con remates o líneas adicionales en los caracteres. Ejemplos: Times New Roman, Georgia.
2. `sans-serif`: Fuentes sin remates, que suelen ser más limpias y modernas. Ejemplos: Arial, Helvetica.
3. `monospace`: Fuentes donde todos los caracteres tienen el mismo ancho. Ejemplos: Courier New, Consolas.
4. `cursive`: Fuentes que imitan la escritura a mano. Ejemplos: Comic Sans, Brush Script.
5. `fantasy`: Fuentes decorativas o de estilo más estilizado. Ejemplo: Papyrus.

### Fuentes seguras para la web
Las **fuentes seguras para la web** son aquellas que están disponibles en la mayoría de los sistemas operativos y navegadores, como Arial, Verdana, Times New Roman y Courier New. Se recomienda usarlas como respaldo si no se puede cargar una fuente personalizada.

### Fuentes personalizadas (web fonts)
Para usar fuentes que no estén instaladas en el dispositivo del usuario, se pueden cargar **fuentes personalizadas** mediante servicios como **Google Fonts** o el uso de la regla `@font-face`.

### Ejemplo de Google Fonts:

Puedes enlazar una fuente externa usando un `<link>` en el HTML y luego referenciarla en CSS:
```html
<link
  href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
  rel="stylesheet"
/>
```

Y en tu CSS:
```css
body {
  font-family: "Roboto", sans-serif;
}
```

### Uso de `@font-face`:

La regla `@font-face` permite incluir fuentes personalizadas desde un archivo local o remoto. Aquí está el formato básico:

```css
@font-face {
  font-family: "MiFuentePersonalizada";
  src: url("mi-fuente.woff2") format("woff2"), url("mi-fuente.woff") format("woff");
}

body {
  font-family: "MiFuentePersonalizada", sans-serif;
}
```

- `font-family`: El nombre que usarás para referenciar la fuente.
- `src`: Define la ubicación del archivo de la fuente y su formato.

## 2. Propiedades relacionadas con las fuentes

CSS proporciona varias propiedades para controlar cómo se ven las fuentes además de `font-family`:

1. **`font-size`**: Controla el tamaño de la fuente. Ejemplos: `16px`, `1.2em`, `100%`.
   ```css
   p {
     font-size: 18px;
   }
   ```

2. **`font-weight`**: Controla el grosor del texto. Valores comunes son `normal`, `bold` o números como `400` (normal) y `700` (bold).
   ```css
   h1 {
     font-weight: bold;
   }
   ```

3. **`font-style`**: Define si el texto está en cursiva (`italic`) o normal (`normal`).
   ```css
   h1 {
     font-style: italic;
   }
   ```

4. **`line-height`**: Ajusta el espacio vertical entre las líneas de texto, mejorando la legibilidad.
   ```css
   p {
     line-height: 1.5;
   }
   ```

5. **`text-transform`**: Controla la capitalización del texto (e.g., convertir a mayúsculas). Valores: `uppercase`, `lowercase`, `capitalize`.
   ```css
   h1 {
     text-transform: uppercase;
   }
   ```

6. **`letter-spacing`**: Ajusta el espacio entre las letras de un texto.
   ```css
   h2 {
     letter-spacing: 2px;
   }
   ```

7. **`text-align`**: Alinea el texto. Valores como `left`, `right`, `center`, `justify`.

## 3. Combinación de propiedades

Puedes combinar varias propiedades de fuentes en una sola declaración usando la propiedad abreviada `font`:
```css
p {
  font: italic bold 16px/1.5 "Arial", sans-serif;
}
```

Esto es equivalente a:
```css
p {
  font-style: italic;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
  font-family: "Arial", sans-serif;
}
```

## Resumen:

- **`font-family`**: Define la fuente o una lista de fuentes para el texto.
- **Fuentes genéricas**: `serif`, `sans-serif`, `monospace`, `cursive`, `fantasy`.
- **Fuentes personalizadas**: Se pueden cargar desde servicios como Google Fonts o usar con `@font-face`.
- **Propiedades adicionales**: `font-size`, `font-weight`, `font-style`, `line-height`, `letter-spacing`, entre otras, permiten un control detallado sobre la apariencia del texto.

Las fuentes son cruciales para la estética y la usabilidad de una página web, por lo que es importante escoger y configurar bien las fuentes y sus propiedades.

---

[Ir a colores](04-colores.md)
