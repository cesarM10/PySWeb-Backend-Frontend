const Producto = require('../models/producto');

const productoCtrl = {};
productoCtrl.getProductos = async (req, res) => {
    var productos = await Producto.find();
    res.json(productos);
}

productoCtrl.createProducto = async (req, res) => {
    console.log(req.body);
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Producto guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

module.exports = productoCtrl;