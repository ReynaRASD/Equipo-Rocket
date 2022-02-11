const $contacto = document.getElementById("contacto");
const inputs = document.querySelectorAll("#contacto");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,25}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    mensaje: /^[a-zA-ZÀ-ÿ\s\_\-]{5,150}$/ // Letras, numeros, guion y guion_bajo
}

const campos = {
    nombre: false,
    email: false,
    mensaje: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
			validarCampo(expresiones.nombre, e.target, "nombre");
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
    if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
		document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
		document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
		campos[campo] = true;
	}else{
		document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
		document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
		document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


$contacto.addEventListener('submit', (e)=>{
	e.preventDefault();
    if (campos.nombre && campos.email && campos.mensaje) {
        $contacto.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 4000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
        
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});


