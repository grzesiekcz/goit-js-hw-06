"use strict";

const btnMinus = document.querySelector('[data-action="decrement"]');
const btnPlus = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;
const decrement = () => (value.innerHTML = counterValue -= 1);
const increment = () => (value.innerHTML = counterValue += 1);

btnPlus.addEventListener("click", increment);
btnMinus.addEventListener("click", decrement);
