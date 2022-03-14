const db = require ("../database/models");
const Op = db.Sequelize.Op;
const  sequelize = db.sequelize

const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')

//Aqui tienen otra forma de llamar a cada uno de los modelos
const User = db.User;
const UserCategory = db.UserCategory;


const userController = {
    // - Login - Formulario - Mostrar  
    login: (req, res) => {
        res.render('login')
    },
    // - Register - Formulario - Mostrar
    register: (req, res) => {
        let promCategory = UserCategory.findAll()
        
        Promise
        .all([promCategory])
        .then(([allCategoriesUser]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'register'), {allCategoriesUser})})
        .catch(error => res.send(error))
    },

    // Procesar login
    loginProcces: (req,res) => {

        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('login', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userLogin = User.findOne({
            where: {
                email: req.body.email
            }
        })
        Promise
        .all([userLogin])
        .then((userLog) =>{
            let userToLogin = userLog[0].dataValues
            
            if(userToLogin.email == req.body.email) {
                let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
                if (isOkPassword){
                    delete userToLogin.password
                    req.session.userLogged = userToLogin
    
                    if (req.body.rememberUser){
                        res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 60})
                    }
                
                    return res.redirect("/")
                }
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'El usuario o contraseña son invalidos'
                    }
                }
            })
        })
        .catch(error => {
            return res.render ('login',{
                errors: {
                    email: {
                        msg: 'El usuario o contraseña son invalidos'
                    }
                }
            })})
        
    },

    profile: (req,res) => {        
        let user = req.session.userLogged
        return res.render('userProfile',{user})
    },

    logout: (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy();
        return res.redirect('/');
    },

    // Register - Formuario - Enviar datos
    createUser: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let image
        if (req.files[0] != undefined) {
            image = req.files[0].filename
        } else {
            image = 'user_default.jpg'
        }

        
        User.findOne({
            where: {
                email: req.body.email}
        })
        .then((user1) =>{
            if (user1){
                res.render('register', {
                errors: {
                    email: {
                        msg: 'Este Email ya esta registrado'
                    }
                },
                oldData: req.body
            })
            }})
        .then(() => {
            User.create({
                        email: req.body.email,
                        password: bcryptjs.hashSync(req.body.password),
                        full_name: req.body.fullname,
                        dni: req.body.dni,
                        user_category_id: req.body.user_category_id,
                        address: req.body.address,
                        avatar: image
            })
        })
        .then (() => {
            return res.redirect('/user/login')
        })
        .catch(error => res.send(error))
        


        /*if (userInDB) {
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
            password: bcryptjs.hashSync(req.body.password,12),
            image: image
        }

        User.create(userToCreate);
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
    },
    edit: (req,res) => {
        res.render('userEditForm', {
            user: req.session.userLogged
        })
    },
    update: (req,res) => {
        let avatar
        
        req.files.forEach(file => {
            switch (file.fieldname) {
                case "image":
                    avatar = file.originalname;
                    break
            }
        });
        
        User.findOne({
            where: {
                email: req.body.email}
        })
        .then((user1) =>{
            let validation = req.body.email == req.session.userLogged.email
            if (user1 && !validation){
                res.render('userEditForm', {
                errors: {
                    email: {
                        msg: 'Este Email ya esta registrado'
                    }
                },
                oldData: req.body
            })
            }})
        .then(() => {
            User.findByPk(req.session.userLogged.id)
            .then(function (user) {
                user.update({
                    email: req.body.email,
                    password: bcryptjs.hashSync(req.body.password, 12),
                    full_name: req.body.fullname,
                    dni: req.body.dni,
                    user_category_id: req.body.user_category_id,
                    address: req.body.address,
                    avatar: avatar
                }).then(user => {
                    req.session.userLogged = user;
                    res.redirect("/user/profile")
                }).catch(function(e){
                    res.render('error')
                });

        })

        })
        
        
        
    },
    //CONTROLLER - PARA BASE DE DATOS
    list: (req,res)=> {
        db.User.findAll({
            include:[{association:"user_categories"}]
        })
            .then(users =>{
                res.render("listadoUsuarios", {users:users})
            })
    }
}
module.exports = userController;