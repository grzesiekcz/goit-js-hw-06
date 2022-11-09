"use strict";
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const check = () => {
  if (input.value.length > 0) {
    output.innerHTML = input.value;
  } else {
    output.innerHTML = "Anonymous";
  }
};
input.addEventListener("input", check);
