const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');   //Importando configuracion de yargs
const colors = require('colors');

crearArchivo(argv.b, argv.l, argv.h)
        .then(nombreArchivo => console.log(nombreArchivo.blue, 'creado.'))
        .catch(err => console.log(err, 'asd'));