"use strict";

const refs = {
    containerForm: document.querySelector(".login-form"), 
    buttonSubmit: document.querySelector('button[type="submit"]'),
    emailInput: document.querySelector("input[type='email']"),
    passwordInput: document.querySelector("input[type='password']"),
}

refs.containerForm.addEventListener("submit", onContainerForm)
    
function onContainerForm(event) {
    event.preventDefault(); //відміна стандартної поведінки перезавантаження
    if (refs.emailInput.value === ""
        || refs.passwordInput.value === "") {
       return alert("Please, fill all input");
    }

    const formelements = event.currentTarget.elements; 

    const userFillForm = {
        email: formelements.email.value,
        password: formelements.password.value,
    }
    console.log(userFillForm);
    // const formData = new FormData(event.currentTarget);
    refs.containerForm.reset();
}
