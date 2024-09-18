### Repaso de contenidos HTML

#### Etiquetas básicas

Un documento de HTML básico estará formado por:

1. Indica la versión de HTML a utilizar, versión 5 `<!DOCTYPE html>`.
2. Contenido HTML entre etiquetas `<html>`.
3. `<head>` contendrá los datos de interés para el navegador.
4. `<meta charset="utf-8"/>` que indica el formato de los textos en español.
5. `<title>` indica el título de la página.
6. `<body>` con el contenido a renderizar por el navegador.
7. `<p>` para textos.
8. `<br/>` para saltos de linea.
9. `<hr>` para separador.
10. `<ol>` para listas ordenadas.
11. `<ul>` para listas desordenadas.
12. `<li>` para elementos de la lista.
13. `<img alt="Texto en caso de no cargar la imagen" src="/ruta/del/archivo.jpg">` para insertar imágenes.
14. `<a href="ruta">` para crear un enlace a una página html.
15. `<table border="1">` para crear una tabla con un borde. Además, las filas se definen con `<tr>` y las columnas con `<td>`.
16. `<div>` para crear un bloque de etiquetas html dentro de esta sección. Muy utilizado para aplicar estilos CSS.
17. `<header>` para el contenido de cabecera de nuestra web.
18. `<nav>` para definir un menú.
19. `<section>` define una sección temática dentro de una página. Se utiliza para agrupar contenido relacionado.
20. `<article>` representa un contenido independiente y reutilizable, como una publicación, noticia o comentario.
21. `<aside>` para representar contenido que está relacionado de manera indirecta con el contenido principal de la página, pero que no es parte esencial de él. Este contenido aparece en forma de barras laterales o secciones adicionales que complementan el contenido principal.
22. `<footer>` para el pie de página.

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
