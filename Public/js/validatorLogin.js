window.addEventListener("load", () => {
    let form = document.getElementById("form");

    form.addEventListener("submit", (e) => {

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
        
        if (password.value.length == 0){
            errorsPassword.push("Los campos de la password no pueden quedar vacios")
        } else if (espacios) {
            errorsPassword.push("La contraseña no puede contener espacios")
        } else if(validarPassword(password.value) != true) {
            errorsPassword.push("Al menos una letra, una letra Mayuscula, un numero y 8 caracteres")
        }

    
        let errors = [errorsEmail,errorsPassword];
        if (errors.length > 0) {
            e.preventDefault();

            let divErrorsEmail = document.querySelector("div.errorsemail div.error");
            let divErrorsPassword = document.querySelector("div.errorspassword div.error");
            
            if (errorsEmail.length > 0) {
                errorsEmail.forEach(error => {
                    divErrorsEmail.innerHTML += "<p>" + error + "</p>"
                });
            } else if (errorsPassword.length > 0) {
                errorsPassword.forEach(error => {
                    divErrorsPassword.innerHTML += "<p>" + error + "</p>"
                });
            } else {
                form.submit();
                };
        
        
        }
    
    })
    

})