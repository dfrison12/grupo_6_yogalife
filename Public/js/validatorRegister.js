window.addEventListener("load", () => {
    let form = document.getElementById("form");

    form.addEventListener("submit", (e) => {


        let fullName = document.getElementById("name");
        let errorsFullName = [];
        if (fullName.value == ""){
            errorsFullName.push("El campo Nombre debe estar completo")
        } else if (fullName.value.length < 3) {
            errorsFullName.push("El campo de Nombre debe teneral menos 3 caracteres")
        }

        let dni = document.getElementById("dni");
        let errorsDni = [];   
        if (dni.value == ""){
            errorsDni.push("Ingresar DNI")
        } else if (isNaN(dni.value)==true || dni.value.length < 7 || dni.value.length > 8){
            errorsDni.push("Ingresar DNI valido")
        }
    
        let address = document.getElementById("address");
        let errorsAddress = [];
        if (address.value == ""){
            errorsAddress.push("Ingresar una Direccion")
        }

        let email = document.getElementById("email");
        let errorsEmail = [];
        let validarEmail = (value) => {
            if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(value)){
             return true
            } else {
             return false
            }
          }

        if (email.value == ""){
            errorsEmail.push("Ingresar un e-mail")
        } else if (validarEmail(email.value) != true){
            errorsEmail.push("Ingresar un e-mail Valido")
        }

        let password = document.getElementById("password");
        let passwordConfirm = document.getElementById("passwordconfirm");
        let errorsPassword = [];

        let espacios = false;
        let cont = 0;
        if (espacios != true && cont < password.value.length) {
            if (password.value.includes(" ")){
                espacios = true;
                cont++
            }  
        };

        let validarPassword = (valor) => {
            if (regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(valor)) {
                return true
            } else {
                return false
            }
        }
        
        if (password.value.length == 0 || passwordConfirm.value.length == 0){
            errorsPassword.push("Los campos de la password no pueden quedar vacios")
        } else if (espacios) {
            errorsPassword.push("La contraseña no puede contener espacios")
        } else if(validarPassword(password.value) != true) {
            errorsPassword.push("Al menos una letra, una letra Mayuscula, un numero y 8 caracteres")
        } else if (password.value !== passwordConfirm.value){
            errorsPassword.push("Las contraseñas deben ser iguales")
        }


        let image = document.getElementById("image");
        let errorsImage = [];
        imagePath = image.value;
        const extensionesAdmitidas = /(.jpg|.jpeg|.png|.gif)$/i;
        
        if(image.files[0] != undefined){
        if (!extensionesAdmitidas.exec(imagePath)){
            errorsImage.push("Extensiones admitidas JPG,JPEG,PNG y GIF")
            };
        };

        let tyc = document.getElementById("tyc");
        let errorsTyc = [];
        if (tyc.checked == false){
            errorsTyc.push("Aceptar terminos y condiciones para continuar")
        }

    
        let errors = [errorsFullName,errorsDni,errorsAddress,errorsEmail,errorsPassword,errorsImage,errorsTyc];
        
        if (errors.length > 0) {
            e.preventDefault();

            let uLerrorsFullname = document.querySelector("div.errorsfullname ul");
            let uLerrorsDni = document.querySelector("div.errorsdni ul");
            let uLerrorsAddress = document.querySelector("div.errorsaddress ul");
            let uLerrorsEmail = document.querySelector("div.errorsemail ul");
            let uLerrorsPassword = document.querySelector("div.errorspassword ul");
            let uLerrorsImage = document.querySelector("div.errorsimage ul");
            let uLerrorsTyc = document.querySelector("div.errorstyc ul");
            


            
            if (errorsFullName.length > 0) {
                errorsFullName.forEach(error => {
                    uLerrorsFullname.innerHTML += "<li>" + error +"</li>"
                });
            } else if (errorsDni.length > 0) {
                errorsDni.forEach(error => {
                    uLerrorsDni.innerHTML += "<li>" + error +"</li>"
                });
            } else if (errorsAddress.length > 0) {
                errorsAddress.forEach(error => {
                    uLerrorsAddress.innerHTML += "<li>" + error +"</li>"
                });
            } else if (errorsEmail.length > 0) {
                errorsEmail.forEach(error => {
                    uLerrorsEmail.innerHTML += "<li>" + error +"</li>"
                });
            } else if (errorsPassword.length > 0) {
                errorsPassword.forEach(error => {
                    uLerrorsPassword.innerHTML += "<li>" + error +"</li>"
                });
            } else if (errorsImage.length > 0) {
                errorsImage.forEach(error => {
                    uLerrorsImage.innerHTML += "<li>" + error +"</li>"
                });
            } else if (errorsTyc.length > 0) {
                errorsTyc.forEach(error => {
                    uLerrorsTyc.innerHTML += "<li>" + error +"</li>"
                });
            } else {
                form.submit();
                };
        
        
        }
    
    })
    

})