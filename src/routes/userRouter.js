//  Modulos
const express = require('express');
const router = express.Router();

// Middlewares
const logDBMiddleware = require('../middlewares/logDBMiddleware');
const upload = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

// Controller
const userController = require('../controllers/userController');


// Login - Formulario
router.get('/login', guestMiddleware, userController.login);

// Procesador de login
router.post('/login', userController.loginProcces);

// perfil de Usuario
router.get('/profile', authMiddleware
 , userController.profile)

// Logout
router.get('/logout', authMiddleware
 , userController.logout)


// Registro - Formulario
router.get('/register', guestMiddleware , userController.register);
// Registro - Proceso
router.post('/register', upload.any(), validations, logDBMiddleware, userController.createUser);


module.exports = router;