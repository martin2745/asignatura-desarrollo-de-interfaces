# MediaQueries en CSS

Los **media queries** son una herramienta clave en **CSS** para crear páginas web responsivas, es decir, páginas que se adaptan a diferentes tamaños de pantalla y dispositivos (móviles, tablets, laptops, etc.). A continuación te explico cómo usarlos para que tu sitio web sea **responsivo**.

## ¿Qué es un Media Query?

Un **media query** permite aplicar estilos CSS solo si se cumplen ciertas condiciones, como el ancho de la pantalla. Con esto, puedes definir diferentes estilos para distintos dispositivos, mejorando la usabilidad y el diseño en cada uno.

## Sintaxis básica de un Media Query

```css
@media (condición) {
  /* Estilos CSS aquí */
}
```

## Condiciones más comunes:

1. **`min-width`**: Estilos aplicados cuando el ancho de la pantalla es **mayor o igual** a un valor específico.
2. **`max-width`**: Estilos aplicados cuando el ancho de la pantalla es **menor o igual** a un valor específico.

### Ejemplo básico

```css
/* Estilos generales para dispositivos grandes */
body {
  background-color: lightblue;
}

/* Para pantallas de 768px o menos (tablets y móviles) */
@media (max-width: 768px) {
  body {
    background-color: lightgreen;
  }
}

/* Para pantallas de 480px o menos (móviles pequeños) */
@media (max-width: 480px) {
  body {
    background-color: lightcoral;
  }
}
```

---

[Ir a pseudoclases, transiciones y animaciones](09-pseudoclases-transiciones-y-animaciones.md)
