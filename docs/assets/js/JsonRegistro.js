const $formulario = document.querySelector('#formulario');
const $password = document.querySelector('#password');
const $correo = document.querySelector('#correo');
const $nombre = document.querySelector('#nombre');
const $telefono = document.querySelector('#telefono');

$formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = $password.value;
    const correo = $correo.value;
    const nombre = $nombre.value;
    const telefono = $telefono.value;

    if(password != '' && correo != '' && nombre != '' && telefono != '') {
        fetch('http://localhost:8080/registrar', {
            method: 'POST',
            body: JSON.stringify( {
                password,
                correo,
                nombre,
                telefono
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((json) => console.log (json));
    }

})