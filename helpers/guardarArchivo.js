//importar fs para crear archivo e irlos guardando
import * as fs from 'fs';
//ruta del archivo BD
//el archivo lo creamos como un .json
const archivo = './db/data.json';

//funcion donde se iran guardando los archivos
const guardarDB = ( data ) => {
    //crear archivo
    //pasamo como argumento el path donde lo quiero guardar
    // writeFileSync( 'donde lo quiero grabar', 'la información que quiero grabar' )
    //debemos convertir la data en un string con JSON.stringify
    fs.writeFileSync( archivo, JSON.stringify(data) );

}
//funcion para leer los datos de la BD
const leerDB = () => {
    //si no existe el archivo
    if (!fs.existsSync(archivo)) {
        //retornamos un null ya que no existe el archivo
        return null;
    }

    //pero si existe
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    //convertir la info con json.parse
    const data = JSON.parse( info );

    console.log( data );

    return data;

}


//exportar funcion
export { 
    
    guardarDB,
    leerDB

};
