const $formulario = document.querySelector('#formulario');
const $password = document.querySelector('#password');
const $correo = document.querySelector('#correo');
const $nombre = document.querySelector('#nombre');
const $telefono = document.querySelector('#telefono');

$formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = $password.value;
    const correo = $correo.value;
    const nombre = $nombre.value;
    const telefono = $telefono.value;

    
        fetch("http://localhost:8080/usuario/registrar",{
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            body: JSON.stringify( {
                password,
                correo,
                nombre,
                telefono
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf8',
                'Access-Control-Allow-Origin': '*'


            }
        })

        
        .then(resp => resp.text()).then(console.log)

        
    
    

})