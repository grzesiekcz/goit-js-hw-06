"use strict";
const input = document.querySelector("#validation-input");

const validation = () => {
  if (input.value.length == input.getAttribute("data-length")) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};

input.addEventListener("blur", validation);
