let concesionario = [
    {
        marca: "mercedes",
        modelos: ["A", "B", "C"]
    },
    {
        marca: "audi",
        modelos: ["a4", "a5", "a6"]
    },
    {
        marca: "renault",
        modelos: ["clio", "megan", "captus"]
    }
];

for(escuderia of concesionario){
    console.log(escuderia.marca);
    console.log(escuderia.modelos);
}

for(x in concesionario){
    console.log(concesionario[x].marca);
    console.log(concesionario[x].modelos);
}

const mostrarDatos = datosConcesionario => {
    datosConcesionario.forEach(e => {
        console.log(e.marca);
        console.log(e.modelos);
    });
}

mostrarDatos(concesionario);