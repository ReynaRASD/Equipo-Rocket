function lanza() {
  cargarHeadFoot();
  setTimeout(cargarCarrito(), 100);
  setTimeout(miUbicacion(), 200);
}

let lat, lng, coordenadas, autocomplete, map, myLatLng, marker, response, address;

//Funcion para inicializar el autocompletado de direcciones
function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    {
      fields: ["formatted_address", "geometry", "name"],
      componentRestrictions: { 'country': ['MX'] }
    });
  autocomplete.addListener('place_changed', onPlaceChanged);
}
//Funcion para la seleccion de alguna dirección
function onPlaceChanged() {
  var place = autocomplete.getPlace();
  if (!place.geometry) {
    //Usuario no seleccionó opción, resetear
    alert("Favor de seleccionar una opción");
  } else {
    //Ubicar pin con la dirección indicada
    obtenerCoordenadas();
  }
}

//Funcion para inicializar mapa
function initMap() {
  map = new google.maps.Map(document.getElementById("mapi"), {
    center: { lat: 23.305, lng: -102.206 },
    zoom: 5,
    zoomControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false
  });
  //Marcador rojo que indica dirección
  marcador = new google.maps.Marker({
    map: map,
    draggable: true,
  });
}
//Mandas a llamar las funciones para que trabajen los mapas
function inicializar() {
  initMap();
  initAutocomplete();
}
//Hay que hacer que la dirección pueda ser resuelta por la API con los espacios
function direction() {
  address = (document.getElementById('autocomplete').value).replace(/ /g, "%20");
}
//Obtener coordenadas cuando se escribe una dirección
function obtenerCoordenadas() {
  direction();
  let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyCrPZOMvbdb6qzeZE_FFjWtrcUuF7c49CA';
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      response = JSON.parse(xhr.responseText);
      ubicarMarcador(response.results[0].geometry.location.lat, response.results[0].geometry.location.lng);
      descomponerDireccion(response.results[0].address_components);
    }
  }
  xhr.open('GET', url);
  xhr.send();
}
// Código para cambiar la ubicación del marker
function ubicarMarcador(mylat, mylng) {
  myLatLng = new google.maps.LatLng(mylat, mylng);
  mapOptions = {
    zoom: 17,
    center: myLatLng,
    zoomControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false
  }
  map = new google.maps.Map(document.getElementById("mapi"), mapOptions);

  marker = new google.maps.Marker({
    draggable: true,
    position: myLatLng,
  });
  marker.setMap(map);
  marker.addListener('dragend', function () {
    obtenerDireccion(marker.getPosition().lat(), marker.getPosition().lng());
  });
}

//Código de funcion para obtener ubicación por botón
function miUbicacion() {
  function localizacion(posicion) {
    lat = posicion.coords.latitude;
    lng = posicion.coords.longitude;
    ubicarMarcador(lat, lng);
    obtenerDireccion(lat, lng);
  }
  function errorDeUbicacion() {
    alert("Error al obtener tu ubicación")
  }
  navigator.geolocation.getCurrentPosition(localizacion, errorDeUbicacion);
}
// Apartir de coordenadas separadas obtener la dirección
function obtenerDireccion(lati, longi) {
  let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lati + ',' + longi + '&key=AIzaSyCrPZOMvbdb6qzeZE_FFjWtrcUuF7c49CA';
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      response = JSON.parse(xhr.responseText);
      document.getElementById('autocomplete').value = response.results[0].formatted_address;
      //descomponerDireccion(response.results[0].address_components);
    }
  }
  xhr.open('GET', url);
  xhr.send();
}
/*
function descomponerDireccion(array){
document.getElementById('numext').value = '';
document.getElementById('calle').value = '';
document.getElementById('zip').value = '';
document.getElementById('pais').value = '';
document.getElementById('edo').value = '';
document.getElementById('city').value = '';
document.getElementById('mun').value = '';
document.getElementById('col').value = '';
for (let i = 0; i < array.length; i++) {
  let element = array[i].types[0];
  if (element === 'street_number') {
    document.getElementById('numext').value = array[i].long_name;
  }else if (element === 'route') {
    document.getElementById('calle').value = array[i].long_name;
  }else if (element === 'postal_code') {
    document.getElementById('zip').value = array[i].long_name;
  }else if (element === 'country') {
    document.getElementById('pais').value = array[i].long_name;
  }else if (element === 'administrative_area_level_1') {
    document.getElementById('edo').value = array[i].long_name;
  }else if (element === 'locality') {
    document.getElementById('city').value = array[i].long_name;
  } else if (element === 'political') {
    document.getElementById('mun').value = array[i].short_name;
  }else if (element === 'neighborhood') {
    document.getElementById('col').value = array[i].short_name;
  }
  
}
}*/

///////////////////////
function cargarHeadFoot() {

  menu.innerHTML =
    `<nav class="navbar navbar-expand-lg navbar-light bg-dark mt-1">
  <div class="container-fluid justify-content-between ps-0">
  <div id="background-logo" class="ms-3"> 
  <img src="assets/img/logo-completo.png" alt="logo" id="logo-completo">
  </div>
    
    <button class="navbar-toggler text-white bg-white" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end fw-bolder mt-4" id="navbarNavDropdown">
      <ul style="padding-left: 5px;" class="navbar-nav text-center">
        <li class="nav-item ps-3">
          <a class="nav-link active text-white bg-dark wrapper effect-underline" aria-current="page"
            href="index.html">Inicio</a>
        </li>

        <li class="nav-item ps-3">
          <a class="nav-link text-white bg-dark wrapper effect-underline" href="login.html">Mi Cuenta</a>
        </li>

          <li class="nav-item dropdown ps-3">
          <a class="nav-link dropdown-toggle text-white bg-dark wrapper effect-underline2"
             id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">Productos</a>

          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" data-bs-popper="none">
            <li><a class="dropdown-item text-white bg-dark fw-bolder wrapper effect-underline" href="recomendacion.html">Recomendación</a>
            </li>
            <li><a class="dropdown-item text-white bg-dark fw-bolder wrapper effect-underline" href="equipos.html#alta">Gama Alta</a></li>
            <li><a class="dropdown-item text-white bg-dark fw-bolder wrapper effect-underline" href="equipos.html#media">Gama Media</a></li>
            <li><a class="dropdown-item text-white bg-dark fw-bolder wrapper effect-underline" href="equipos.html#baja">Gama Baja</a></li>
          </ul>
          </li>

        <li class="nav-item ps-3">
          <a class="nav-link text-white bg-dark wrapper effect-underline" href="acerca.html">Nosotros</a>
        </li>

        <li class="nav-item ps-3">
          <a class="nav-link text-white bg-dark wrapper effect-underline"
            href="contacto.html">Contacto</a>
        </li>

        <li class="nav-item ps-3">
          <a class="nav-link" href="carrito.html"><img src="assets/img/carro3.png"
              width="50px" height="50px"></a>
        </li>

      </ul>
    </div>
  </div>
</nav>`;



  piepagina.innerHTML =
    `<div class="d-flex  justify-content-between">
  <div class="col-md-4 d-flex">
    <p class="text-rocket  ps-0 pe-1 fw-bolder letras-estilo22">© 2022 <br>Equipo Rocket</p>
  </div>

  <ul class="col-md-8 nav justify-content-end list-unstyled d-flex pe-5 flex-nowrap align-items-center">
  <li class="ms-3 figma">
      <a class="text-icono1" href="https://www.figma.com/file/a1sA5a7ZghgSQnh4fBYfPF/ArtWare-Mockup-2.0?node-id=28%3A86">
          <i class="fab fa-figma" aria-hidden="true"></i>
      </a>
  </li>
  <li class="ms-3 git">
      <a class="text-icono2" href="https://github.com/ReynaRASD/Equipo-Rocket">
          <i class="fab fa-github" aria-hidden="true"></i>
      </a>
  </li>
  <li class="ms-3 lin">
      <a class="text-icono3" href="https://www.linkedin.com/">
          <i class="fab fa-linkedin" aria-hidden="true"></i>
      </a>
  </li>
  </ul>
</div>`;
}

// Al recargar la página, la pantalla regresa a su posición original. 
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
}

/*
CARRITOOOOO
*/

const $contenidoDelCarrito = document.querySelector('.contenidoDelCarrito');


//esta funcion se carga cuando se inicia la pagina y agrega los objetos al carrito
function cargarCarrito() {

  const carritoDeComprasFila = document.createElement("div");

  let carrito = sessionStorage.getItem("carrito");

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


var control = 0; 
//esta funcion actualiza el precio total del carrito
function actualizarTotal(numero) {
  let total = 0;
  const carritoTotal = document.querySelector('.carrito-total');
  console.log(carritoTotal);
  const carritoComprasObjetos = document.querySelectorAll('.carritoObjeto')
  console.log("objetos del carrito", carritoComprasObjetos);

  carritoComprasObjetos.forEach(carritoObjeto => {
    const elementosCarritoPrecio = carritoObjeto.querySelector('.shoppingCartItemPrice')
    const precioObjeto = Number(elementosCarritoPrecio.textContent.replace('$', '',).replace(',', ''));

    const numeroObjetos = carritoObjeto.querySelector('.shoppingCartItemQuantity');


    const valor = Number(numeroObjetos.value);

    total = total + precioObjeto * valor;

  });
  const $superBoton = document.querySelector('.superBoton');
  
  const espacioBoton = document.createElement("div");
  let superBotonComprar = `<button class="btn btn-success  comprarButton fw-bolder" type="button" data-bs-toggle="modal"
      data-bs-target="#staticBackdrop" onclick="comprarBotonClick()">Comprar</button>`
      espacioBoton.innerHTML = superBotonComprar
     
  if (carritoComprasObjetos.length != 0 && control == 0) {
     control++
    $superBoton.appendChild(espacioBoton)
  }else if(carritoComprasObjetos.length == 0 && control > 0){
    $superBoton.innerHTML = '';
    control = 0;
  }

  const elementosTitulo = $contenidoDelCarrito.getElementsByClassName('shoppingCartItemTitle')
  

  console.log('aqui snake ', elementosTitulo);

 




  carritoTotal.innerHTML = `${total.toFixed(2)}$`
}

//esta funcion remueve elementos del carrito
function removerObjeto(event) {
  const clickBoton = event.target;
  clickBoton.closest('.carritoObjeto').remove();
  control++
  actualizarTotal()
}

//esta funcion cambia el valor del contador
function cambiarContador(event) {
  const imput = event.target;

  if (imput.value <= 0) {
    imput.value = 1;
  }
  actualizarTotal($divsCarrito == 0);
}



function comprarBotonClick() {
  $contenidoDelCarrito.innerHTML = '';
  actualizarTotal();
}










