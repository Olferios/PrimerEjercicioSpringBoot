document.getElementById('registroForm').onsubmit = function(event) {
    event.preventDefault();
const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const cedula = document.getElementById('cedula').value;

    // Crear un objeto con los datos
    const datosFormulario = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        cedula: cedula
    };
    const jsonDatos = JSON.stringify(datosFormulario);
    // Enviar el JSON al endpoint /trayendoJson
    fetch('/trayendoJson', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonDatos
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        alert('Datos enviados exitosamente!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar los datos.');
    });
}