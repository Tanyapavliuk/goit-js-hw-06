"use strict"

const listEl = document.querySelector("#categories");

const itemListEl = listEl.children.length;

console.log("Number of categories: ", itemListEl);

const arrayItem = listEl.children;

function getInformation(array) {
  array.forEach( element => {
      console.log("Category: ", element.firstElementChild.textContent);
      console.log("Elements: ", element.lastElementChild.children.length);
    });
}

getInformation([...arrayItem]);

