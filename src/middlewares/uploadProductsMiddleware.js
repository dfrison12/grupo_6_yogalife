const multer = require('multer');
const path = require('path');


//CONFIGURACION MULTER
let multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname, '../../public/images/productsImages')
        cb(null, folder)
    },
    filename: (req, file, cb) => {
        let imageName = file.originalname
        cb(null, imageName)
    }
});

let upload = multer({ storage: multerDiskStorage });

module.exports = upload;