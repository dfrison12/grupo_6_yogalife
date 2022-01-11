const path = require('path');
const { check } = require('express-validator');

module.exports = [
    check('name').notEmpty().withMessage('Debes completar el nombre'),
    check('lastname').notEmpty().withMessage('Debes completar el apellido'),
    check('birthDate').notEmpty().withMessage('Debes completar fecha de nacimiento'),
    check('email')
        .notEmpty().withMessage('Debes completar el e-mail').bail()
        .isEmail().withMessage('Debes ingresar un formato de correo valido'),
    check('password').notEmpty().withMessage('Debes ingresar una contraseña'),
    check('image').custom((value, { req }) => {
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
    }),
    check('tyc').notEmpty().withMessage('Debes Aceptar Terminos y condiciones'),

];
