const $formulario = document.querySelector('#formulario');
const $password = document.querySelector('#password');
const $correo = document.querySelector('#correo');
const $nombre = document.querySelector('#nombre');
const $telefono = document.querySelector('#telefono');

$formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = $password.value;
    const username = $correo.value;
    const correo =  $correo.value;
    const nombre = $nombre.value;
    const telefono = $telefono.value;

    
        fetch("http://localhost:8080/api/user",{
            method: 'POST',
            body: JSON.stringify( {
                password,
                correo,
                username,
                nombre,
                telefono
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf8',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'

            }
        })

        
        .then(resp => resp.text()).then(console.log)

        
    
    

})