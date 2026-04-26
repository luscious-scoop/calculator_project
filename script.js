// Reference variables

const numbersBtn = document.querySelectorAll(".num-btn");
const operatorsBtn = document.querySelectorAll(".operators");
const equalityBtn = document.querySelector("#equality-operator");
const decimalBtn = document.querySelector("#decimal-btn");
const deleteBtn = document.querySelector("#delete-btn");
const clearBtn = document.querySelector("#all-clear-btn");

let firstNumber = "";
let secondNumber = "";
let result = 0;
let operator = "";
let hasClicked = false;

function getOperator(op) {
  operator = op;
  hasClicked = true;
}
operatorsBtn.forEach((button) => {
  button.addEventListener("click", () => {
    getOperator(button.textContent);
    console.log(operator);
  });
});

function add(num1, num2) {
  result = num1 + num2;
}

function subtract(num1, num2) {
  result = num1 - num2;
}

function multiply(num1, num2) {
  result = num1 * num2;
}

function divide(num1, num2) {
  result = num1 / num2;
}

function operate() {
  switch (operator) {
    case "+":
      add(firstNumber, secondNumber);
      break;
    case "-":
      subtract(firstNumber, secondNumber);
      break;
    case "x":
      multiply(firstNumber, secondNumber);
      break;
    case "&#247;":
      divide(firstNumber, secondNumber);
      break;
  }
}
equalityBtn.addEventListener("click", () => {
  operate();
  console.log(result);
});

function getNumbers(number) {
  if (!hasClicked) {
    firstNumber += number;
    console.log(firstNumber);
  } else {
    secondNumber += number;
    console.log(secondNumber);
  }
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
}

numbersBtn.forEach((button) => {
  button.addEventListener("click", () => {
    getNumbers(button.textContent);
  });
});
