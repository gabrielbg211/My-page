/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var nameField = document.forms["contact"]["name"];
    var emailField = document.forms["contact"]["email"];
    var messageField = document.forms["contact"]["message"];
    var submitButton = document.getElementById("submitButton");

    function validateForm() {
        if (nameField.value === "" || emailField.value === "" || messageField.value === "") {
            alert("All fields must be filled out.");
            return false;
        }

        // Validación adicional, por ejemplo, el formato de correo electrónico.
        // Puedes agregar más validaciones aquí.

        return true;
    }

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


    // Este script manejará la redirección después de enviar el formulario
        document.addEventListener("DOMContentLoaded", function() {
            const form = document.querySelector("form[name='contact']");
            form.addEventListener("submit", function(event) {
                event.preventDefault(); // Prevenir el envío predeterminado del formulario

                // Puedes agregar aquí cualquier lógica de procesamiento adicional, como enviar datos a un servidor

                // Redirigir a index.html después de 3 segundos (3000 milisegundos)
                setTimeout(function() {
                    window.location.href = "index.html";
                }, 3000); // Cambia este valor si deseas una espera diferente
            });
        });
