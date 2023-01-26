//colores en la consola
import colors from 'colors';
//importat inquirer
import inquirer from 'inquirer';


//opciones del menu
const preguntas = [
    {
      type: 'list',
      name: 'opcion',
      message: '¿Qué desea hacer?',
      choices: [
        {
            value: '1',
            name: '1. Crear tarea'
        },
        {
            value: '2',
            name: '2. Listar tareas'
        },
        {
            value: '3',
            name: '3. Listar tareas completadas'
        },
        {
            value: '4',
            name: '4. Listar tareas pendientes'
        },
        {
            value: '5',
            name: '5. Completar tareas(s)'
        },
        {
            value: '6',
            name: '6. Borrar tarea'
        },
        {
            value: '0',
            name: '0. Salir'
        }
      ],
    },
  ];


//opciones del menu creadas con inquirer
const inquirerMenu = async() => {
    //limpiar lo anterior
    console.clear();

    //construir interfaz del menu
    console.log('================================'.green);
    console.log('     Selecciona una opción      '.green);
    console.log('================================\n'.green);

    //await al prompt que se usara para hacer preguntas al usuario
    //destructuring a opt = opcion que es el name de la const preguntas
    const { opcion } = await inquirer.prompt( preguntas );

    //devolvemos opt
    return opcion;

}

//funcion pausa
const pausa = async() => {
    const question = [
        {
          type: 'input',
          name: 'enter',
          message: `Presione ${'ENTER'.green} para continuar`,
        },
    ];
    
    //para dar espacio en la consola y no se vea amontonado
    console.log('\n');
    await inquirer.prompt( question );

}

//exportar inquirerMenu
export {
    inquirerMenu,
    pausa
}