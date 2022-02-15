
let isHidden = true; 

var mostrarMensaje = () => {
  if(isHidden === true) {
      textoOculto.innerHTML = `<div class="card m-3 text-white border-0 bg-dark">
      <h1 class="titulo letras-estilo3">Bien hecho</h2>
      <div class="card-body">
        <p>
          Jessie: Prepárense para los problemas. <br> James: Y más vale que teman. <br> Jessie: Para proteger al mundo de la
          devastación. <br> James: Para unir a los pueblos dentro de nuestra nación. <br> Jessie: Para denunciar los males de la
          verdad y el amor. <br> James: Para extender nuestro reino hasta las estrellas. <br> Jessie: ¡Jessie!  <br> James: ¡Jame me me
          mes! <br> Jessie: ¡El Equipo Rocket viajando a la velocidad de la luz! <br> James: ¡Ríndanse ahora o prepárense a
          luchar! <br> Meowth: ¡Meowth! ¡Así es! <br> Wobbuffet: ¡Wobbuffet!
        </p>
      </div>
    </div>`;
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

