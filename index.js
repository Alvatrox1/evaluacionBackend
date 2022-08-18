
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');

const app = express();
const port = 3030;


app.use( bodyParser.json() );
app.use( 
    bodyParser.urlencoded({
        extended : true,
    })
);

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/getExamen', db.getPreguntasSimuladas );
app.get('/getRespuestas', db.getRespuestasSimuladas);
app.post('/respuestas', db.registrarRespuesta);

app.get('/', ( request, response ) => {
    response.json({
        info : 'El Servidor de Node, Express y Postgres API'
    })
} )

app.listen( port, () => {
    console.log("Aplicación Corriendo en el Puerto : ", port );
});

