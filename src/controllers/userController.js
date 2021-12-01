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

       
}
module.exports = userController;