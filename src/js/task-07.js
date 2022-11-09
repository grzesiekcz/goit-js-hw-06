"use strict";
const input = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

const size = () => {
  output.style.fontSize = `${input.value}px`;
};

input.addEventListener("input", size);
