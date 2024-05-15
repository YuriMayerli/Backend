const express = require('express');
const conectarBD = require ('../config/db');
const cors = require ('cors');

// configuracion express y puerto
const app = express();
const port = process.env.PORT || 5000;


// enlazamos la conexion de la base de datos
conectarBD();
app.use(cors());
app.use(express.json());    


app.use('/api/clientes', require('../routes/RoutesCliente'));
app.use('/api/producto', require('../routes/RoutesProducto'));




app.listen(port, () => console.log('Servidor conectado http://localhost:5000'));

app.get('/', (req,res) =>{

    res.send("Bienvenido, nuestro servidor esta configurado");
});