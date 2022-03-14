//  Modulos
const express = require('express');
const router = express.Router();

// Middlewares
const upload = require('../middlewares/multerMiddleware');

const validationsLogin = require ('../middlewares/validateProccesLoginMiddleware')
const validationsRegister = require('../middlewares/validateRegisterMiddleware');

const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

// Controller
const userController = require('../controllers/userController');


// Login - Formulario
router.get('/login', guestMiddleware, userController.login);

// Procesador de login
router.post('/login',validationsLogin, userController.loginProcces);

// perfil de Usuario
router.get('/profile', authMiddleware
 , userController.profile)

// Logout
router.get('/logout', authMiddleware
 , userController.logout)


// Registro - Formulario
router.get('/register', guestMiddleware , userController.register);
// Registro - Proceso
router.post('/register', upload.any(), validationsRegister, userController.createUser);

//Editar  Formulario
router.get('/edit', userController.edit);
// Guardar cambios
router.put('/update',authMiddleware, upload.any(), userController.update);

router.get('/listado', userController.list);

module.exports = router;