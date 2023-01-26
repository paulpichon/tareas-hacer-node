//importar la funcion mostrarMenu del archivo mensajes.js
const { mostrarMenu, pausa } = require('./helpers/mensajes');

//colores en la consola
require('colors');
//limpiar la consola
console.clear();

//funcion asincrona
const main = async() => {

    //definimos opt como un string vacio
    let opt = '';

    do {
        
        //al tener promesas en mensajes.js
        //podemos hacer uso de await
        //lo que le estamos diciendo es que mostrarMenu() debe esperar hastaque tenga una resolucion
        opt = await mostrarMenu();
        console.log( {opt} );
        //salir del menu de la aplicacion
        if( opt !== '0') await pausa();
        

    } while ( opt !== '0');//mientras opt sea diferente de 0 el menu se repetira indefinidamente


    // pausa();

}

//llamar el main
main();