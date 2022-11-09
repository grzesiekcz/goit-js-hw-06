"use strict";
const submit = document.querySelector(".login-form");

const formHandler = (e) => {
  e.preventDefault();
  // console.log(e.currentTarget.elements.password.value);
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  e.currentTarget.reset();
};

submit.addEventListener("submit", formHandler);
