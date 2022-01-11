const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')

const User = require('../models/User')

const userFilePath = path.join(__dirname, '../data/userDataBase.json');
let usuario = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const userController = {
    // - Login - Formulario   
    login: function (req, res) {
        res.render('login')
    },
    // - Register - Formulario - Mostrar
    register: function (req, res) {
        res.render('register')
    },
    // - Register - Formuario - Enviar datos
    createUser: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let image
        console.log(req.files);
        if (req.files[0] != undefined) {
            image = req.files[0].filename
        } else {
            image = 'user-default.jpg'
        }

        let userInDB = User.findByField('email', req.body.email);
        if (userInDB) {
            return res.render('register', {
                errors: {
                    email: {
                        msg: 'Este email ya esta registrado'
                    }
                },
                oldData: req.body
            });
        }


        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password,10),
            image: image
        }

        let userCreated = User.create(userToCreate);
        return res.redirect('/user/login')

        /*let user = {
            id: usuario[usuario.length - 1].id + 1,
            name: req.body.name,
            lastname: req.body.lastname,
            birthDate: req.body.birthDate,
            email: req.body.email,
            password: req.body.password,
            passwordConfirmation: req.body.passwordConfirmation,
            image: image
        }
        usuario.push(user)
        fs.writeFileSync(userFilePath, JSON.stringify(usuario, null, ''))
        res.redirect('/')*/
    }
}
module.exports = userController;