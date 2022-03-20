// -- DATOS PARA TRABAJAR
const db = require ("../database/models");
const  sequelize = db.sequelize;
const path = require('path');
const { validationResult } = require('express-validator');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Product = db.Product;
const Category = db.Category;
const Color = db.Color;
const Size = db.Size



const productsController = {
    list: (req,res) => {

        db.Product.findAll({include:[{association:"categories"},{association:"images"},{association:"colors"},{association:"sizes"}]
        })
            .then(products =>{
                res.render("products", {products:products})
            })
        },
    detail: (req,res)  => {
        let productId = req.params.id;
        let promProduct = Product.findByPk(productId,{include: [{association:"categories"}]});
        let promColor = Color.findAll();
        let promSize = Size.findAll();

        Promise
        .all([promProduct, promColor, promSize])
            .then(([productFind, allColors,allSizes]) => {
                res.render('ProductDetail', {productFind, allColors, allSizes});
            });
    },
    cart: (req,res) => {

        db.Product.findAll({include:[{association:"categories"},{association:"images"},{association:"colors"},{association:"sizes"}]
        })
            .then(products =>{
                res.render("productCart", {products:products})
            })
        },
    add: (req,res) => {
        let promCategory = Category.findAll();
        let promColor = Category.findAll()

        Promise
        .all([promCategory, promColor])
        .then(([allCategories, allColors]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'productCreateForm'), {allCategories,allColors})})
        .catch(error => res.send(error))
    },
    create: (req,res) => {
        
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
        let errors = resultValidation.mapped();
        let  oldData = req.bod;
        let promCategory = Category.findAll();
        let promColor = Category.findAll()
        
        Promise
        .all([promCategory, promColor])
        .then(([allCategories, allColors]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'productCreateForm'), {allCategories,allColors,errors,oldData})})
        .catch(error => res.send(error))
        }
        else {
            let image1 = "lulea_default.jpg"
            let image2 = "lulea_default.jpg"
            let image3 = "lulea_default.jpg"
            let image4 = "lulea_default.jpg"
    
            req.files.forEach(file => {
                switch (file.fieldname) {
                    case "img1":
                        image1 = file.originalname;
                        break
                    case "img2":
                        image2 = file.originalname;
                        break
                    case "img3":
                        image3 = file.originalname;
                        break
                    case "img4":
                        image4 = file.originalname;
                        break
                }
    
            });
        Product
        .create(
            {
                name: req.body.name,
                cost: req.body.cost,
                price: req.body.price,
                discount: req.body.discount,
                descriptions: req.body.descriptions,
                category_id: req.body.category,
                stock: req.body.stock,
                image_1: image1,
                image_2: image2,
                image_3: image3,
                image_4: image4
            }
        )
        .then(()=> {
            return res.redirect('/products')})            
        .catch(error => res.send(error))
        }        
    },
    edit: (req,res) => {
        let ProductId = req.params.id;
        let promProduct = Product.findByPk(ProductId,{include: [{association:"categories"}]});
        let promCategory = Category.findAll();

        Promise
        .all([promProduct, promCategory])
        .then(([productFind, allCategories]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'productEditForm'), {productFind, allCategories})})
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
        let errors = resultValidation.mapped();
        let oldData = req.bod;
    
        let ProductId = req.params.id;
        let promProduct = Product.findByPk(ProductId,{include: [{association:"categories"}]});
        let promCategory = Category.findAll();

        Promise
        .all([promProduct, promCategory])
        .then(([productFind, allCategories]) => {
            return res.render(path.resolve(__dirname, '..', 'views', 'productEditForm'), {productFind, allCategories,errors,oldData})})
        .catch(error => res.send(error))
        }



        let productId = req.params.id;

        let image1 
        let image2
        let image3
        let image4

        req.files.forEach(file => {
            switch (file.fieldname) {
                case "img1":
                    image1 = file.originalname;
                    break
                case "img2":
                    image2 = file.originalname;
                    break
                case "img3":
                    image3 = file.originalname;
                    break
                case "img4":
                    image4 = file.originalname;
                    break
            }

        });

        Product
        .update(
            {
                name: req.body.name,
                cost: req.body.cost,
                price: req.body.price,
                discount: req.body.discount,
                descriptions: req.body.descriptions,
                category_id: req.body.category,
                stock: req.body.stock,
                image_1: image1,
                image_2: image2,
                image_3: image3,
                image_4: image4
            }, {
                where: {id: productId}
            })
        .then(()=> {
            return res.redirect('/')})
        .catch(error => res.send(error))
    },
    destroy: (req,res) => {
        let productId = req.params.id;

        Product
        .destroy({where: {id: productId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/')})
        .catch(error => res.send(error)) 
    }
            
}


module.exports = productsController;