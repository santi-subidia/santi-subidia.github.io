function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarTelefono(telefono) {
    const regex = /^[0-9\s\-\+]{10}$/;
    return regex.test(telefono);
}

function validarNombre(nombre) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(nombre);
}

function validarFormulario(event) {

    event.preventDefault();

    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const nombre = document.getElementById('name').value;

    let errorEmail = document.getElementById('errorEmail');
    let errorTelefono = document.getElementById('errorTelefono');
    let errorName = document.getElementById('errorName');

    let valido = true;

    if (!validarEmail(email)) {
        errorEmail.style.display = 'block';
        valido = false;
    } else { errorEmail.style.display = 'none'; }
    

    if (!validarTelefono(telefono)) {
        errorTelefono.style.display = 'block';
        valido = false;
    } else { errorTelefono.style.display = 'none'; }

    if (!validarNombre(nombre)) {
        errorName.style.display = 'block';
        valido = false;
    } else { errorName.style.display = 'none'; }


    if(valido == true) {

        const caja = document.getElementById('caja');

        caja.innerHTML = '';

        const nom = document.createElement('span');
        const ema = document.createElement('span');
        const tel = document.createElement('span');

        nom.textContent = 'Nombre: ' + nombre;
        ema.textContent = 'Email: ' + email;
        tel.textContent = 'Telefono: ' + telefono;

        caja.appendChild(nom);
        caja.appendChild(ema);
        caja.appendChild(tel);
        
        document.querySelector('.conteinerResult').classList.add('active');

        document.querySelector('.formulario').reset();
    }

    return valido;
}

