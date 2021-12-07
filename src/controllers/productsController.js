// -- DATOS PARA TRABAJAR

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let catalogo = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// -- METODOS

const productsController = {

    //Muestra todos las prendas del catalogo
    index: (req,res) => {
        res.render('products', {'catalogo':catalogo});
    },

    //Se encarga de filtrar productos 
    search: (req,res) => {
        let wanted = req.query.wanted;
        let productResults = catalogo.filter(element => element.titulo.toLowerCase().includes(wanted))
        /*
        ----- Resolucion Usando un for
        let productResults = [];
            for (let i = 0; i < catalogo.length; i++) {
            if (catalogo[i].titulo.includes(wantedProduct)){
                productResults.push(catalogo[i]);
            }
        }
        */

        res.render('productsResults', {"productResults":productResults})
    },

    //Muestra el detalle de una prenda en particular
    productDetail: (req,res) => {
        let item = req.params.id;
        let prenda = {}
        
        for (let i = 0; i < catalogo.length; i++){
            if (item == catalogo[i].id){
                prenda = catalogo[i]       
                } 
            }
        res.render('productDetail', {'prenda':prenda},);
    },


    //Registrar nueva prenda para venta - Formulario
    create: (req,res) => {
        res.render('productCreateForm')
    },

    //Registrar nueva prenda para Venta - Guardar
    store: (req,res) => {
        let nuevaprenda = {
            id: catalogo[catalogo.length - 1].id + 1,
            ...req.body,
        }

        catalogo.push(nuevaprenda)
        fs.writeFileSync(productsFilePath, JSON.stringify(catalogo, null, ''))
        res.redirect('/products')
    },

};


module.exports = productsController;