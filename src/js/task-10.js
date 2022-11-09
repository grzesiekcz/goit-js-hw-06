"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
let size = 20;
const createBoxes = () => {
  let amount = input.value;

  for (let i = 1; i <= amount; i++) {
    size += 10;
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginTop = "5px";
    box.style.borderRadius = "5px";
    box.style.height = `${size}px`;
    box.style.width = `${size}px`;

    boxes.append(box);
  }
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
  size = 20;
};

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);
