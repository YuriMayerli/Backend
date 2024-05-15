const mongoose = require('mongoose');

//este modelo que vamos a hacer debe ser igual a lo que tenga la BD

const productoSchema = mongoose.Schema({

nombre: {
    type: String,
    required: true
},

categoria: {
    type: String,
    required: true
},

codigo: {
    type: Number,
    required: true
},

precio: {
    type: Number,
    required: true
},



},{versionkey: false});

module.exports = mongoose.model('Producto', productoSchema);








