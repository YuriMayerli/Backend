const Producto = require('../models/Producto');

exports.agregarProducto = async (req, res) => {
    try {
        let producto = new Producto(req.body); // Crear instancia de Producto
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un producto');
    }
}

exports.mostrarProducto = async (req, res) => {
    try {
        let productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obtener los productos');
    }
}

exports.mostrarUnProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({msg: 'No se encuentra el producto con ese ID'});
        }
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al buscar un producto');
    }
}

exports.eliminarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({msg: "El producto no existe"});
        }
        await Producto.findByIdAndDelete(req.params.id);
        res.json({msg: "El producto fue eliminado"});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar un producto en la BD');
    }
}

exports.modificarProducto = async (req, res) => {
    try {
        let producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!producto) {
            return res.status(404).send('Producto no encontrado');
        }
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar un producto en la BD');
    }
}
