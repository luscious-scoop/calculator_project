// Reference variables

const numbersBtn = document.querySelectorAll(".num-btn");
const operatorsBtn = document.querySelectorAll(".operators");
const equalityBtn = document.querySelector("#equality-operator");
const decimalBtn = document.querySelector("#decimal-btn");

let firstNumber = "";
let secondNumber = "";
let result = 0;
let operator = "";
let hasClicked = false;

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
  hasClicked = true;
  let op = "";
  return operatorsBtn.forEach((button) => {
    button.addEventListener("click", () => {
      op = button.textContent;
      console.log(op);
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

function getInputs() {
  operator = getOperator();
  if (!hasClicked) {
    firstNumber = getFirstNumber();
  } else {
    secondNumber = getSecondNumber();
  }

  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
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

getInputs();
