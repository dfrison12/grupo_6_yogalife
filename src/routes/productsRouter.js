// Moodulos
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')

// Controller
const productsController = require('../controllers/productsController');

// Middlewares
const upload = require('../middlewares/uploadProductsMiddleware')


// Mostrar Catalogo Completo
router.get('/', productsController.index);

// Buscar producto
router.get('/search', productsController.search);

// CREAR NUEVO PRODUCTO

// Formulario de Creacion
router.get('/create', authMiddleware, productsController.create)
// Guardar Nuevo Producto
router.post('/store',authMiddleware,  upload.any(''), productsController.store)


// MOSTRAR UN PRODUCTO PARTICULAR
router.get('/product-detail/:id', productsController.productDetail);

// EDITAR PRODUCTO

// Formulario de Edicion
router.get('/:id/edit', authMiddleware, productsController.edit);
// Guardar cambios
router.put('/:id/update', authMiddleware, upload.any(), productsController.update);

// ELIMINAR PRODUCTO
router.delete('/:id/delete', authMiddleware, productsController.destroy)







module.exports = router;