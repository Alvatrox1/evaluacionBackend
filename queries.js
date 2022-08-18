
const Pool = require('pg').Pool
const pool = new Pool({
   user : 'postgres',
   host : 'localhost',
   database : 'db_examen',
   password : 'postgres',
   port : 5432 
})

const getPreguntas = ( request, response ) => {
    pool.query('SELECT * FROM examen ', ( error, results ) => {
        if ( error ) {

            throw error;
        }
        response.status(200).json({
            status : 200,
            message : "Preguntas Obtenidas!.",
            preguntas : results.rows
        })
    })
}

const getPreguntasSimuladas = ( request, response ) => {

    const arregloPreguntasSimuladas = [
        { preg1 : "Modern Web browsers can read JSX directly" },
        { preg2 : "In a web browser a JSX file needs to be transformed into a regular JavaScript" },
        { preg3 : "DOM stands for Document Only Module" },
        { preg4 : "The next component belongs to ES6 standards" },
        { preg5 : "The next component belongs to ES6 standards" },
        { preg6 : "The next Require declaration belongs to ES6 standards" },
        { preg7 : "The next Require declaration belongs to ES6 standards" },

    ]

    response.status(200).json({
        status : 200,
        message : "Preguntas Consultadas con Exito!.",
        pregutas : arregloPreguntasSimuladas
    })

}

const getRespuestasSimuladas = ( request, response ) => {

    const arregloRespuestas = [
        { res1 : [ true, false ] },
        { res2 : [ true, false ] },
        { res3 : [ true, false ] },
        { res4 : [ true, false ] },
        { res5 : [ true, false ] },
        { res6 : [ true, false ] },
        { res7 : [ true, false ] },

    ]

    response.status(200).json({
        status : 200,
        message : "Respuestas Consultadas con Exito!.",
        respuestas : arregloRespuestas
    })

}

const getRespuestas = ( request, response ) => {
    pool.query('SELECT * FROM respuestas ', ( error, results ) => {
        if ( error ) {

            throw error;
        }
        response.status(200).json({
            status : 200,
            message : "Respuestas Obtenidas!.",
            preguntas : results.rows
        })
    })
}

const registrarRespuesta = ( request, response ) => {
    
    const {
        respuestas

    } = request.body
    
        response.status(201).send({
        status : 201,
        respuesta : results
    })

}



module.exports = {
    getPreguntasSimuladas,
    getRespuestasSimuladas,
    registrarRespuesta
}
