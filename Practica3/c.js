function APIsim(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos(){
    console.log("Cargando datos");
    const resultado = await APIsim();
    console.log(resultado);
}

obtenerDatos();