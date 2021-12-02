//Modulos
const express = require ('express');
const router = express.Router();
const userController = require ('../controllers/userController');

//Rutas

router.get('/login', userController.login);

router.get('/register', userController.register);
router.post('/register', userController.createUser)


module.exports = router;