const $agregarTienda = document.querySelectorAll('.addToCart');
console.log('arreglo de botonoes ' + $agregarTienda);
let arrayCarrito = [];

$agregarTienda.forEach(agregarTienda => {
    agregarTienda.addEventListener('click', agregarAlClickear);
});


function agregarAlClickear(event){
    const boton = event.target;
    const $pcs = boton.closest('.pcs');
    
    const titulo = $pcs.querySelector('.titulo').textContent;
    const varo = $pcs.querySelector('.varo').textContent;
    const imagen = $pcs.querySelector('.imagen').src;
    
   
    

    aniadirAlCarrito(titulo, varo, imagen);   
}

function aniadirAlCarrito(titulo, varo, imagen){
    
    
    console.log(titulo, varo, imagen)

    var title = titulo;
    
    sessionStorage.setItem("title", title);
   
    
    
    const carritoPCS = `
    <div class="row carritoObjeto">
    <div class="col-6">

        <div class=" d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src=${imagen} class="shopping-cart-image">
            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${titulo}</h6>
        </div>
    </div>
    <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="item-price mb-0 shoppingCartItemPrice">${varo}</p>
        </div>
    </div>
    <div class="col-4">
        <div
            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                value="1">
            <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
    </div>
</div>`;

arrayCarrito=[...arrayCarrito,carritoPCS];

/* var aus = sessionStorage.getItem("carrito"); */

/* if (aus == null){
    sessionStorage.setItem("carrito", carritoPCS)
}else{
    sessionStorage.setItem("carrito", aus + carritoPCS );
} */

sessionStorage.setItem("carrito", JSON.stringify(arrayCarrito));
}

