//Modulos
const express = require ('express');
const router = express.Router();
const productsController = require ('../controllers/productsController');

//Rutas

router.get('/', productsController.index);
router.get('/product-detail/:id', productsController.productDetail);






module.exports = router;