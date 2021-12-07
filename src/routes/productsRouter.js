//Modulos
const express = require ('express');
const router = express.Router();


const productsController = require ('../controllers/productsController');

//Rutas

//Mostrar Catalogo Completo//
router.get('/', productsController.index);

//Buscar prendas en el catalogo//
router.get('/search', productsController.search);

//Registrar nueva prenda para el catalogo - Formulario
router.get('/create', productsController.create)
//Registrar nueva prenda para el catalogo - Guardar
router.post('/store', productsController.store)



//Mostrar un producto en particular//
router.get('/product-detail/:id', productsController.productDetail);






module.exports = router;