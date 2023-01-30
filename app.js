//importar la funcion mostrarMenu del archivo mensajes.js
// const { mostrarMenu, pausa } = require('./helpers/mensajes'); --> esto fue solo una demostracion

//colores en la consola
//aunque se vea que no se esta ocupando esta importacion en realidad si se usa
import colors from 'colors';
//importar funcion para guardar informacion en el archivo
import {    guardarDB, 
            leerDB
        } from './helpers/guardarArchivo.js';

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
    //debe estar fuera del ciclo do while para que no se reinicie
    const tareas = new Tareas();



    //leer las tareas de DB
    const tareasDB = leerDB();
    //verificar si tareaDB existe establecemos las tareas
    if ( tareasDB) {
        //establecer las tareas

        //cargar tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

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
                //listar tareas
                // console.log( tareas.listadoArr );
                tareas.listadoCompleto();
            break;
            case '3':
                //listar tareas completadas
                tareas.listarPendientesCompletadas( true );
            break;
            case '4':
                //listar tareas pendientes
                tareas.listarPendientesCompletadas( false );
            break;
        }

        //funcion opara guardar informacion en el archivo dentro de la carpeta DB
        //y como argumento pasamos el arreglo  tareas.listadoArr
        guardarDB( tareas.listadoArr );


        //pausa
        await pausa();
        

    } while ( opt !== '0');//mientras opt sea diferente de 0 el menu se repetira indefinidamente

}

//llamar el main
main();