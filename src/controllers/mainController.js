//DATOS PARA TRABAJAR

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const catalogo = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//Metodos

const mainController = {
    index: (req, res) => {
        res.render('index', { 'catalogo': catalogo });
    },

    login: (req, res) => {
        res.render('login')
    },

    register: (req, res) => {
        res.render('register')
    },

    shopcart: (req, res) => {
        let item = req.params.id;
        let prenda = {}

        for (let i = 0; i < catalogo.length; i++) {
            if (item == catalogo[i].id) {
                prenda = catalogo[i]
            }
        }
        res.render('productCart', { 'prenda': prenda },);
    }


}
module.exports = mainController;