//Modulos
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

//Rutas

router.get('/', mainController.index);
router.get('/search', mainController.search);
router.get('/productCart/:id', mainController.shopcart)


module.exports = router;