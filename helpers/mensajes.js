//colores para la consola
require('colors');

//funcion para mostrar menu
const mostrarMenu = () => {

    //limpiar consola
    console.clear();

    //construir interfaz del menu
    console.log('================================'.green);
    console.log('     Selecciona una opción      '.green);
    console.log('================================\n'.green);

    console.log(`${'1.'.green} Crear Lista`);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'0.'.green} Salir \n`);

    //recibir informacion del usuario
    //preparar la interfaz para el usuario con readline
    //esta interfas es para recibir y mandar informacion al usuario
    const readline = require('readline').createInterface({
        //para esperar cierta informacion por parte del usuario
        input: process.stdin,
        //para mostrar cierto mensjae al usuario cuando esta interactuando
        output: process.stdout
    });

    readline.question('Seleccione una opción: ', (opt) => {
        // console.log({ opt });
        //cerrar el readline de lo contrario se va aquedar esperando informacion
        readline.close();
    });


}

//pausa
const pausa = () => {
    //recibir informacion del usuario
    //preparar la interfaz para el usuario con readline
    //esta interfas es para recibir y mandar informacion al usuario
    const readline = require('readline').createInterface({
        //para esperar cierta informacion por parte del usuario
        input: process.stdin,
        //para mostrar cierto mensjae al usuario cuando esta interactuando
        output: process.stdout
    });

    readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
        //cerrar el readline de lo contrario se va aquedar esperando informacion
        readline.close();
    });
}




//exportar la funcion mostrarMenu al archivo app
//exportamos como un objeto porque puede que se exporte mas funciones
module.exports = {
    mostrarMenu,
    pausa
}