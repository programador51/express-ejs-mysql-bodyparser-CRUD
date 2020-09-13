/* Como es un archivo de configuracion para express
lo nombramos app */
const app = require('./configuracion/servidor');


require('./app/rutas/noticias')(app);

//Iniciar el servidor
app.listen(app.get('port'),()=>{
    console.log(`Servidor conectado al servidor. Puerto ${app.get('port')}`);
});