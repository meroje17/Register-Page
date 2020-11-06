// Retrieving  DOM elements.

let inputsBorders = document.querySelectorAll(".form .input");
let inputs = document.querySelectorAll("input");
let submitButton = document.querySelector("#submit");
let svgs = document.querySelectorAll("svg");
let values = [];

// Change inputs border when user click on.

inputsBorders.forEach((element) =>
  element.addEventListener("click", function () {
    inputsBorders.forEach((element) => element.classList.remove("selected"));
    this.classList.add("selected");
  })
);

// Call when user submit form.

submitButton.addEventListener("click", function () {
  removeAllClassList();
  retrieveAllValues();
  if (!isFieldEmpty()) {
    everythingsGood;
  }
});

// Remove all selected or error class name.

function removeAllClassList() {
  inputsBorders.forEach((element) => element.classList.remove("selected"));
  inputsBorders.forEach((element) => element.classList.remove("error"));
  svgs.forEach((element) => element.classList.remove("error"));
}

// Retrieve all values in inputs.

function retrieveAllValues() {
  for (var index = 0; index < inputs.length; index++) {
    values.push(inputs[index].value);
  }
}

// Display error for user and reset the array values.

function error(index) {
  inputsBorders[index].classList.add("error");
  svgs[index].classList.add("error");
  values = [];
}

// Reset all after form validated.

function everythingsGood() {
  inputs.forEach((input) => (input.value = null));
  values = [];
}

// Empty fields verification.

function isFieldEmpty() {
  for (var index = 0; index < values.length; index++) {
    if (
      values[index] === null ||
      values[index] === undefined ||
      values[index] === ""
    ) {
      error(index);
      return true;
    }
  }
  return false;
}
