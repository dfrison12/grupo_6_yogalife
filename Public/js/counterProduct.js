window.addEventListener("load", () => {

    let valor = document.getElementById("count")
    let sumar = document.getElementById("mas")
    let restar = document.getElementById("menos")

    sumar.addEventListener("click", () => {
        if (valor.value < 30) valor.value++;
    })

    restar.addEventListener("click", () => {
        if (valor.value > 01) valor.value--;
    })
    
    


});