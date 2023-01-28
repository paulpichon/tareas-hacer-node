//importar fs para crear archivo e irlos guardando
import * as fs from 'fs';


//funcion donde se iran guardando los archivos
const guardarDB = ( data ) => {
    //el archivo lo creamos como un .json
    const archivo = './db/data.json'
    //crear archivo
    //pasamo como argumento el path donde lo quiero guardar
    // writeFileSync( 'donde lo quiero grabar', 'la información que quiero grabar' )
    //debemos convertir la data en un string con JSON.stringify
    fs.writeFileSync( archivo, JSON.stringify(data) );

}
//exportar funcion
export { guardarDB };
