//MODULOS
const express = require ('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');


const productsController = require ('../controllers/productsController');

//CONFIGURACION MULTER
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


//-MOSTRAR CATALOGO COMPLETO
router.get('/', productsController.index);

//-BUSCAR PRODUCTO SEGUN NOMBRE
router.get('/search', productsController.search);

//-CREAR NUEVO PRODUCTO
//--Formulario
router.get('/create', productsController.create)
//--Guardar
router.post('/store', upload.any(''), productsController.store)


//-MOSTRAR UN PRODUCTO PARTICULAR
router.get('/product-detail/:id', productsController.productDetail);

//-EDITAR PRODUCTO
//--Mostrar formulario 
router.get('/:id/edit', productsController.edit);
//--Actualizar cambios
router.put('/:id/update',upload.any(''), productsController.update);

//-BORRAR PRENDA
router.delete('/:id/delete', productsController.destroy)







module.exports = router;