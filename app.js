//importar la funcion mostrarMenu del archivo mensajes.js
const { mostrarMenu, pausa } = require('./helpers/mensajes');

//colores en la consola
require('colors');
//limpiar la consola
console.clear();

//funcion asincrona
const main = async() => {

    console.log('Hola Mundo');

    mostrarMenu();

    // pausa();

}

//llamar el main
main();