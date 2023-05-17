"use strict";

const refs = {
    userInputName: document.querySelector("#name-input"),
    nameInText: document.querySelector("#name-output"),
   
}

refs.userInputName.addEventListener("input", getNameInText);

function getNameInText() {
    if (refs.userInputName.value == "") {
       return refs.nameInText.textContent = "Anonymous";
    }
    return refs.nameInText.textContent = refs.userInputName.value;
}