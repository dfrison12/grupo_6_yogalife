// - Modulos
const express = require ('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path');
const { check } = require('express-validator');

const userController = require ('../controllers/userController');

//CONFIGURACION MULTER
let multerDiskStorage = multer.diskStorage({
    destination:(req, file, cb) => {
        let folder = path.join(__dirname,'../../public/images/usersImages')
        cb (null, folder)
    },
    filename:(req, file, cb) => {
        let imageName = file.originalname
        cb (null, imageName)
    }
});

let upload =  multer({storage: multerDiskStorage});

// - Validaciones
const validations = [
    check('name').notEmpty().withMessage('Debes completar el nombre'),
    check('lastname').notEmpty().withMessage('Debes completar el apellido'),
    check('birthDate').notEmpty().withMessage('Debes completar fecha de nacimiento'),
    check('email')
        .notEmpty().withMessage('Debes completar el e-mail').bail()
        .isEmail().withMessage('Debes ingresar un formato de correo valido'),
    check('password').notEmpty().withMessage('Debes ingresar una contraseña'),
    check('passwordConfirmation').notEmpty().withMessage('Debes ingresar una contraseña'),
    /*check('image').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png'];
        if (!file){
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtensions = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtensions)) {
            throw new Error('extensiones admitidas jpg y png')
            }
        }
        return true;
    }),*/
    check('tyc').notEmpty().withMessage('Debes Aceptar Terminos y condiciones'),

];

// - Login - Formulario
router.get('/login', userController.login);

// - Register - Formulario
router.get('/register', userController.register);
router.post('/register',upload.any(), validations, userController.createUser);


module.exports = router;