let sueldo = parseInt(prompt("Dime tu salario: "));
let resultado = document.getElementById("resultado");

switch (true) {
    case sueldo <= 500:
        resultado.innerHTML = "Trabajas a media jornada";
        break;
    case sueldo <= 1000:
        resultado.innerHTML = "Tienes el salario mínimo";
        break;
    case sueldo <= 1500:
        resultado.innerHTML = "Tienes un salario normal";
        break;
    case sueldo <= 2000:
        resultado.innerHTML = "Tienes un salario bueno";
        break;
    default:
        resultado.innerHTML = "Tienes un salario excelente o muy alto";
        break;
}
