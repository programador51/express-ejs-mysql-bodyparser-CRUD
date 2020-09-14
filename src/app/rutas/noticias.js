/* SE EXPORTA UNA FUNCION
ESTA FUNCION, NECESITA DE EXPRESS PARA FUNCIONAR
ES POR ESO QUE ESTA RECIBIENDO EL PARAMETRO APP QUE LE PASA
EL ARCHIVO INDEX.JS
ES UNA FUNCION FLECHA PERO PUEDE SER UNA FUNCION TRADICIONAL DE JS */

/* REQUERIMOS EL MODULO DE dbConexion QUE NOS RETORNA
UNA FUNCION CON LA CONEXION A LA BD */
const dbConexion = require('../../configuracion/dbConexion.js');

module.exports = (app) =>{
    /* LA VARIABLE DE LA CONEXION QUE TENDRA LA FUNCION DE LA CONEXION
    A LA BD */
    const conexion = dbConexion(); 

    app.get('/',(req,res)=>{
        /* UNA VEZ TERMINE LA OPERACION DEL QUERY EJECUTAMOS LA FUNCION FLECHA */
        conexion.query('SELECT * FROM noticias',(err,datos)=>{
            /* ANTES DE RENDERIZAR LA PLANTILLA HTML
            DEBEMOS OBTENER LOS DATOS DE LA BD Y ENVIARLOS COMO PARAMETRO
            EN LA PETICION GET DEL CLIENTE */
            res.render('noticias/noticias.ejs',{
                noticias: datos
            });
            console.log(datos);
        });
        
    });
}