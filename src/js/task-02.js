"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const list = document.createElement("li");
  list.classList.add("item");
  list.textContent = ingredient;
  ul.append(list);
});
