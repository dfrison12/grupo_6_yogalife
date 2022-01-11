const fs = require ('fs')


let logDBMiddleware = (req, res, next) => {
    fs.appendFileSync('logDB.txt', 'Se creo un registro al ingresar en ' + req.url);

    next();
}

module.exports = logDBMiddleware