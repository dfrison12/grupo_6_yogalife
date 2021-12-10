const fs = require('fs');
const path = require('path');

const userFilePath = path.join(__dirname, '../data/userDataBase.json');
let usuario = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//DATOS PARA TRABAJAR

const user = [
    {
        id:1,
        name: 'Nombre',
        lastName: 'apellido',
        birthDate: 'mm/dd/yyyy',
        email: 'email',
        password: 'contraseña',
    },
]

const userController = {
    
    login: function(req, res){
        res.render('login')
    },

    register: function(req, res){
        res.render('register')
    },

    createUser: (req, res) => {
       let user = {
            id:usuario[usuario.length - 1].id + 1,
            name: req.body.name,
            lastname: req.body.lastname,
            birthDate: req.body.birthDate,
            email: req.body.email,
            password: req.body.password,
            passwordConfirmation: req.body. passwordConfirmation,

       }  
       usuario.push(user)
       fs.writeFileSync(userFilePath, JSON.stringify(usuario, null, ''))
       res.redirect('/')
  }
}
module.exports = userController;