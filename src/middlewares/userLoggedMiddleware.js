const User = require('../models/User')

let userLoggedMiddleware = (req, res, next) => {

    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail
    let userFromCookie = User.findByField('email',emailInCookie)
    
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    };

    if (req.session && req.session.userLogged) {
        if (req.session.userLogged.userProfile == "sell"){
            res.locals.admin = true;
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged
        } else{
            res.locals.admin = false
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged
        }
    }
    
    next();
}

module.exports = userLoggedMiddleware