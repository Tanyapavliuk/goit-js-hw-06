"use strict";

const refs = {
    inputVale : document.querySelector("#validation-input"),
};

const lengthSymbols =  Number(refs.inputVale.dataset.length); //припустима довжина 6

refs.inputVale.addEventListener("blur", getColorInput);

function getColorInput() {
    if (refs.inputVale.value.length === lengthSymbols) {
        
        refs.inputVale.classList.remove("invalid");
        return refs.inputVale.classList.add("valid");
    }
    
     refs.inputVale.classList.add("invalid");
};

