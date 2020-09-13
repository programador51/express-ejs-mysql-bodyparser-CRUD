const express = require('express');
const ruta = require('path');
const bodyParser = require('body-parser');

const app = expres();

//CONFIGURACIONES
/* Seteamos el numero del puerto para el servidor */
app.set('port',process.env.PORT||3000);
/* Seteamos el motor de plantillas */
app.set('view engine','ejs');
/* Seteamos donde esta la carpeta con los archivos "publicos" de las vistas html */
app.set('views',path.join(__dirname,'../app/vistas'));

//MIDDLEWARE
/* Como solo usaremos un formulario usamos urlencoded y seteamos el objeto
extended en false porque no estaremos enviando imagenes ni nada de eso */
app.use(bodyParser.urlencoded({extended:false}));

/* VAMOS A EXPORTAR EL OBJETO APP AL ARCHIVO INDEX*/
module.exports = app;