const formularioRegistro = document.querySelector('#formulario');

document.querySelector('#btnGuardar').addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    // Captura los datos del formulario
    const datos = Object.fromEntries(new FormData(formularioRegistro).entries());

    // Convierte los datos a formato JSON y muestra en consola
    console.log(JSON.stringify(datos));

    // Enviar la solicitud POST usando fetch
    fetch("/api/trayendoJson", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos) // Convertimos 'datos' a cadena JSON para enviar en el cuerpo de la solicitud
    })
    .then(response => response.json()) // Convertimos la respuesta a JSON
    .then(data => {
        console.log("Usuario registrado:", data);
    })
    .catch(error => {
        console.error("Error al registrar el usuario:", error);
    });
});


// document.getElementById("formulario").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevenir el envío del formulario

//     // Obtener los valores de los campos
//     const nombre = document.getElementById("nombre").value;
//     const apellido = document.getElementById("apellido").value;
//     const edad = document.getElementById("edad").value;
//     const cedula = document.getElementById("cedula").value;

//     // Crear el objeto JSON
//     const user = {
//         nombre: nombre,
//         apellido: apellido,
//         edad: parseInt(edad),
//         cedula: cedula
//     };

//     // Enviar la solicitud POST usando fetch
//     fetch("/api/trayendoJson", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(user)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log("Usuario registrado:", data);
//     })
//     .catch(error => {
//         console.error("Error al registrar el usuario:", error);
//     });
// });