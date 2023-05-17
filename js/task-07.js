"use strict";

const refs = {
    rangeInput: document.querySelector("#font-size-control"),
    text: document.querySelector("#text"),
}

refs.rangeInput.addEventListener("input", changeText);

function changeText() {
    refs.text.style.fontSize = refs.rangeInput.value +"px" ;
}
