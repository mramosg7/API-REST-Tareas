const express = require('express')
const cors = require('cors')
const rutaTarea = require('./rutas/tarea')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json'); 

const app = express()
const port= 3900


app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/tarea', rutaTarea)
app.get("/prueba",(req, res)=>{
    console.log("endPoint prueba")
    res.status(200).send({
        prueba: "hola"
    })
})

app.listen(port, ()=>{
    console.log("servidor de node corriendo en el puerto: " + port)

})