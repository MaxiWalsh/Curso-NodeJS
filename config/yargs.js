//Esto viene a partir del video 34
const argv = require('yargs')
                .options({
                        'b': {
                                alias: 'base',
                                type: 'number',
                                demandOption: true,     //Esta prop es para especificar que este argumento es requerido
                                describe: 'Es la base de la tabla de multiplicar'
                        },
                        'l': {
                                alias: 'list',
                                type: 'boolean',
                                default: false,
                                describe: 'Muestra la tabla en consola'
                        },
                        'h': {
                                alias: 'hasta',
                                type: 'number',
                                default: 10,
                                describe: 'Limite hasta donde se hará la tabla'
                        },
                })
                .check((argv, options) => {
                        if (isNaN(argv.b)){
                                throw ('La base debe ser un numero')
                        }
                        return true;
                })
                .argv 

module.exports = argv;      //exportando configuración de yargs