//colores en la consola
import colors from 'colors';
//importat inquirer
import inquirer from 'inquirer';


//opciones del menu
const preguntas = [
    {
      type: 'list',
      name: 'opcion',
      message: '¿Qué desa hacer?',
      choices: [
        '1. Crear lista',
        'opt2',
        'opt3'
      ],
    },
  ];


//opciones del menu creadas con inquirer
const inquirerMenu = async() => {
    //limpiar lo anterior
    // console.clear();

    //construir interfaz del menu
    console.log('================================'.green);
    console.log('     Selecciona una opción      '.green);
    console.log('================================\n'.green);

    //await al prompt que se usara para hacer preguntas al usuario
    const opt = await inquirer.prompt( preguntas );

    //devolvemos opt
    return opt;

}

//exportar inquirerMenu
export {
    inquirerMenu
}