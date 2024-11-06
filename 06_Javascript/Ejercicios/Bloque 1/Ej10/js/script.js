const sueldos = [1050, 650, 750, 1500, 2200, 3000, 450];

let sueldoUsuario = parseInt(prompt("Dime tu salario: ", 0));

const buscarSueldo = (salarios, miSueldo) => {
    let busqueda = salarios.filter(salario => {
        if(salario >= miSueldo) {
            return salario;
        }
    });

    console.log(busqueda.sort());
}

buscarSueldo(sueldos, sueldoUsuario);