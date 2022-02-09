function cargarHeadFoot(){

  /* 
  // Versión original del menú

    menu.innerHTML =     
    `<nav class="navbar navbar-expand-lg navbar-light bg-dark mt-1">
    <div class="container-fluid justify-content-between">
    <div class="ms-2" id="background-logo"> 
      <img src="assets/img/logo.png" alt="logo">
    </div>
      
      <button class="navbar-toggler text-white bg-white" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul style="padding-left: 70px;" class="navbar-nav">
          <li class="nav-item">
            <a style="padding-right: 20px;" class="nav-link active text-white bg-dark" aria-current="page"
              href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a style="padding-right: 20px;" class="nav-link text-white bg-dark"
              href="contacto.html">Contacto</a>
          </li>
          <li class="nav-item">
            <a style="padding-right: 20px;" class="nav-link text-white bg-dark" href="acerca.html">Acerca de
              Nosotros</a>
          </li>
          <li style="padding-right: 20px;" class="nav-item">
            <a class="nav-link text-white bg-dark" href="login.html">Login</a>
          </li>

          <li class="nav-item dropdown">
            <a style="padding-right: 20px;" class="nav-link dropdown-toggle text-white bg-dark"
              href="equipos.html" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
              Lista de Productos
            </a>

            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" data-bs-popper="none">
              <li><a class="dropdown-item text-white bg-dark" href="recomendacion.html">Recomendación</a>
              </li>
              <li><a class="dropdown-item text-white bg-dark" href="equipos.html#alta">Gama Alta</a></li>
              <li><a class="dropdown-item text-white bg-dark" href="equipos.html#media">Gama Media</a></li>
              <li><a class="dropdown-item text-white bg-dark" href="equipos.html#baja">Gama Baja</a></li>
            </ul>

          </li>
          <li class="nav-item">
            <a style="padding-right: 20px;" class="nav-link" href="carrito.html"><img src="assets/img/carro3.png"
                width="50px" height="50px"></a>
          </li>


        </ul>
      </div>
    </div>
  </nav>`;
  */


  /* Iba dentro de background-logo:
      <img src="assets/img/logo-solo.png" alt="logo">
      <div class="d-flex flex-column">
      <img src="assets/img/logo-relleno.png" alt="logo" id="logo-relleno">
      <img src="assets/img/logo-letras.png" alt="logo" id="logo-letras">
      <img src="assets/img/logo-relleno.png" alt="logo" id="logo-relleno">
      </div>
  */

  // Nueva propuesta de menú versión 2

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
              href="equipos.html" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">Productos</a>

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
      <p class="text-rocket  ps-0 pe-1 fw-bolder">© 2022 <br>Equipo Rocket</p>
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

/* Al recargar la página, la posición de la pantalla se mueve hasta arriba. Esto evita inconsistencias. */
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
}