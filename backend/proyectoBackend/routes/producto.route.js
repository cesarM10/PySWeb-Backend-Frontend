//defino controlador para el manejo de CRUD
const productoCtrl = require('./../controllers/producto.controller.js');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', productoCtrl.getProductos); //http://localhost:3000/api/producto/
router.post('/', productoCtrl.createProducto);  //http://localhost:3000/api/producto/
// router.get('/:id', agenteCtrl.getAgente);
// router.put('/:id', agenteCtrl.editAgente);
// router.delete('/:id', agenteCtrl.deleteAgente);
//exportamos el modulo de rutas
module.exports = router;