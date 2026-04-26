// Reference variables

const numbersBtn = document.querySelectorAll(".num-btn");
const operatorsBtn = document.querySelectorAll(".operators");
const equalityBtn = document.querySelector("#equality-operator");
const decimalBtn = document.querySelector("#decimal-btn");

let firstNumber = "";
let secondNumber = "";
let result = 0;
let operator = "";

function getFirstNumber() {
  numbersBtn.forEach((button) => {
    button.addEventListener("click", () => {
      firstNumber += button.textContent;
      console.log(firstNumber);
    });
  });
}

function getOperator() {
  operatorsBtn.forEach((button) => {
    button.addEventListener("click", () => {
      operator = button.textContent;
      console.log(operator);
    });
  });
}

function getSecondNumber() {
  numbersBtn.forEach((button) => {
    button.addEventListener("click", () => {
      secondNumber += button.textContent;
      console.log(secondNumber);
    });
  });
}

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
