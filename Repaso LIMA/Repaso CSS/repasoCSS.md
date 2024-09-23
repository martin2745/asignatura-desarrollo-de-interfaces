### Repaso contenido CSS

Referenciamos a la hoja de estilos con la etiqueta `<link>` como en el siguiente caso para enlazar una hoja de estilos CSS externa, llamada `styles.css`

```html
<link rel="stylesheet" href="styles.css" />
```

- **`rel="stylesheet"`** indica que el archivo es una hoja de estilos.
- **`href="styles.css"`** especifica la ubicación del archivo CSS que contiene los estilos para la página.

#### Aplicar estilos a elementos

Existen tres formas distintas de aplicar estilos a los elementos.

1. Por nombre de etiqueta.

```css
body {
  background: lightgray;
}
```

2. Por indetificador.

```css
#container {
  width: 70%;
  margin: 0px auto;
  border: 1px solid black;
}
```

3. Por clase.

```css
.article {
  width: 20%;
}
```

#### Diferencia entre margin y padding

- **`margin`**: Es el espacio externo alrededor de un elemento. Se usa para separar el elemento de otros elementos o del borde de su contenedor.

- **`padding`**: Es el espacio interno dentro de un elemento, entre el contenido del elemento y su borde. Se usa para crear espacio dentro del elemento, alrededor de su contenido.
