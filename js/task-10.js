function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const refs = {
  boxes: document.querySelector("#boxes"),
  userInput: document.querySelector("input[type='number']"),
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
}

refs.buttonCreate.addEventListener("click", onCreateBoxes);
refs.buttonDestroy.addEventListener("click", onDestroyBoxes);
 
let arrayBoxes = [];

function onCreateBoxes() {
  const amount = Number(refs.userInput.value);
  if (amount <= 0 || amount >= 100) {
     refs.userInput.value = ""; 
    return alert("Please, write other number < 100, but number > 0");
  }
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i += 1){
      const newElement = document.createElement("div");
      newElement.style.width = width + "px";
      newElement.style.height = height + "px";
      newElement.style.backgroundColor = getRandomHexColor();

    arrayBoxes.push(newElement);
    
    height += 10;
    width += 10;
  }
  refs.boxes.append(...arrayBoxes);
}

function onDestroyBoxes() {
  refs.boxes.innerHTML = " ";
  refs.userInput.value = "";
  arrayBoxes = [];
}