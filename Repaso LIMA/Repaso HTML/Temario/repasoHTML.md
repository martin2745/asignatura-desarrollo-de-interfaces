### Repaso de contenidos HTML

#### Etiquetas básicas de HTML

1. **`<!DOCTYPE html>`**:
   - Declara el tipo de documento y la versión de HTML que se utilizará. En este caso, `HTML5`.
   - Ayuda a los navegadores a interpretar correctamente el contenido de la página.
2. **`<html>`**:

   - Esta etiqueta es el contenedor principal que agrupa todo el contenido de un documento HTML.
   - A menudo incluye el atributo `lang` para especificar el idioma de la página, por ejemplo: `<html lang="es">`.

3. **`<head>`**:
   - Contiene información meta sobre la página (como el título, enlaces a archivos CSS, scripts de JavaScript, etc.) que no se muestra directamente en el contenido visual de la página.
4. **`<meta charset="utf-8"/>`**:
   - Define la codificación de caracteres para el documento. `UTF-8` permite representar todos los caracteres necesarios para el idioma español, incluyendo acentos y caracteres especiales.
5. **`<title>`**:
   - Muestra el título de la página web en la pestaña del navegador o en los resultados de búsqueda.
6. **`<body>`**:
   - Contiene el contenido visible de la página web, como textos, imágenes, videos, y otros elementos multimedia.
7. **`<p>`**:
   - Define un párrafo. Es la manera más sencilla de incluir texto en la página.
8. **`<br/>`**:
   - Inserta un salto de línea en el contenido. Es un elemento vacío (no tiene etiqueta de cierre).
9. **`<hr>`**:
   - Inserta una línea horizontal para separar secciones de contenido. También es un elemento vacío.
10. **`<ol>`** (Lista ordenada):

    - Crea una lista cuyos elementos están numerados. Los elementos individuales de la lista se añaden con `<li>`.

11. **`<ul>`** (Lista desordenada):
    - Crea una lista no numerada, usualmente representada con viñetas (bullets).
12. **`<li>`** (Elemento de lista):

    - Define cada elemento dentro de una lista (ya sea ordenada o desordenada).

13. **`<img>`**:

    - Inserta una imagen en la página. El atributo `src` especifica la ruta de la imagen y `alt` es el texto alternativo que se muestra si la imagen no se puede cargar.
    - Atributos adicionales: `width`, `height` para ajustar el tamaño de la imagen.

14. **`<a>`** (Anchor/enlace):

    - Crea un hipervínculo hacia otra página o recurso. El atributo `href` define la URL de destino. También puede tener atributos como `target="_blank"` para abrir el enlace en una nueva pestaña.

15. **`<table>`**:

    - Crea una tabla. El atributo `border` añade un borde alrededor de la tabla. Dentro de la tabla, usamos `<tr>` para definir filas y `<td>` para las celdas.

16. **`<div>`**:

    - Es un contenedor genérico en bloque que se utiliza para agrupar elementos y aplicar estilos o scripts.
    - A menudo utilizado junto con CSS para crear estructuras y diseños complejos.

17. **`<header>`**:

    - Define la sección de cabecera de un documento o una sección. A menudo contiene logotipos, títulos y menús de navegación.

18. **`<nav>`**:

    - Indica un conjunto de enlaces de navegación. Normalmente, agrupa enlaces importantes dentro de la estructura del sitio, como menús o barras de navegación.

19. **`<section>`**:

    - Crea una sección temática en la página. A menudo se usa para dividir el contenido en diferentes partes lógicas, y puede contener múltiples subetiquetas como `<article>` o `<div>`.

20. **`<article>`**:

    - Representa un contenido independiente dentro de la página, como una publicación de blog, un artículo de noticias o un comentario.
    - Es reutilizable y generalmente tiene sentido por sí mismo fuera del contexto del documento.

21. **`<aside>`**:

    - Define una sección que contiene contenido relacionado indirectamente con el contenido principal. Se usa comúnmente para barras laterales, enlaces adicionales o bloques de información.

22. **`<footer>`**:
    - Crea el pie de página del documento o de una sección. Suele incluir información como derechos de autor, enlaces a términos legales o contacto.

### Información adicional para las etiquetas:

- **Atributos globales**:
  - Muchas etiquetas HTML pueden usar atributos globales como `id`, `class`, `style`, `data-*`, entre otros. Estos atributos permiten agregar identificadores únicos, aplicar estilos CSS o asignar comportamientos específicos mediante JavaScript.
- **Semántica en HTML5**:

  - Con la llegada de HTML5, se introdujeron etiquetas semánticas (como `<header>`, `<footer>`, `<section>`, `<article>`, `<aside>`, etc.), que mejoran la accesibilidad y ayudan a los motores de búsqueda a entender mejor la estructura del contenido de la página.

- **Responsividad y multimedia**:

  - Se pueden usar etiquetas como `<picture>`, `<source>`, y `<video>` para gestionar multimedia adaptativa y responsiva, mejorando la experiencia en diferentes dispositivos.

- **Formularios y etiquetas de control**:
  - HTML también proporciona etiquetas especiales para formularios como `<form>`, `<input>`, `<textarea>`, `<select>`, y `<button>` que permiten la interacción con los usuarios.

#### Ejemplo de formulario en HTML

El siguiente código es un formulario básico en HTML para iniciar sesión:

1. `<h3>` crea un encabezado, en este caso con el texto "Login".
2. `<form>` es la etiqueta que define el formulario. El atributo `action="index.html"` indica que los datos se enviarán a la página `index.html` y el método de envío es `get`.
3. `<label>` crea una etiqueta que describe el campo de entrada, vinculada con el campo por el atributo `for`.
4. `<input type="text" />` genera un campo de texto para introducir el nombre.
5. `<br />` inserta un salto de línea para separar visualmente los elementos.
6. `<input type="password" />` genera un campo de contraseña que oculta los caracteres introducidos.
7. `<select>` permite crear un menú desplegable para seleccionar un rol.
8. `<option>` define cada una de las opciones dentro del menú desplegable.
9. `<button type="submit">` crea un botón que, al ser presionado, envía el formulario.

#### Estructura del formulario

```html
<h3>Login</h3>
<form action="index.html" method="get">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required />

  <br /><br />

  <label for="password">Contraseña:</label>
  <input type="password" id="password" name="password" required />

  <br /><br />

  <label for="rol">Rol:</label>
  <select id="rol" name="rol">
    <option value="usuario">Usuario</option>
    <option value="admin">Administrador</option>
    <option value="moderador">Moderador</option>
  </select>

  <br /><br />

  <button type="submit">Enviar</button>
</form>
```

#### Descripción:

- El formulario incluye campos para ingresar un **nombre** y una **contraseña**, ambos obligatorios gracias al atributo `required`.
- Un menú desplegable permite seleccionar el **rol** del usuario entre "Usuario", "Administrador" o "Moderador".
- El botón de tipo **submit** envía el formulario con los datos introducidos a la página especificada (`index.html`).
