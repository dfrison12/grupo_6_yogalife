// - Modulos
const express = require ('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path');

const userController = require ('../controllers/userController');

//CONFIGURACION MULTER
let multerDiskStorage = multer.diskStorage({
    destination:(req, file, cb) => {
        let folder = path.join(__dirname,'../../public/images/usersImages')
        cb (null, folder)
    },
    filename:(req, file, cb) => {
        let imageName = file.originalname
        cb (null, imageName)
    }
});

let upload =  multer({storage: multerDiskStorage});


// - Login - Formulario
router.get('/login', userController.login);

// - Register - Formulario
router.get('/register', userController.register);
router.post('/register',upload.any(),  userController.createUser);


module.exports = router;