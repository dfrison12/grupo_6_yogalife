//Modulos
const express = require ('express');
const router = express.Router();
const mainController = require ('../controllers/mainController');

//Rutas

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/productCart/:id', mainController.shopcart)


module.exports = router;