const mongoose = require('mongoose');
require('dotenv').config();

// funcion  para hacer la conexión

const conectarBD = () =>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Estamos conectados con mongoDB"))
    .catch((err) => console.error(err));
}

module.exports = conectarBD;