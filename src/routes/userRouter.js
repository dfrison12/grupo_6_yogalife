//  Modulos
const express = require ('express');
const router = express.Router();

// Middlewares
const logDBMiddleware = require ('../middlewares/logDBMiddleware')
const upload =  require('../middlewares/multerMiddleware');
const validations = require ('../middlewares/validateRegisterMiddleware')

// Controller
const userController = require ('../controllers/userController');


// Login - Formulario
router.get('/login', userController.login);

// Registro - Formulario
router.get('/register', userController.register);
// Registro - Proceso
router.post('/register',upload.any(), validations, logDBMiddleware,  userController.createUser);


module.exports = router;