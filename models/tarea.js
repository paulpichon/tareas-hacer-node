//CLASES EN JAVASCRIPT

//importar UUID
//se renombre v4 por uuidv4
import { v4 as uuidv4 } from 'uuid';

//clase TAREA
class Tarea {

    //id de la tarea
    id = '';
    // descripcion
    desc = '';
    // fecha de compleado
    completadoEn = null;

    //constructor es lo que se va a ejecutar cuando se crea una nueva instancia de la TAREA
    //en el constructor lo unico que vamos a pedir es la descripcion de la TAREA
    constructor( desc ) {
        //id no se pone como parametro/arguemnto en el constructor ya que vamos a ser nocostros quienes lo creemos
        this.id = uuidv4();
        //es lo unico que se va a pedir a usuario
        this.desc = desc;
        //completadoEn en teoria seria lo mismo que
        //this.completadoEn = completadoEn;
        this.completadoEn = null;
    }



}


//exportamos la clase
export { Tarea } ;