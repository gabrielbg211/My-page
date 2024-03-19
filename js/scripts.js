var nameField = document.forms["contact"]["name"];
var emailField = document.forms["contact"]["email"];
var messageField = document.forms["contact"]["message"];
var submitButton = document.getElementById("submitButton");

// Habilitar o deshabilitar el botón de envío en tiempo real
nameField.addEventListener("input", enableSubmitButton);
emailField.addEventListener("input", enableSubmitButton);
messageField.addEventListener("input", enableSubmitButton);

function enableSubmitButton() {
    if (nameField.value !== "" && emailField.value !== "" && messageField.value !== "") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form[name='contact']");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el envío predeterminado del formulario

        // Validar el formulario
        if (validateForm()) {
            // Si el formulario es válido, enviar datos (aquí se puede agregar lógica adicional)
            
            // Redirigir a index.html después de 3 segundos
            setTimeout(function() {
                window.location.href = "index.html";
            }, 3000);
        }
    });
});

function validateForm() {
    if (nameField.value === "" || emailField.value === "" || messageField.value === "") {
        alert("All fields must be filled out.");
        return false;
    }

    // Validación adicional, por ejemplo, el formato de correo electrónico.
    // Puedes agregar más validaciones aquí.

    return true;
}
