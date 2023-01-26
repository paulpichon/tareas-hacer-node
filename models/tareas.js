//Clase Tareas para manejar diversas tareas

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

}


//exportar Tareas
export { Tareas };