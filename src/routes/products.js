// Modulos
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
const validationsProduct = require ('../middlewares/validateProductsForm')

// Controller
const productsController = require('../controllers/productsController');

// Middlewares
const upload = require('../middlewares/uploadProductsMiddleware')
// Mostrar Catalogo Completo
router.get('/', productsController.list);

// CREAR NUEVO PRODUCTO

// Formulario de Creacion
router.get('/add',authMiddleware, productsController.add)
// Guardar Nuevo Producto
router.post('/create',authMiddleware, upload.any(), validationsProduct, productsController.create)

// MOSTRAR UN PRODUCTO PARTICULAR
router.get('/product-detail/:id', productsController.detail);

// EDITAR PRODUCTO

// Formulario de Edicion
router.get('/:id/edit',authMiddleware, productsController.edit);
// Guardar cambios
router.put('/:id/update',authMiddleware, upload.any(), validationsProduct, productsController.update);

// ELIMINAR PRODUCTO
router.delete('/:id/delete',authMiddleware, productsController.destroy)







module.exports = router;