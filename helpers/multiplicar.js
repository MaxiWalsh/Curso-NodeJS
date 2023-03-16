const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5,listar=false, hasta=10) => {
    try {
        let salida = '';
        let consola = '';
        
        for (let i = 1; i<=hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.red} ${i} ${'='.red} ${colors.bold(base * i)}\n`;
            
        }
        
        if( listar ) {
            console.log('============'.white);
            console.log('Tabla del '.red, colors.red(base));
            console.log('============'.white);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        console.log(`tabla-${base} creado con exito`);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}


const crearArchivoPromise = (base = 5) => {
    
    return new Promise( (resolve, reject) => {
        let salida = '';
        console.log('============');
        console.log('Tabla del ', base);
        console.log('============');
        
        for (let i = 1; i<=10; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`, salida)
        console.log(`tabla-${base} creado con exito`);
        resolve(`tabla-${base}.txt`);
    })
    
    
}

module.exports = {
    crearArchivo
}


//crearArchivo: crearArchivo -> esto es reduntante, es decir
//tener una propiedad cuyo valor apunta a una constante o variable que tiene el mismo nombre es reduntante y se lo puede dejar de la manera que esta arriba


//De esta forma se exportan las funciones desde un archivo para importarlas en otro
//el crearArchivo de la izquierda apunta a la función crearArchivo. Puede llamarse de cualquier forma