//colores en la consola
import colors from 'colors';
//importat inquirer
import inquirer from 'inquirer';
//Clase Tareas para manejar diversas tareas
//importamos la clase Tarea
import { Tarea } from "./tarea.js";


//de esta forma se manejara el objeto de _listado
// { 'uuid-123123-123123-2: { id: 12, desc: asdasd, completadoEn: 2837948}  }

class Tareas {

    //por lo general poner esto no es necesario
    //para menejar diversas tareas usaremos un objeto
    _listado = {}

    //getter
    //basicamente es como si tuviera una propiedad en la clase aunque en realidad no lo es
    get listadoArr() {
        //creamos un arreglo donde se iran insertando las tareas
        const listado = [];

        //extraer cada una de las llaves del objeto
        //al ser un arreglo lo podemos recorrer con foreach
        Object.keys( this._listado ).forEach( key => {
            //obtener la tarea
            const tarea = this._listado[key];

            //insertar el listado
            //al ser un arreglo usamos .push() para insertar la tarea
            listado.push( tarea );
        })

        return listado;

    }

    //constructor
    constructor() {
        //inicializar _listado
        //se inicializa como un objeto vacio
        this._listado = {};
    }

    //funcion para cargar Tareas del array
    cargarTareasFromArray( tareas = []) {
        
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });

    }


    //metodo crear tarea
    //se espera como argumento la descripcion de la tarea que se quiere registrar
    crearTarea( desc = '' ) {
        //crear una nueva instancia de la Tarea
        //y le pasamos la desc como argumento
        const tarea = new Tarea( desc );

        //insertar la tarea a el objeto _listado
        this._listado[tarea.id] = tarea;

    }

    //listado completo
    listadoCompleto() {
        //se puede usar tanto _listado como listadoArr
        // console.log( this.listadoArr );
        console.log();

        this.listadoArr.forEach( (tarea, index) => {
            const { desc, completadoEn } = tarea;
            //indice de las tareas
            const idx = `${index + 1}`.green;
            //estado de las tares
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${ estado }`);
        });
        
        // console.log( this.listadoArr );


        //si completada !== null = Completado de lo contrario Pendiente

        //1: verde
        // Completada: verde
        // Pendiente : rojo


        // 1. Alma :: Completada | Pendiente
        // 2. Realidad :: Completada | Pendiente
        // 3. Vida :: Completada | Pendiente
        // 4. Corazon :: Completada | Pendiente

    }

}


//exportar Tareas
export { 
        Tareas
    };