// -- DATOS PARA TRABAJAR
const db = require ("../database/models");
const Op = db.Sequelize.Op;
const  sequelize = db.sequelize
const path = require('path');
const { query } = require("express");

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Product = db.Product;
const Category = db.Category;
const Color = db.Color;
const Size = db.Size


//Metodos

const mainController = {
    index: (req,res) => {

    db.Product.findAll({include:[{association:"categories"},{association:"images"},{association:"colors"},{association:"sizes"}]
        })
            .then(products =>{
                res.render("index", {products:products})
        })
     },
     search: (req,res) => {
        Product
        .findAll({
            where: {
                name: { [Op.like]: '%' + req.query.wanted + '%' }
            }
        })
        .then(products => {
            return res.render(path.resolve(__dirname, '..', 'views',  'productsResults'), { "productResults": products })
        })
        .catch(error => res.send(error))
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