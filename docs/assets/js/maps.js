let lat, lng, coordenadas, autocomplete, map, myLatLng, marker, response, address;

//Código de funcion para obtener ubicación por botón

var ubi = document.getElementById('mapaubicacion');
ubi.addEventListener("click", ()=>{
  //alert("Esta en construccion")
  
   function localizacion(posicion){
    lat = posicion.coords.latitude;
    lng = posicion.coords.longitude;
    
    obtenerDireccion(lat,lng);
    ubicarMarcador(lat,lng);
    
  }
  
  Navigator.geolocation.getCurrentPosition(localizacion,errorDeUbicacion); 
  function errorDeUbicacion(){
    alert("Error al obtener tu ubicación")
  }

// Apartir de coordenadas separadas obtener la dirección
function obtenerDireccion(lati,longi){
  let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lati + ',' + longi + '&key=AIzaSyCrPZOMvbdb6qzeZE_FFjWtrcUuF7c49CA';
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4){
          response = JSON.parse(xhr.responseText);
          document.getElementById('autocomplete').value = response.results[0].formatted_address;
      }
  }
  xhr.open('GET', url);
  xhr.send();
  
}});

//Funcion para inicializar el autocompletado de direcciones
function initAutocomplete(){
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            fields: ["formatted_address", "geometry", "name"],
            componentRestrictions: {'country': ['MX']}
        });
    autocomplete.addListener('place_changed', onPlaceChanged);
}
//Funcion para la seleccion de alguna dirección
function onPlaceChanged(){
    var place = autocomplete.getPlace();
    if (!place.geometry){
        //Usuario no seleccionó opción, resetear
        alert("Favor de seleccionar una opción");
    }else{
        //Ubicar pin con la dirección indicada
        obtenerCoordenadas();
    }
}

//Funcion para inicializar mapa
function initMap() {
  map = new google.maps.Map(document.getElementById("mapi"), {
    center: { lat: 23.305, lng: -102.206},
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
function direction(){
    address = (document.getElementById('autocomplete').value).replace(/ /g, "%20");
}
//Obtener coordenadas cuando se escribe una dirección
function obtenerCoordenadas(){
            direction();
            let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyCrPZOMvbdb6qzeZE_FFjWtrcUuF7c49CA';
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4){
                    response = JSON.parse(xhr.responseText);
                    ubicarMarcador(response.results[0].geometry.location.lat,response.results[0].geometry.location.lng);
                }
            }
            xhr.open('GET', url);
            xhr.send();
}

// Código para cambiar la ubicación del marker
function ubicarMarcador(mylat,mylng){
  myLatLng = new google.maps.LatLng(mylat,mylng);
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
  obtenerDireccion(marker.getPosition().lat(),marker.getPosition().lng());
});
}


