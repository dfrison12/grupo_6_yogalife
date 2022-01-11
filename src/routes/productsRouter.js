// Moodulos
const express = require('express');
const router = express.Router();

// Controller
const productsController = require('../controllers/productsController');

// Middlewares
const upload = require('../middlewares/multerMiddleware')


// Mostrar Catalogo Completo
router.get('/', productsController.index);

// Buscar producto
router.get('/search', productsController.search);

// CREAR NUEVO PRODUCTO

// Formulario de Creacion
router.get('/create', productsController.create)
// Guardar Nuevo Producto
router.post('/store', upload.any(''), productsController.store)


// MOSTRAR UN PRODUCTO PARTICULAR
router.get('/product-detail/:id', productsController.productDetail);

// EDITAR PRODUCTO

// Formulario de Edicion
router.get('/:id/edit', productsController.edit);
// Guardar cambios
router.put('/:id/update', upload.any(), productsController.update);

// ELIMINAR PRODUCTO
router.delete('/:id/delete', productsController.destroy)







module.exports = router;