window.addEventListener("load", () => {
    let form = document.getElementById("form");
    
    form.addEventListener("submit", e => {
        let tittle = document.getElementById("tittle");
        let cost = document.getElementById("cost");
        let price = document.getElementById("price");
        let discount = document.getElementById("discount");
        let description = document.getElementById("description");
        let stock = document.getElementById("stock");
        let img1 = document.getElementById("img1");
        let img2 = document.getElementById("img2");
        let img3 = document.getElementById("img3");
        let img4 = document.getElementById("img4");

        let errorsTittle = [];
        if (tittle.value == "") {
            errorsTittle.push("Debe ingresar un titulo para el producto")
        } else if (tittle.value.length < 3) {
            errorsTittle.push("El titulo del producto debe contener al menos 3 caracteres")
        }

        let errorsCost = [];
        if (cost.value == "") {
            errorsCost.push("Debe ingresar un valor de Costo de Compra")
        } else if (cost.value < 0) {
            errorsCost.push("No se admiten precios negativos")
        }
        
        let errorsPrice = [];
        if (price.value == "") {
            errorsPrice.push("Debe ingresar un valor de Precio de Venta")
        } else if (price.value < 0) {
            errorsPrice.push("No se admiten precios negativos")
        }

        let errorsDiscount = [];
        if (discount.value > 80) {
            errorsDiscount.push("Descuento Maximo del 80%")
        } else if (discount.value < 0) {
            errorsDiscount.push("No se admiten descuentos negativos")
        }

        let errorsDescription = [];
        if (description.value.length > 50) {
            errorsDescription.push("Puede ingresar un maximo de 50 caracteres")
        }

        let errorsStock = [];
        if (stock.value == "" ) {
            errorsStock.push("Ingresar un Valor para Stock Inicial")
        } else if (stock.value < 0) {
            errorsStock.push("No se admite stock negativo")
        }

        const extensionesAdmitidas = /(.jpg|.jpeg|.png|.gif)$/i;

        let errorsImg1 = [];
        image1Path = img1.value;
        if(img1.files[0] != undefined){
            if (!extensionesAdmitidas.exec(image1Path)){
                errorsImg1.push("Extensiones admitidas JPG,JPEG,PNG y GIF")
                };
        };

        let errorsImg2 = [];
        image2Path = img2.value;
        if(img2.files[0] != undefined){
            if (!extensionesAdmitidas.exec(image2Path)){
                errorsImg2.push("Extensiones admitidas JPG,JPEG,PNG y GIF")
                };
        };

        let errorsImg3 = [];
        image3Path = img3.value;
        if(img3.files[0] != undefined){
            if (!extensionesAdmitidas.exec(image3Path)){
                errorsImg3.push("Extensiones admitidas JPG,JPEG,PNG y GIF")
                };
        };

        let errorsImg4 = [];
        image4Path = img4.value;
        if(img4.files[0] != undefined){
            if (!extensionesAdmitidas.exec(image4Path)){
                errorsImg4.push("Extensiones admitidas JPG,JPEG,PNG y GIF")
                };
        };





        let errors = [errorsTittle, errorsCost, errorsPrice, errorsDiscount, errorsDescription, errorsStock, errorsImg1, errorsImg2, errorsImg3, errorsImg4];
        let acum = 0
        errors.forEach((array) => {
            if (array.length != 0){
                acum = acum + 1
            }
        });
        console.log(acum)
        if (acum > 0) {
            e.preventDefault();
            
            let ulErrorsTittle = document.querySelector("div.errorstittle ul");
            let ulErrorsCost = document.querySelector("div.errorscost ul");
            let ulErrorsPrice = document.querySelector("div.errorsprice ul");
            let ulErrorsDiscount = document.querySelector("div.errorsdiscount ul");
            let ulErrorsDescription = document.querySelector("div.errorsdescription ul");
            let ulErrorsStock = document.querySelector("div.errorsstock ul");
            let ulErrorsImg1 = document.querySelector("div.errorsimg1 ul");
            let ulErrorsImg2 = document.querySelector("div.errorsimg2 ul");
            let ulErrorsImg3 = document.querySelector("div.errorsimg3 ul");
            let ulErrorsImg4 = document.querySelector("div.errorsimg4 ul");
            
            if (errorsTittle.length > 0) {
                errorsTittle.forEach(error => {
                    ulErrorsTittle.innerHTML += "<p>" + error +"</p>"
                });
            }
            
            if (errorsCost.length > 0) {
                errorsCost.forEach(error => {
                    ulErrorsCost.innerHTML += "<p>" + error +"</p>"
                });
            }

            if (errorsPrice.length > 0) {
                errorsPrice.forEach(error => {
                    ulErrorsPrice.innerHTML += "<p>" + error +"</p>"
                });
            }

            if (errorsDiscount.length > 0) {
                errorsDiscount.forEach(error => {
                    ulErrorsDiscount.innerHTML += "<p>" + error +"</p>"
                });
            }

            if (errorsDescription.length > 0) {
                errorsDescription.forEach(error => {
                    ulErrorsDescription.innerHTML += "<p>" + error +"</p>"
                });
            }

            if (errorsStock.length > 0) {
                errorsStock.forEach(error => {
                    ulErrorsStock.innerHTML += "<p>" + error +"</p>"
                });
            }

            if (errorsImg1.length > 0) {
                errorsImg1.forEach(error => {
                    ulErrorsImg1.innerHTML += "<p>" + error +"</p>"
                });
            }

            if (errorsImg2.length > 0) {
                errorsImg2.forEach(error => {
                    ulErrorsImg2.innerHTML += "<p>" + error +"</p>"
                });
            }

            if (errorsImg3.length > 0) {
                errorsImg3.forEach(error => {
                    ulErrorsImg3.innerHTML += "<p>" + error +"</p>"
                });
            }

            if (errorsImg4.length > 0) {
                errorsImg4.forEach(error => {
                    ulErrorsImg4.innerHTML += "<p>" + error +"</p>"
                });
            }
        
        
        } else {
            form.submit();
            };








    });
});