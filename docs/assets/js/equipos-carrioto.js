const $agregarTienda = document.querySelectorAll('.addToCart');
console.log('arreglo de botonoes ' + $agregarTienda);


$agregarTienda.forEach(agregarTienda => {
    agregarTienda.addEventListener('click', agregarAlClickear);
});


function agregarAlClickear(event){
    const boton = event.target;
    const $pcs = boton.closest('.pcs');
    document.getElementById('anuncio-cart').classList.remove('none');
    setTimeout(cambiarClase, 3000);
    const titulo = $pcs.querySelector('.titulo').textContent;
    const varo = $pcs.querySelector('.varo').textContent;
    const imagen = $pcs.querySelector('.imagen').src;
    
   
    

    aniadirAlCarrito(titulo, varo, imagen);   
}

function cambiarClase(){
    document.getElementById('anuncio-cart').classList.add('none');
}
function aniadirAlCarrito(titulo, varo, imagen){
    
    
    console.log(titulo, varo, imagen)

    const carritoPCS = `
    <div class="row carritoObjeto  ">
    <div class="col-6">

        <div class=" d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src=${imagen} class="shopping-cart-image">
            <h6 class="shopping-cart-item-title shoppingCartItemTitle ml-3 mb-0 fw-bolder">${titulo}</h6>
        </div>
    </div>
    <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="item-price mb-0 shoppingCartItemPrice fw-bolder">${varo}</p>
        </div>
    </div>
    <div class="col-4">
        <div
            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="shopping-cart-quantity-input shoppingCartItemQuantity " type="number"
                value="1">
            <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
    </div>
</div>`;



 var aus = sessionStorage.getItem("carrito"); 
console.log("El valor de AUS" + aus);
 if (aus == null){
    sessionStorage.setItem("carrito", carritoPCS);
    console.log("No se que hago parte 1" + sessionStorage.setItem("carrito", carritoPCS));
}else{
    sessionStorage.setItem("carrito", aus + carritoPCS);
    console.log("No se que hago parte 2" + sessionStorage.setItem("carrito", aus + carritoPCS ));
} 

//sessionStorage.setItem("carrito", JSON.stringify(arrayCarrito));
}

