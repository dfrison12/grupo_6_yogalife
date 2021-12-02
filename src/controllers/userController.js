const fs = require ('fs')

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

    createUser: function (req, res) {
       let user = {
            name: req.body.name,
            lastname: req.body.lastname,
            birthDate: req.body.birthDate,
            email: req.body.email,
            password: req.body.password,
       }

       fs.appendFileSync('dataTest.json', user)

       res.redirect('/') 
  }
}
module.exports = userController;