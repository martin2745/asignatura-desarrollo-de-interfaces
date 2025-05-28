# Medidas absolutas y relativas

Las medidas en CSS se dividen en dos grandes categorías: **medidas absolutas** y **medidas relativas**. Cada tipo tiene usos específicos y características que influyen en el diseño web, especialmente en la adaptabilidad y la responsividad.

## Medidas Absolutas en CSS

Las medidas absolutas son unidades fijas que representan dimensiones físicas o fijas en pantalla, sin importar el contexto o tamaño del contenedor o la ventana. Son ideales para situaciones donde se requiere un tamaño exacto, como en impresión o diseños estáticos.

Las principales unidades absolutas son:

- **px (píxeles):** Es la unidad absoluta más usada en pantallas. Representa una unidad fija que equivale a 1/96 de pulgada, aunque no siempre corresponde a un píxel físico exacto en la pantalla debido a la densidad de píxeles del dispositivo. Es útil para tamaños fijos, como iconos o textos que deben mantener su tamaño sin importar el dispositivo.

- **cm (centímetros), mm (milímetros), in (pulgadas):** Unidades físicas usadas principalmente para impresión. Por ejemplo, 1 pulgada equivale a 2.54 cm o 96 px.

- **pt (puntos) y pc (picas):** Un punto equivale a 1/72 de pulgada, y una pica equivale a 12 puntos. También son unidades tradicionales usadas en tipografía y diseño impreso.

Estas unidades no se adaptan al tamaño de pantalla ni al contexto del elemento, por lo que su uso en diseño web responsive es limitado.

## Medidas Relativas en CSS

Las medidas relativas dependen del contexto, ya sea del tamaño del contenedor, del tamaño de fuente base o del viewport (ventana gráfica del navegador). Son fundamentales para crear diseños adaptativos y responsivos.

### Principales unidades relativas:

- **em:** Representa el tamaño relativo al *font-size* del elemento padre o del propio elemento. Por ejemplo, 1em equivale al tamaño de fuente actual, y 2em sería el doble. Es útil para escalar tamaños de texto o elementos relacionados con la tipografía.

- **rem:** Similar a em, pero siempre relativo al tamaño de fuente del elemento raíz (`html`). Esto permite mantener una escala consistente en toda la página, independientemente de la jerarquía de elementos. Por ejemplo, si el tamaño base del `html` es 16px, 1rem equivale a 16px.

- **% (porcentaje):** Se calcula en relación con el tamaño del contenedor padre. Por ejemplo, un ancho de 50% significa la mitad del ancho del contenedor. Muy usado para anchos y alturas en layouts flexibles.

- **vh (viewport height):** Equivale al 1% de la altura visible de la ventana del navegador. Por ejemplo, 100vh es la altura completa del viewport, y 50vh es la mitad. Se utiliza para definir alturas que se ajustan al tamaño de la pantalla, muy útil en diseño responsive.

- **vw (viewport width):** Equivale al 1% del ancho visible de la ventana del navegador. Similar a vh, pero para anchos. Por ejemplo, 100vw es el ancho completo del viewport.

- **vmin y vmax:** Unidades relativas al valor mínimo o máximo entre vh y vw, útiles para diseños que deben adaptarse proporcionalmente al menor o mayor lado del viewport.

### Resumen comparativo

| Unidad | Tipo       | Referencia                         | Uso común                           | Ventajas                             |
|--------|------------|----------------------------------|-----------------------------------|------------------------------------|
| px     | Absoluta   | Píxel fijo (1/96 pulgada)        | Tamaños fijos, iconos, bordes     | Precisión, consistencia             |
| em     | Relativa   | Tamaño de fuente del elemento    | Texto, espaciados basados en fuente| Escala con contexto, flexible      |
| rem    | Relativa   | Tamaño de fuente del root (`html`)| Texto, tamaños consistentes       | Escala uniforme en toda la página  |
| %      | Relativa   | Tamaño del contenedor padre      | Anchos, alturas, layouts          | Adaptable a contenedor             |
| vh     | Relativa   | 1% de altura del viewport        | Alturas adaptativas               | Responsive según altura pantalla   |
| vw     | Relativa   | 1% de ancho del viewport         | Anchos adaptativos                | Responsive según ancho pantalla    |

---

## Unidades recomendadas para el desarrollo web

![Unidades recomendadas para el desarrollo web](./Recursos/Unidades%20recomendadas%20para%20el%20desarrollo%20web.png)