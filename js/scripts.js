/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function validateForm() {
    var name = document.forms["contact"]["name"].value;
    var email = document.forms["contact"]["email"].value;
    var message = document.forms["contact"]["message"].value;

    if (name === "") {
        alert("Name must be filled out.");
        return false;
    }
    if (email === "") {
        alert("Email must be filled out.");
        return false;
    }
    if (message === "") {
        alert("Message must be filled out.");
        return false;
    }

    return true;
}