// Reference variables

const numbersBtn = document.querySelectorAll(".num-btn");
const operatorsBtn = document.querySelectorAll(".operators");
const equalityBtn = document.querySelector("#equality-operator");
const decimalBtn = document.querySelector("#decimal-btn");
const deleteBtn = document.querySelector("#delete-btn");
const clearBtn = document.querySelector("#all-clear-btn");
const display = document.querySelector("#calc-display");

let firstNumber = "";
let secondNumber = "";
let result = 0;
let operator = "";
let hasClicked = false;

function getOperator(op) {
  operator = op;
  hasClicked = true;
  display.textContent = `${firstNumber} ${operator}`;
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
    default:
      divide(firstNumber, secondNumber);
      break;
  }
}
equalityBtn.addEventListener("click", () => {
  operate();
  display.textContent = `${result}`;
});

function getNumbers(number) {
  if (!hasClicked) {
    firstNumber += number;
    console.log(firstNumber);
    display.textContent = `${firstNumber}`;
  } else {
    secondNumber += number;
    console.log(secondNumber);
    display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
  }
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
}

numbersBtn.forEach((button) => {
  button.addEventListener("click", () => {
    getNumbers(button.textContent);
  });
});
