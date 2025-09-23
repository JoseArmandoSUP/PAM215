const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}
];

const encontrarLuis = personas.find(op => op.nombre === "Luis");
console.log(encontrarLuis, " encontrado :D");

personas.forEach(op => {console.log(op.nombre + " | " + op.edad + " años");});

const sumarEdades = personas.reduce((suma, op) => suma + op.edad, 0);
console.log("Suma de todas las edades: " + sumarEdades);