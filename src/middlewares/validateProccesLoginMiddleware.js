const path = require('path');
const {check} = require ('express-validator');

module.exports = [
    check('email')
        .notEmpty().withMessage('Debes ingresar un email')
        .isEmail().withMessage('Debes ingresar un email valido'),
    check('password')
        .notEmpty().withMessage('Debes ingresar una contraseña')
];