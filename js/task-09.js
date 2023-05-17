
const refs = { 
  body: document.body,
  buttonChangeColor: document.querySelector(".change-color"),
  changetext: document.querySelector('.color'),
}

refs.buttonChangeColor.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  const color = refs.body.style.backgroundColor;

  refs.changetext.textContent = color;
}



