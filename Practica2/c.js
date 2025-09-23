const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}
];

const encontrarLuis = personas.find(enLuis => enLuis.nombre === "Luis");
console.log(encontrarLuis + " encontrado");
