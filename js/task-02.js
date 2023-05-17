const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refBox = document.querySelector("#ingredients")

   const newItems = ingredients.map(element => {
    const newItem = document.createElement("li");
    newItem.textContent = element;
    newItem.classList.add("item");
    return newItem;
   });

  
refBox.append(...newItems);