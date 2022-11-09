"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const output = document.querySelector(".color");
const color = document.querySelector(".change-color");

const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  output.textContent = getRandomHexColor();
};

color.addEventListener("click", changeColor);
