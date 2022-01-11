// -- DATOS PARA TRABAJAR

const { ifError } = require('assert');
const fs = require('fs');
const path = require('path');
const { CLIENT_RENEG_WINDOW } = require('tls');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let catalogo = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productsController = {

//-MOSTRAR CATALOGO COMPLETO
    index: (req,res) => {
        catalogo = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('products', {'catalogo': catalogo});
    },

//-BUSCAR PRODUCTO SEGUN NOMBRE 
    search: (req,res) => {
        let wanted = req.query.wanted;
        let productResults = catalogo.filter(element => element.titulo.toLowerCase().includes(wanted))
        
        /*----- Ejemplo alternativo: Resolucion Usando un for
        let productResults = [];
            for (let i = 0; i < catalogo.length; i++) {
            if (catalogo[i].titulo.includes(wantedProduct)){
                productResults.push(catalogo[i]);
            }
        } */

        res.render('productsResults', {"productResults":productResults})
    },

//-MOSTRAR UN PRODUCTO PARTICULAR
    productDetail: (req,res) => {
        let itemId = req.params.id;
        let prenda = {}
        
        for (let i = 0; i < catalogo.length; i++){
            if (itemId == catalogo[i].id){
                prenda = catalogo[i]       
                } 
            }
        res.render('productDetail', {'prenda':prenda},);
    },


//-CREAR NUEVO PRODUCTO
//--Formulario
    create: (req,res) => {
        res.render('productCreateForm')
    },
//--Guardar
    store: (req,res) => {
        let image1 = req.files[0].filename;
        let image2 = req.files[1].filename;
        let image3 = req.files[2].filename;
        let image4 = req.files[3].filename;

        console.log(req.files);
       /* Ejemplo alternativo: en caso de querer cargar imagenes por defecto-
       if(req.file != undefined){image = req.file.filename
        } else {image = 'default-image.png'}*/

        let nuevaprenda = {
            id: catalogo[catalogo.length - 1].id + 1,
            ...req.body,
            img1:image1,
            img2:image2,
            img3:image3,
            img4:image4,
            talle: [1,2,3],
            color: ["bosque-encantado",
            "hora-magica"],
            color_archivo: ["bosque-encantado.jpg", "hora-magica.jpg"]
        }

        catalogo.push(nuevaprenda)
        fs.writeFileSync(productsFilePath, JSON.stringify(catalogo, null, ''))
        res.redirect('/products')
    },

//-EDITAR PRODUCTO
//--Mostrar formulario 
    edit: (req,res) => {
        let itemId = req.params.id;
        let productToEdit = catalogo.find(prenda => prenda.id == itemId)

        res.render('productEditForm', {productToEdit})
    },
//--Actualizar cambios
    update: (req,res) => {
        let itemId = req.params.id;
        let productToEdit = catalogo.find( prenda => prenda.id == itemId)
       
        req.files.forEach( file => {
            switch(file.fieldname){
                case "img1":
                    productToEdit.img1 = file.originalname;
                    break 
                case "img2":
                    productToEdit.img2 = file.originalname;
                    break
                case "img3":
                    productToEdit.img3 = file.originalname;
                    break
                case "img4":
                    productToEdit.img4 = file.originalname;
                    break    
            }

        } )
        /*let image1 = req.files[0] ? req.files[0].filename : productToEdit.img1;
        let image2 = req.files[1] ? req.files[1].filename : productToEdit.img2;
        let image3 = req.files[2] ? req.files[2].filename : productToEdit.img3;
        let image4 = req.files[3] ? req.files[3].filename : productToEdit.img4;*/

        //Redefinimos la variable con los datos del  Formulario
        productToEdit = {
            ...productToEdit,
            ...req.body,
            talle: [1,2,3],
            color: ["bosque-encantado",
            "hora-magica"],
            color_archivo: ["bosque-encantado.jpg", "hora-magica.jpg"]
        }

        let nuevasPrendas = catalogo.map(prenda =>{
            if (prenda.id == productToEdit.id){
                return prenda = {...productToEdit}
            }
            return prenda
        });
        fs.writeFileSync(productsFilePath,JSON.stringify(nuevasPrendas, null, ''))
        res.redirect('/products')
        
    },
//-BORRAR PRENDA
    destroy: (req,res) => {
        let itemId = req.params.id;
        let catalogoFinal = catalogo.filter(prenda => prenda.id != itemId)
        fs.writeFileSync(productsFilePath, JSON.stringify(catalogoFinal, null, ''));
        res.redirect('/');
    }


};


module.exports = productsController;