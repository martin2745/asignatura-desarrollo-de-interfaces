# Práctica CSS Grid: Preguntas sobre Grid

Dado el siguiente fragmento de código HTML y CSS, tu tarea es analizar cómo se distribuirán los elementos en una cuadrícula (grid) CSS y describir cómo se verá el resultado en el navegador. Para ello, deberás responder a las preguntas que se muestran a continuación.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio Grid Avanzado</title>
    <link rel="stylesheet" type=”text/css” src="style.css">
</head>
<body>
    <div class="grid-container">
        <div class="grid-item item1">1</div>
        <div class="grid-item item2">2</div>
        <div class="grid-item item3">3</div>
        <div class="grid-item item4">4</div>
        <div class="grid-item item5">5</div>
    </div>
</body>
</html>
```

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 100px auto;
    gap: 10px;
    padding: 10px;
    background-color: #f0f0f0;
}
.grid-item {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 20px;
    font-size: 30px;
}
.item1 {
    grid-column: 1 / 4;
    grid-row: 1;
}
.item2 {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
}
.item3 {
    grid-column: 2 / 3;
    grid-row: 2;
}
.item4 {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
}
.item5 {
    grid-column: 2 / 4;
    grid-row: 3;
}
```

### Preguntas
- ¿Cuántas columnas y filas tiene la cuadrícula?
- ¿Qué tamaño tienen las columnas y filas?
- ¿Cómo se posicionarán y qué tamaño tendrán los elementos dentro de la cuadrícula?
- ¿Cuál será el espacio entre los elementos?
- ¿Cómo se visualizará la página? Dibuja un esquema.