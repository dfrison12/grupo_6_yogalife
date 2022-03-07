const path = require('path');
const { check } = require ('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('Debes ingresar un Titulo para la prenda')
        .isLength({min:3}).withMessage('El titulo debe contener al menos 3 caracteres'),
    check('cost')
        .notEmpty().withMessage('Debes ingresar un Costo de compra'),
    check('price')
        .notEmpty().withMessage('Debes ingresar un precio de Venta'),
    check('descriptions')
        .isLength({ max:50}).withMessage('La Descripcion debe contener menos de 50 caracteres'), 
    check('stock')
        .notEmpty().withMessage('Debes ingresar un valor para stock'),
    check('img1').custom((value, { req }) => {
            let file = req.files;
        
        let image1 = "lulea_default.jpg"
        
        if(file != undefined){
        req.files.forEach(file => {
            switch (file.fieldname) {
                case "img1":
                    image1 = file.originalname;
                    break
            }
        })
        };   
        
        if (file != undefined)
                {
                    
                    let acceptedExtensions = ['.jpg', '.png','.jpeg','.gif'];
                    let result1 = image1.includes(acceptedExtensions[0])
                    let result2 = image1.includes(acceptedExtensions[1])
                    let result3 = image1.includes(acceptedExtensions[2])
                    let result4 = image1.includes(acceptedExtensions[3])
                    

                    if (result1)
                        {
                            return true
                        
                        }else if(result2){
                        return true
                        } else if(result3){
                        return true
                        }
                        else if(result4){
                        return true
                        }                 
                        else{
                        throw new Error('extensiones admitidas jpg, jpeg, png y gif')
                        }}
                    }),
    check('img2').custom((value, { req }) => {
            let file = req.files;
        
        let image2 = "lulea_default.jpg"

        req.files.forEach(file => {
            switch (file.fieldname) {
                case "img2":
                    image2 = file.originalname;
                    break
            }

        })    
        
        if (file != undefined)
                {
                    
                    let acceptedExtensions = ['.jpg', '.png','.jpeg','.gif'];
                    let result1 = image2.includes(acceptedExtensions[0])
                    let result2 = image2.includes(acceptedExtensions[1])
                    let result3 = image2.includes(acceptedExtensions[2])
                    let result4 = image2.includes(acceptedExtensions[3])
                    

                    if (result1)
                        {
                            return true
                        
                        }else if(result2){
                        return true
                        } else if(result3){
                        return true
                        }
                        else if(result4){
                        return true
                        }                 
                        else{
                        throw new Error('extensiones admitidas jpg, jpeg, png y gif')
                        }

                    };
                    }),
    check('img3').custom((value, { req }) => {
            let file = req.files;
        
        let image3 = "lulea_default.jpg"

        req.files.forEach(file => {
            switch (file.fieldname) {
                case "img3":
                    image3 = file.originalname;
                    break
            }

        })    
        
        if (file != undefined)
                {
                    
                    let acceptedExtensions = ['.jpg', '.png','.jpeg','.gif',];
                    let result1 = image3.includes(acceptedExtensions[0])
                    let result2 = image3.includes(acceptedExtensions[1])
                    let result3 = image3.includes(acceptedExtensions[2])
                    let result4 = image3.includes(acceptedExtensions[3])
                    

                    if (result1)
                        {
                            return true
                        
                        }else if(result2){
                        return true
                        } else if(result3){
                        return true
                        }
                        else if(result4){
                        return true
                        }                 
                        else{
                        throw new Error('extensiones admitidas jpg, jpeg, png y gif')
                        }
                    
                    }
                    }),
    check('img4').custom((value, { req }) => {
            let file = req.files;
        
        let image4 = "lulea_default.jpg"

        req.files.forEach(file => {
            switch (file.fieldname) {
                case "img4":
                    image4 = file.originalname;
                    break
            }

        })    
        
        if (file != undefined)
                {
                    
                    let acceptedExtensions = ['.jpg', '.png','.jpeg','.gif',];
                    let result1 = image4.includes(acceptedExtensions[0])
                    let result2 = image4.includes(acceptedExtensions[1])
                    let result3 = image4.includes(acceptedExtensions[2])
                    let result4 = image4.includes(acceptedExtensions[3])
                    

                    if (result1)
                        {
                            return true
                        
                        }else if(result2){
                        return true
                        } else if(result3){
                        return true
                        }
                        else if(result4){
                        return true
                        }                 
                        else{
                        throw new Error('extensiones admitidas jpg, jpeg, png y gif')
                        }
                    }
                    }),
                    
]