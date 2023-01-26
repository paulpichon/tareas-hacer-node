//importar la funcion mostrarMenu del archivo mensajes.js
// const { mostrarMenu, pausa } = require('./helpers/mensajes'); --> esto fue solo una demostracion

//colores en la consola
import colors from 'colors';
//importar inquirerMenu
//importar funcion pausa
import { inquirerMenu, pausa } from "./helpers/inquirer.js";

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
        opt = await inquirerMenu();
        console.log( {opt} );

        //pausa
        await pausa();
        

    } while ( opt !== '0');//mientras opt sea diferente de 0 el menu se repetira indefinidamente

}

//llamar el main
main();