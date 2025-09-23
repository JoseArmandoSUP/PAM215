const productos = [
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mause", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000}
];

const filtrar = productos.filter(productos => productos.precio > 1000);
const nombres = filtrar.map(productos => productos.nombre); 

console.log(nombres);