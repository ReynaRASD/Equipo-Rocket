const $formulario = document.querySelector('#formulario');
const $password = document.querySelector('#exampleInputPassword1');
const $correo = document.querySelector('#exampleInputEmail1');

$formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = $password.value;
    const username = $correo.value;
    

    if(password !='' && username !=''){
        fetch("http://localhost:8080/api/login",{
            method: 'POST',
            body: JSON.stringify( {
                password,
                username
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf8',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'

            }
        }).then(resp => {
            const token = resp.headers.get('Authorization');
            
            if(token && token.includes('Bearer') && resp.ok) {
                localStorage.setItem('token', token);
                console.log(token);
                url = window.location;
                const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
                location.href = path +  'administrador.html';
            } else {
                localStorage.removeItem('token');
                Swal.fire({
                    title: 'Correo electronico o contraseña incorrecta',
                    text: 'Reintentar',
                    icon: 'error',
                    confirmButtonText: 'ok'
                });
                //emailError.textContent = 'Usuario o contraseña incorrecta';
            }
        })
    }

})