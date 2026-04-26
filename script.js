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
  let number = "";
  return numbersBtn.forEach((button) => {
    button.addEventListener("click", () => {
      number += button.textContent;
      console.log(number);
      return number;
    });
  });
}

function getOperator() {
  let op = "";
  return operatorsBtn.forEach((button) => {
    button.addEventListener("click", () => {
      op = button.textContent;
      return op;
    });
  });
}

function getSecondNumber() {
  let number = "";
  return numbersBtn.forEach((button) => {
    button.addEventListener("click", () => {
      number += button.textContent;
      console.log(number);
      return number;
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
