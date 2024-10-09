//               Validación del Formulario 

// Función para validar el Email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para validar el Teléfono
function validarTelefono(telefono) {
    const regex = /^[0-9\s\-\+]{7,15}$/;
    return regex.test(telefono);
}

// Función para validar el Nombre
function validarNombre(nombre) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(nombre);
}

function validarFormulario(event) {

    event.preventDefault();

    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const nombre = document.getElementById('name').value;

    let valido = true;

    if (!validarEmail(email)) {
        document.querySelector('#errorEmail').classList.add('activo');
        console.log("email error");
        valido = false;
    }

    if (!validarTelefono(telefono)) {
        document.querySelector('#errorTelefono').classList.add('activo');
        console.log("telefono error");
        valido = false;
    }

    if (!validarNombre(nombre)) {
        document.querySelector('#errorName').classList.add('activo');
        console.log("nombre error");
        valido = false;
    }

    if(valido == true) {

        document.getElementById('displayName').textContent = nombre;
        document.getElementById('displayEmail').textContent = email;
        document.getElementById('displayTelefono').textContent = telefono;
        
        document.querySelector('.conteinerResult').classList.add('active');
    }

    return valido;
}

