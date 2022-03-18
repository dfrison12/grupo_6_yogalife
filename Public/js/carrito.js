window.addEventListener("load", () => {
    const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    if (typeof localStorage.carrito == "undefined" || typeof localStorage.carrito == "[]"
    ) {
      let div = document.getElementById("vacio");
      div.innerHTML += "<h2>No hay productos agregados </h2>";
    } else {
      let carrito = JSON.parse(localStorage.carrito);
      for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        let div = document.querySelector(".vacio");
        let contenido = ` <section class="checkout-cart">
              <article class="item-cart">
                  <form action="#" method="GET">
                      <button  type="button">
                          <i onclick="borrarItem(${i})" class="fas fa-times"></i>
                      </button>
                  </form>
                  <div class="img-cart"><img src=${producto.imagen} alt=""> </div>
                  <div class="descripcion-cart">${producto.tituloProd}</div>
                  <div class="precio-cart">$ ${toThousand(producto.precio)}</div>
              </article>
              <article class="cant-cart">
                  <form action="#" method="GET">
                      <label for="cantidad"></label>
                      <p id="count">Cantidad pedida: ${producto.inputCantidad}</p>
                  </form>
              </article>
          </section>`;
  
        div.innerHTML += contenido;
      }
    }
  
    let h3 = document.querySelector("#precioTotal")
    let totalCarrito = localStorage.totalCarrito
    if(typeof localStorage.totalCarrito == 'undefined'){
      let contenido2 = `0`
      h3.innerHTML += contenido2
    } else {
      let contenido2 = `${toThousand(totalCarrito)}`
      h3.innerHTML += contenido2
    }
  
    
    
})
  
  function borrarItem(id) {
    let carrito = JSON.parse(localStorage.carrito);
    carrito = carrito.filter((producto, i) => {
      return i !== id;
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    let totalCarrito = 0
            for (let i=0; i<carrito.length; i++) {
               let carro = carrito[i].precio * carrito[i].inputCantidad;
               totalCarrito += carro 
            }
    localStorage.setItem("totalCarrito", totalCarrito)
    location.reload();
  }
  
  
  
  let botonBorrar = document.querySelector("#botonBorrar");
  botonBorrar.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.clear();
    alert('has vaciado el carrito');
    location.reload();
  })
  

  let botonPagar = document.querySelector("#botonPagar")
  botonPagar.addEventListener("click", (e) => {

      e.preventDefault();


      if (typeof localStorage.carrito == "undefined" || typeof localStorage.carrito == "[]")
        {
            alert("No tienes ningun Producto cargado el carrito")
        }
        else {
            alert("Pedido Realizado con exito");
            localStorage.clear();
            window.location.assign("/products")
        }
  })
  