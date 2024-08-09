document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const cedula = document.getElementById("cedula").value;

    // Crear el objeto JSON
    const user = {
        nombre: nombre,
        apellido: apellido,
        edad: parseInt(edad),
        cedula: cedula
    };

    // Enviar la solicitud POST usando fetch
    fetch("/api/trayendoJson", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Usuario registrado:", data);
    })
    .catch(error => {
        console.error("Error al registrar el usuario:", error);
    });
});