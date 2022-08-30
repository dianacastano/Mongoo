const app = require('./app');
// Base de datos
require('./database');


// Middlewares para la carga de las rutas de cada endpoint correspondiente

app.use('/profesionales', require('./routes/profesionales.routes'));
app.use('/peliculas', require('./routes/peliculas.routes'));


// Respuesta a cualquier petición en '/'
app.all('/', (req, res) => {
    let respuesta = { ok: true, message: 'Punto de inicio /' }
    res.status(200).send(respuesta);
})

// Respuesta a cualquier endponit erroneo
app.use((req, res) => {
    respuesta = {ok: false, codigo: 404, mensaje: 'URL no encontrada'};
    res.status(404).send(respuesta);
})