//Modulos
const express = require ('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');


const productsController = require ('../controllers/productsController');

//Configutacion Multer
let multerDiskStorage = multer.diskStorage({
    destination:(req, file, cb) => {
        let folder = path.join(__dirname,'../../public/images/productsImages')
        cb (null, folder)
    },
    filename:(req, file, cb) => {
        let imageName = file.originalname
        cb (null, imageName)
    }
});

let upload =  multer({storage: multerDiskStorage});


//Rutas

//Mostrar Catalogo Completo//
router.get('/', productsController.index);


//Buscar prendas en el catalogo//
router.get('/search', productsController.search);


// - CREAR PRODUCTO
//--- Registrar nueva prenda para el catalogo - Formulario
router.get('/create', productsController.create)
//--- Registrar nueva prenda para el catalogo - Guardar
router.post('/store', upload.any(''), productsController.store)


//Mostrar un producto en particular//
router.get('/product-detail/:id', productsController.productDetail);

// EDITAR PRODUCTO
//Editar -- Mostrar formulario 
//router.get('/edit/:id', productsController.edit);






module.exports = router;