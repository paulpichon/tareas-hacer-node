//importar la funcion mostrarMenu del archivo mensajes.js
// const { mostrarMenu, pausa } = require('./helpers/mensajes'); --> esto fue solo una demostracion

//colores en la consola
//aunque se vea que no se esta ocupando esta importacion en realidad si se usa
import colors from 'colors';
//importar inquirerMenu
//importar funcion pausa
import {    inquirerMenu, 
            pausa,
            leerInput
        } from "./helpers/inquirer.js";
//se importa clase Tareasssss
import { Tareas } from './models/tareas.js';

//funcion asincrona
const main = async() => {

    //definimos opt como un string vacio
    let opt = '';
    //creamos una nueva instancia de Tareas()
    //debe estar fuera del cilco do while para que no se reinicie
    const tareas = new Tareas();

    do {
        //imprimir el menu
        //al tener promesas en mensajes.js
        //podemos hacer uso de await
        //lo que le estamos diciendo es que mostrarMenu() debe esperar hastaque tenga una resolucion
        opt = await inquirerMenu();
        

        //
        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripcion:');
                //para mostrar la tarea en el _listado
                tareas.crearTarea( desc );
            break;
            
            case '2':
                console.log( tareas.listadoArr );
            break;
        }


        //pausa
        await pausa();
        

    } while ( opt !== '0');//mientras opt sea diferente de 0 el menu se repetira indefinidamente

}

//llamar el main
main();