
let isHidden = true; 

var mostrarMensaje = () => {
  if(isHidden === true) {
      textoOculto.innerHTML = `
      <h1 class="titulo letras-estilo3">¡Bien hecho!</h1> 

      <div class="row align-items-center">

      <div class="col-md-6" style="clear: both; text-align: center;">
     <a><img class="img-responsive" src="./assets/img/pikachu-oculto.png"></a>
      </div>

      <div class="col-md-6" style="font-weight: bolder;">
      <p class="text-white" style="font-size:15px">
          Jessie: Prepárense para los problemas. <br> James: Y más vale que teman. <br> Jessie: Para proteger al mundo de la
          devastación. <br> James: Para unir a los pueblos dentro de nuestra nación. <br> Jessie: Para denunciar los males de la
          verdad y el amor. <br> James: Para extender nuestro reino hasta las estrellas. <br> Jessie: ¡Jessie!  <br> James: ¡Jame me me
          mes! <br> Jessie: ¡El Equipo Rocket viajando a la velocidad de la luz! <br> James: ¡Ríndanse ahora o prepárense a
          luchar! <br> Meowth: ¡Meowth! ¡Así es! <br> Wobbuffet: ¡Wobbuffet!
      </p> 
      </div>

      </div>
      
      
    `;
    isHidden = false;
  } else {
    textoOculto.innerHTML = ``;
    isHidden = true;
  }
}

/* Se cancela, no hace falta. Se hace desde html.
function cambiarImagen(persona, tipoImagen) {
  let imgSource;

  if(tipoImagen == "pokemon") {
    imgSource = "./assets/img/perfil-" + persona + "-pokemon.gif";
    document.getElementById("profile_" + persona).src= imgSource;
  } 
  
  else if(tipoImagen == "original") {
    imgSource = "./assets/img/perfil-" + persona + ".jpg";
    document.getElementById("profile_" + persona).src= imgSource;
  }
}
 */

