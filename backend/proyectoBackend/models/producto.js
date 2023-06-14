const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductoSchema = new Schema({
 nombre: {type: String, required: true},
 descripcion: {type: String, required: true},
 imagen: {type:String, required: false},
 precio: {type: Number, required:true},
 stock: {type: Number, required: true},
 destacado: {type: Boolean, required: true}
})
module.exports = mongoose.models.ProductoSchema || mongoose.model('Producto', ProductoSchema);