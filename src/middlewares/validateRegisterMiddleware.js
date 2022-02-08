const path = require('path');
const { check } = require('express-validator');

module.exports = [
    check('fullname').notEmpty().withMessage('Debes completar el nombre'),
    check('dni').isLength({ min: 8, max:8 }).withMessage('Ingresar DNI Valido'),
    check('address').notEmpty().withMessage('Debe ingresar una Direccion'),
    check('email')
        .notEmpty().withMessage('Debes completar el e-mail').bail()
        .isEmail().withMessage('Debes ingresar un formato de correo valido'),
    check('password')
        .notEmpty().withMessage('Debes ingresar una contraseña')
        .isLength({ min: 5 }).withMessage('La contraseña debe tener almenos 5 caracteres')
        .custom((value ,{req}) => {
            let password2 = req.body.password2;
            let password1 = req.body.password
            if(password1 !== password2){
                throw new Error('Las constraseñas no son iguales')
            } return true
        }),

    /*check('image').custom((value, { req }) => {
        let file = req.files;
        let acceptedExtensions = ['.jpg', '.png'];
        if (!file[0]) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtensions = path.extname(file[0].originalname);
            if (!acceptedExtensions.includes(fileExtensions)) {
                throw new Error('extensiones admitidas jpg y png')
            }
        }
        return true;
    }),*/
    check('tyc').notEmpty().withMessage('Debes Aceptar Terminos y condiciones'),

];
