# Bloque 1

**Ejercicio 1**

Crea un código que muestre un mensaje de bienvenida con alert que diga "Hola que tal". Luego, define las variables nombre, edad, pais y conocimientos (un array con tres tecnologías que domines). Utiliza console.log para mostrar un mensaje con tu nombre, edad, país y los conocimientos que tienes. Después, modifica tu edad y agrega un nuevo conocimiento al array. Finalmente, vuelve a mostrar tu edad y los conocimientos en la consola.

**Ejercicio 2**

Crea las variables marca, velocidad, stock (de tipo booleano) y modelos (un array con los nombres de tres modelos). Luego, genera una frase que diga: "Tenemos coches de la marca ${marca}, pueden ir hasta ${velocidad} km/h", la cual se muestra en pantalla en el HTML. Si el valor de stock es true, muestra los modelos disponibles en el HTML dentro de un elemento con el id caja. Utiliza JavaScript para agregar los modelos de manera dinámica.

```html
<div id="caja">
  <!--Vamos a añadir contenido aquí-->
</div>
```

```js
let marca = "Audi",
  velocidad = 200,
  stock = true,
  modelos = ["R8", "A5", "A3"];
```

**Ejercicio 3**

Crea un programa que pida al usuario su salario mediante un prompt y lo almacene en la variable sueldo. Luego, utilizando una estructura switch, muestra un mensaje en función del valor del salario. Si el salario es menor o igual a 500, indica que trabaja a media jornada; si es menor o igual a 1000, muestra que tiene el salario mínimo; si es menor o igual a 1500, muestra que tiene un salario normal; si es menor o igual a 2000, muestra que tiene un salario bueno; y si supera los 2000, indica que tiene un salario excelente o muy alto. El mensaje debe ser mostrado en el elemento HTML con el id resultado.

```html
<div id="resultado">
  <!--Vamos a añadir contenido aquí-->
</div>
```

**Ejercicio 4**

1. **Bucle `for`:**  
   Crea un bucle `for` que itere 5 veces, mostrando en consola el mensaje "Iteración número: [número]" donde `[número]` es el valor de la iteración.

2. **Bucle `while`:**  
   Crea un bucle `while` que también itere 5 veces, mostrando el mismo mensaje que en el paso anterior.

3. **Bucle `do...while`:**  
   Crea un bucle `do...while` que realice 5 iteraciones y muestre el mismo mensaje en consola.

4. **Bucle `for...of` con array y string:**  
   Crea un array con los valores "manzana", "banana", "cereza" y utiliza un bucle `for...of` para mostrar cada uno de los elementos del array.  
   Luego, usa otro `for...of` para mostrar cada letra de la primera fruta del array (es decir, "manzana").

5. **Bucle `for...in` con objeto:**  
   Crea un objeto con las propiedades `nombre`, `edad`, y `ciudad` y usa un bucle `for...in` para iterar sobre las propiedades del objeto y mostrar cada una con su valor.

6. **Funciones:**
   - **Declaración de función:** Crea una función `saludar` que reciba un nombre como parámetro y devuelva un saludo personalizado.
   - **Expresión de función:** Crea una función `despedir` de tipo expresión, que reciba un nombre y devuelva un mensaje de despedida.
   - **Funciones flecha:**
     - Crea una función flecha `multiplicar` que reciba dos parámetros y devuelva su producto.
     - Crea una función flecha `cuadradoA` que devuelva el cuadrado de un número.
     - Crea una función flecha `numero` que devuelva la suma de 2 + 1.
   - **Función con parámetros variables:** Crea una función `sumaTodos` que reciba un número indefinido de parámetros, los sume y muestre el resultado en consola.

**Ejercicio 5**

Crea una interfaz que muestre las tablas de multiplicar del 1 al 10. En el HTML, incluye un título que diga "Tabla de multiplicar" y una sección donde se mostrarán las tablas. Utiliza CSS para centrar el contenido y usa flexbox para adaptar el contenido al tamaño de la ventana. En el JavaScript, usa un bucle para generar las tablas de multiplicar del 1 al 10, mostrando cada resultado de la multiplicación en una lista dentro de un contenedor para cada número.

```html
<h1>Tabla de multiplicar</h1>
<section class="tabla">
  <!--Vamos a añadir contenido aquí-->
</section>
```

**Ejercicio 6**

Crea un programa que calcule la edad de una persona a partir de su año de nacimiento. Utiliza una función flecha para obtener el año actual y otra para solicitar el año de nacimiento al usuario. Asegúrate de validar que el año ingresado sea un número válido y esté dentro del rango de años (entre 1900 y el año actual). Si el usuario introduce un valor incorrecto, muestra un mensaje de error y pide el año nuevamente. Finalmente, muestra la edad calculada.

**Ejercicio 7**

Crea un programa que pida al usuario que introduzca una palabra. Luego, utiliza una función que convierta la palabra a mayúsculas y calcule la cantidad de letras que tiene. La función debe devolver un mensaje que indique la palabra en mayúsculas y su longitud. Muestra este mensaje utilizando un alert.

**Ejercicio 8**

Crea un programa que permita al usuario reemplazar una palabra en una frase. Primero, muestra una frase predefinida y solicita al usuario que elija una palabra de esa frase para reemplazarla. Luego, pide al usuario que ingrese la palabra de reemplazo. Utiliza una función que busque la palabra original en la frase y la reemplace por la nueva palabra. Si la palabra original no se encuentra en la frase, muestra un mensaje indicando que la palabra no existe. Finalmente, muestra el resultado utilizando un alert.

**Ejercicio 9**

Define un array llamado `concesionario` que contiene una lista de objetos. Cada objeto representa una marca de coches con sus respectivos modelos. Luego, realiza las siguientes acciones:

1. **Bucle `for...of`:** Recorre el array `concesionario` con un bucle `for...of` y muestra en la consola la marca y los modelos de cada objeto.

2. **Bucle `for...in`:** Utiliza un bucle `for...in` para recorrer los índices del array `concesionario`, y muestra en consola la marca y los modelos de cada elemento.

3. **Función `mostrarDatos` con `forEach`:** Crea una función llamada `mostrarDatos` que reciba el array de concesionarios como parámetro. Dentro de la función, utiliza el método `forEach` para mostrar en consola la marca y los modelos de cada objeto del array.

```js
let concesionario = [
  {
    marca: "mercedes",
    modelos: ["A", "B", "C"],
  },
  {
    marca: "audi",
    modelos: ["a4", "a5", "a6"],
  },
  {
    marca: "renault",
    modelos: ["clio", "megan", "captus"],
  },
];
```

**Ejercicio 10**

Define un array sueldos que contenga varios valores de salarios. Luego, pide al usuario que introduzca su propio salario mediante un prompt y almacénalo en la variable `sueldoUsuario`.

Crea una función buscarSueldo que reciba dos parámetros: el array de salarios y el salario del usuario. La función debe filtrar el array para obtener los salarios que sean iguales o mayores al del usuario, ordenarlos en orden ascendente y mostrarlos en la consola. Llama a la función buscarSueldo con el array sueldos y el salario introducido por el usuario.

```js
const sueldos = [1050, 650, 750, 1500, 2200, 3000, 450];
```
