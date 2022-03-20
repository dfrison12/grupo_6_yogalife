const db = require ("../../database/models");
const sequelize = db.sequelize;
// Requerir Modelos
const Product = db.Product;
const Category = db.Category;
const Color = db.Color;
const Size = db.Size;


const productsApiController = {
    list: (req,res) => {
        db.Category.findAll({include:[{association:"products"}]
        })
        .then(categories =>{
                db.Product.findAll({include:[{association:"categories"}]})
                .then(products =>{
                    let arrayCategorias = []
                    for(let i=0; i<categories.length ; i++){
                        arrayCategorias.push({
                        nombre: categories[i].dataValues.name,
                        total: categories[i].dataValues.products.length
                        })
                    }
                let MysoreSupplex = products.filter(product => product.category_id == 2);
                let YogaTripColeccion = products.filter(product => product.category_id == 3);
                let YogaTripArizonaColeccion = products.filter(product => product.category_id == 4);
                let ClassicColeccion = products.filter(product => product.category_id == 5);
                let YogaFreestyle = products.filter(product => product.category_id == 6);
                let OtraCategoria = products.filter(product => product.category_id == 1);

                let respuesta = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: "/api/products",
                        categories: categories.length,
                        categoryNames: arrayCategorias,
                        countByCategory: [
                            {MysoreSupplex: MysoreSupplex.length},
                            {YogaTripColeccion: YogaTripColeccion.length},
                            {YogaTripArizonaColeccion: YogaTripArizonaColeccion.length},
                            {ClassicColeccion: ClassicColeccion.length},
                            {YogaFreestyle: YogaFreestyle.length},
                            {OtraCategoria: OtraCategoria.length}

                        ]
                    },
                    data: products.map(product => {
                            return{
                                id: product.id,
                                name: product.name,
                                cost: product.cost,
                                price: product.price,
                                discount: product.discount,
                                descriptions: product.descriptions,
                                category: {name:product.categories.name},
                                image: "/imges/productsImages/" + product.image_1
                            }
                    })
                }
                res.json(respuesta)

            })
            })  
            .catch(function(error){
            res.json({status:800})
            })
    },
    detail:(req,res)=>{
        Product.findByPk(req.params.id, {
            include:['categories']
        })
        .then(product=>{
            let respuesta = {
                meta:{
                    status: 200,
                    url: "/api/products/" + product.id
                },
                data: {
                    id: product.id,
                    name: product.name,
                    cost: product.cost,
                    price: product.price,
                    discount: product.discount,
                    descriptions: product.descriptions,
                    category: {name:product.categories.name},
                    image: "/imges/productsImages/" + product.image_1
                    }
                }
            
            res.json(respuesta)
        })
        .catch(function(error){
            res.json({status:800})
        })
    },
    last:(req,res)=>{
            let respuesta = {
                meta:{
                    status: 200,
                    url: "/api/products/last"
                },
                data: {
                    id: 3,
                    name: hola
                    }
                }
            
            res.json(respuesta)
    },
    ultimo: (req, res) => {
        Product.findAll({order:[["id", "DESC"]], limit:1})
        .then(function (product) {
            product[0].setDataValue("endpoint", "/api/products/lastProduct/" + product.length)

            let apiResponse= {
                meta: {
                    status: 200,
                    url:"/api/products/lastProduct",
                    total: product.length
                },
                data: product
            }
            res.json(apiResponse)
        })
        .catch(function(error){
            res.json({status:500})
        })
    }


}


module.exports = productsApiController;