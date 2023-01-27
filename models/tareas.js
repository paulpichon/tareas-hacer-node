//Clase Tareas para manejar diversas tareas
//importamos la clase Tarea
import { Tarea } from "./tarea.js";


//de esta forma se manejara el objeto de _listado
// { 'uuid-123123-123123-2: { id: 12, desc: asdasd, completadoEn: 2837948}  }

class Tareas {

    //por lo general poner esto no es necesario
    //para menejar diversas tareas usaremos un objeto
    _listado = {}

    //constructor
    constructor() {
        //inicializar _listado
        //se inicializa como un objeto vacio
        this._listado = {};
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

}


//exportar Tareas
export { Tareas };