function cargarHeadFoot(){
    menu.innerHTML = `    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <img class="navbar-brand text-white bg-dark" src="assets/img/logo.jpeg" alt="" width="20%">
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
  piepagina.innerHTML = `      <div class="col-md-4 d-flex align-items-center">
  <p class="text-rocket text-center">© 2022 Equipo Rocket prueba</p>
</div>

<ul class="nav justify-content-end list-unstyled d-flex">

  <li class="ms-3 figma"><a class="text-icono1"
      href="https://www.figma.com/file/a1sA5a7ZghgSQnh4fBYfPF/ArtWare-Mockup-2.0?node-id=28%3A86"><i
        class="fab fa-figma" aria-hidden="true"></i>
    </a></li>
  <li class="ms-3 git"><a class="text-icono2" href="https://github.com/ReynaRASD/Equipo-Rocket"><i
        class="fab fa-github" aria-hidden="true"></i></a></li>
  <li class="ms-3 lin"><a class="text-icono3" href="https://www.linkedin.com/"><i class="fab fa-linkedin"
        aria-hidden="true"></i>
    </a></li>

</ul>`;
}