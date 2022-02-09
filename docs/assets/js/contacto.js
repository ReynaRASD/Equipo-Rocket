const $contacto = document.getElementById("contacto");
const $nombre = document.getElementById("nombre");
const $email = document.getElementById("email");
const $mensaje = document.getElementById("mensaje");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,45}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    mensaje: /^[a-zA-Z0-9\_\-]{1,200}$/ // Letras, numeros, guion y guion_bajo
}

const campos = {
    nombre: false,
    email: false,
    mensaje: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;
        case "mensaje":
            validarCampo(expresiones.mensaje, e.target, 'mensaje');
        break;
    }
}


const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
        campos[campo] = false;
    }
}

$nombre.addEventListener('keyup', validarFormulario);
$nombre.addEventListener('blur', validarFormulario);
$mensaje.addEventListener('keyup', validarFormulario);
$mensaje.addEventListener('blur', validarFormulario);
$email.addEventListener('keyup', validarFormulario);
$email.addEventListener('blur', validarFormulario);


formulario.addEventListener('submit', (e)=>{
    if (campos.nombre && campos.email && campos.mensaje) {
        document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje-activo');
        if (!confirm("¿Está seguro de enviar los datos?")) {
            e.preventDefault();
        }
    } else {
        e.preventDefault();
        document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');
    }
});