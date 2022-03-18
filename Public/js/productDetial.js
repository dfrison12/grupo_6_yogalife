window.addEventListener("load", () => {
    let formDelete = document.getElementById("form-delete");
    formDelete.addEventListener("submit", (e) => {
        e.preventDefault();
        if (confirm("¿Seguro deseas Eliminarlo?")){
            formDelete.submit();
        }
    });


    let buttonEdit = document.getElementById("edit-button");
    buttonEdit.addEventListener("click", (e) => {
        if (confirm("¿Seguro deseas Editarlo?")){
            
        }
    });



});