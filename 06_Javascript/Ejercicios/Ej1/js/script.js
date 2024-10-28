alert("Hola que tal");
let nombre = "Martín Gil Blanco";
let edad = 24;
let pais = "España";
let conocimientos = ["html", "css", "javascript"];

console.log(`Hola soy ${nombre}, tengo ${edad} años, vivo en ${pais}
y tengo los siguiente conocimientos ${conocimientos[0]}, ${conocimientos[1]}, ${conocimientos[2]}`);

edad = 67;
conocimientos.push("java");

console.log("Ahora tengo " + edad + " años y he aprendido " + conocimientos[3]);