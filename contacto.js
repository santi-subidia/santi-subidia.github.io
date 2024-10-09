document.querySelector('.formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el envío del formulario

    // Capturar los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('telefono').value;

    // Asignar los valores capturados a los spans de la pantalla de resultados
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayTelefono').textContent = phone;

    // Añadir la clase para deslizar el formulario a la izquierda
    document.querySelector('.conteiner').classList.add('slide-left');

    // Añadir la clase para mostrar la pantalla de resultados
    document.querySelector('.conteinerResult').classList.add('active');
});

