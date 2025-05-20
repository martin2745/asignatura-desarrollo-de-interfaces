# Aplicación de reglas en CSS

1. Las últimas reglas de CSS del documento tienen mayor prioridad que las primeras. En el siguiente ejemplo el color del `<h1>` sería marrón.
```css
h1 {
  color: red;
}

h1 {
  color: brown;
}
```

2. Es importante tener en cuenta que además de esto, la regla más restrictiva es la que tiene mayor preferencia. En el siguiente ejemplo el color del `<h1>` sería rojo.
```css
#saludo h1 {
  color: red;
}

h1 {
  color: brown;
}
```

3. Por último, la palabra `!important` aplica la norma como la más restrictiva con independencia de cualquier restricción aplicada. De este modo, En el siguiente ejemplo el color del `<h1>` sería marrón.
```css
#saludo h1 {
  color: red;
}

h1 {
  color: brown !important;
}
```

---

[Ir a selectores](02-selectores.md)
