### 1. **Hoja de estilos externa**

Esta es la forma más común de agregar CSS y consiste en enlazar un archivo CSS separado desde el documento HTML usando la etiqueta `<link>`. El archivo externo contiene todas las reglas de estilo.

**Ventajas:**

- El archivo CSS se puede reutilizar en varias páginas.
- El código HTML se mantiene limpio y separado del diseño.
- Mejora la mantenibilidad y organización del proyecto.

**Sintaxis:**

```html
<link rel="stylesheet" href="styles.css" />
```

**Descripción:**

- `rel="stylesheet"` especifica que el archivo enlazado es una hoja de estilos.
- `href="styles.css"` indica la ruta al archivo CSS.

### 2. **Estilos en línea (inline CSS)**

El CSS se escribe directamente dentro de la etiqueta HTML a través del atributo `style`. Esto se usa para aplicar estilos rápidamente a un elemento en particular, pero no es ideal para proyectos grandes.

**Ventajas:**

- Permite agregar estilos a elementos específicos sin la necesidad de un archivo CSS o sección de `<style>`.
- Útil para cambios o ajustes pequeños y rápidos.

**Desventajas:**

- No es reutilizable.
- Difícil de mantener.
- Aumenta el tamaño del HTML y dificulta la lectura.

**Sintaxis:**

```html
<p style="color: red; font-size: 16px;">Este es un texto con estilo en línea</p>
```

**Descripción:**

- `style="color: red; font-size: 16px;"` aplica estilos específicos a ese párrafo (`<p>`).

### 3. **Hoja de estilos interna (internal CSS)**

Se coloca CSS dentro del mismo documento HTML, pero separado del contenido HTML. Este método utiliza una etiqueta `<style>` dentro de la sección `<head>`. Es útil si necesitas aplicar estilos solo a una página específica.

**Ventajas:**

- Los estilos se aplican a toda la página sin depender de archivos externos.
- Es útil para páginas pequeñas o cuando se quieren probar estilos rápidamente.

**Desventajas:**

- No es reutilizable en otras páginas.
- Puede dificultar la organización del proyecto si el documento crece en tamaño.

**Sintaxis:**

```html
<style>
  body {
    background-color: lightblue;
  }
  h1 {
    color: navy;
  }
  p {
    font-size: 14px;
  }
</style>
```

**Descripción:**

- La etiqueta `<style>` contiene todas las reglas de estilo aplicables al documento HTML.
- El estilo afecta a todos los elementos del documento (por ejemplo, `h1`, `p`, etc.).

### A modo de resumen:

- **Hoja externa** (`<link rel="stylesheet">`): Ideal para proyectos grandes y mantenibles.
- **En línea** (`style="..."`): Útil para estilos rápidos y específicos.
- **Hoja interna** (`<style>`): Adecuada para páginas pequeñas o pruebas rápidas.

---

[Ir a aplicación de reglas](01-aplicacion-reglas.md)
