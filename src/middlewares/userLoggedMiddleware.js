const db = require ("../database/models");
const Op = db.Sequelize.Op;
const  sequelize = db.sequelize

//Aqui tienen otra forma de llamar a cada uno de los modelos
const User = db.User;
const UserCategory = db.UserCategory;

let userLoggedMiddleware = (req, res, next) => {

    res.locals.isLogged = false;

    
    User.findOne({
        where: {
            email: req.cookies.userEmail
        }
    }, {
        include:[{association:"user_categories"}]
    }).
    then(userCookie =>{
        req.session.userLogged = userCookie
    })
    .catch(error=>{
        console.log(error)
    })

    if (req.session && req.session.userLogged) {
        if (req.session.userLogged.user_category_id == 2){
            res.locals.admin = true;
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged
        } else{
            res.locals.admin = false
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged
        }
    }
    console.log(req.session.userLogged)
    next();
    }
    
    


module.exports = userLoggedMiddleware