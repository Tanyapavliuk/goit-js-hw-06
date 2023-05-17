"use strict";

const refs = {
    inputVale : document.querySelector("#validation-input"),
};

const lengthSymbols =  Number(refs.inputVale.dataset.length); //припустима довжина 6
console.log("🚀 ~ file: task-06.js:8 ~ lengthSymbols:", lengthSymbols)

refs.inputVale.addEventListener("blur", getColorInput);

function getColorInput() {
    if (refs.inputVale.value.length === lengthSymbols) {
        console.log(refs.inputVale.value.length);
        refs.inputVale.classList.remove("invalid");
        return refs.inputVale.classList.add("valid");
    }
    
     refs.inputVale.classList.add("invalid");
};

