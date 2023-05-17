"use strict";
const refs = {
    buttonDecrementRef: document.querySelector("[data-action=decrement]"),
    buttonIncrementRef: document.querySelector("[data-action=increment]"),
    valueRef: document.querySelector("#value"),
}

let counterValue = 0;

refs.buttonDecrementRef.addEventListener("click", onClickButtonDecrement);
refs.buttonIncrementRef.addEventListener("click", onClickButtonIncrement);

function onClickButtonDecrement() {
    counterValue -= 1;
    refs.valueRef.textContent = counterValue;
};

function onClickButtonIncrement() {
    counterValue += 1;
    refs.valueRef.textContent = counterValue;
};





