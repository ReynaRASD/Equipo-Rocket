window.onload = cargarCarrito;

const $contenidoDelCarrito = document.querySelector('.contenidoDelCarrito');
/* var titulo = JSON.parse(sessionStorage.getItem("title"));
console.log(titulo); */

//esta funcion se carga cuando se inicia la pagina y agrega los objetos al carrito
function cargarCarrito(){
    
    const carritoDeComprasFila = document.createElement("div");
   // let carrito = JSON.parse(sessionStorage.getItem("carrito"));
    let carrito = sessionStorage.getItem("carrito");
    //console.log("aqui snake ", carrito);
    
    
    //const elementoTitulo = $contenidoDelCarrito.getElementsByClassName('.shoppingCartItemTitle');
    
    //console.log(elementoTitulo);
    
 /*    for(let i = 0; i < carrito.length; i++){
        if(carrito[i].innerText == titulo){
            console.log("titulo es " + carrito[i].innerText);
        }

    }
 */

    /*
    for (let i = 0; i < carrito.length; i++) {
        let carritoDeComprasFila = document.createElement("div")
        carritoDeComprasFila.innerHTML = carrito[i];
        $contenidoDelCarrito.appendChild(carritoDeComprasFila);
        
    }
    */

/*     carrito.forEach(item => {
        let carritoDeComprasFila = document.createElement("div")
        carritoDeComprasFila.innerHTML = carrito[item];
        $contenidoDelCarrito.appendChild(carritoDeComprasFila);
        console.log(carritoDeComprasFila);
        console.log(carrito[item]);
    }); */
     carritoDeComprasFila.innerHTML = carrito;
    $contenidoDelCarrito.appendChild(carritoDeComprasFila); 
    
    const botonesBorrar = $contenidoDelCarrito.querySelectorAll('.buttonDelete');
    botonesBorrar.forEach(quitarElemento => {
            quitarElemento.addEventListener('click', removerObjeto);    
        });

    const contador = $contenidoDelCarrito.querySelectorAll('.shoppingCartItemQuantity');    
    contador.forEach(cambiar => {
        cambiar.addEventListener('change', cambiarContador) 
    })

    actualizarTotal();   
}


//esta funcion actualiza el precio total del carrito
function actualizarTotal(){
    let total = 0;
    const carritoTotal = document.querySelector('.carrito-total');
    console.log(carritoTotal);
    const carritoComprasObjetos = document.querySelectorAll('.carritoObjeto')
    console.log("objetos del carrito", carritoComprasObjetos);

    carritoComprasObjetos.forEach(carritoObjeto => {
        const elementosCarritoPrecio = carritoObjeto.querySelector('.shoppingCartItemPrice')
        const precioObjeto = Number(elementosCarritoPrecio.textContent.replace('$', '',).replace(',' , ''));
        
        const numeroObjetos = carritoObjeto.querySelector('.shoppingCartItemQuantity');
        

        const valor = Number(numeroObjetos.value);
        
        total = total +  precioObjeto * valor;
        

    });
    carritoTotal.innerHTML = `${total.toFixed(2)}$`
}

//esta funcion remueve elementos del carrito
function removerObjeto(event){
    const clickBoton = event.target;
    clickBoton.closest('.carritoObjeto').remove();
    actualizarTotal()
}

//esta funcion cambia el valor del contador
function cambiarContador(event){
    const imput = event.target;
    
    if (imput.value <= 0 ){
        imput.value = 1;
    }
    actualizarTotal();
}






