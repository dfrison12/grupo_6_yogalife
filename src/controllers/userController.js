const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator')

const userFilePath = path.join(__dirname, '../data/userDataBase.json');
let usuario = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const userController = {
 // - Login - Formulario   
    login: function(req, res){
        res.render('login')
    },
 // - Register - Formulario - Mostrar
    register: function(req, res){
        res.render('register')
    },
 // - Register - Formuario - Enviar datos
    createUser: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('register', {errors: resultValidation.mapped(),oldData: req.body})
        }


        let image
        console.log(req.files);
        if(req.files[0] != undefined){
            image = req.files[0].filename
        } else {
            image = 'user-default.jpg'}

        let user = {
            id:usuario[usuario.length - 1].id + 1,
            name: req.body.name,
            lastname: req.body.lastname,
            birthDate: req.body.birthDate,
            email: req.body.email,
            password: req.body.password,
            passwordConfirmation: req.body. passwordConfirmation,
            image: image
       }  
       usuario.push(user)
       fs.writeFileSync(userFilePath, JSON.stringify(usuario, null, ''))
       res.redirect('/')
  }
}
module.exports = userController;