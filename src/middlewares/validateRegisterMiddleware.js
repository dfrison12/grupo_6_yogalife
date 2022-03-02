const path = require('path');
const { check } = require('express-validator');

module.exports = [
    check('fullname')
        .notEmpty().withMessage('Ingresar nombre completo')
        .isLength({min:2}).withMessage('Debe contener al menos 2 caracteres'),
    check('dni')
        .isLength({ min: 7, max:8 }).withMessage('Ingresar DNI Valido'),
    check('address')
        .notEmpty().withMessage('Ingresar una direccion'),
    check('email')
        .notEmpty().withMessage('Ingresar un e-mail').bail()
        .isEmail().withMessage('Ingresar un formato de correo valido'),
    check('password')
        .notEmpty().withMessage('Ingresar una contraseña')
        .isLength({ min: 8 }).withMessage('La contraseña debe tener almenos 5 caracteres')
        .custom((value ,{req}) => {
            let password2 = req.body.password2;
            let password1 = req.body.password
            if(password1 !== password2){
                throw new Error('Las constraseñas no son iguales')
            } return true
        }),
    /*check('image').custom((value, { req }) => {
        let file = req.files;
        let acceptedExtensions = ['.jpg', '.png', 'jpeg', 'gif'];
        if (file[0] != undefined)
            {
                let fileExtensions = path.extname(file[0].originalname);
                if (!acceptedExtensions.includes(fileExtensions))
                    {
                    throw new Error('extensiones admitidas jpg, jpeg, png y gif')
                    }
                }else{
                        return true;
                    }}),*/
    check('tyc')
    .notEmpty().withMessage('Debes Aceptar Terminos y condiciones'),

];
