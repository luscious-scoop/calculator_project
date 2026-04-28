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

numbersBtn.forEach((button) => {
  button.addEventListener("click", () => {
    getNumbers(button.textContent);
  });
});

operatorsBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (secondNumber !== "") {
      operate(firstNumber, secondNumber);
      firstNumber = result;
      secondNumber = "";
    }
    getOperator(button.textContent);
    console.log(operator);
  });
});

equalityBtn.addEventListener("click", () => {
  if (display.textContent === `${result}`) {
    operate(result, secondNumber);
  } else {
    operate();
  }

  if (!Number.isInteger(result)) {
    result = result.toFixed(2);
  }
  display.textContent = `${result}`;
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

function getNumbers(number) {
  if (!hasClicked) {
    firstNumber += number;
    console.log(firstNumber);
    if (firstNumber.includes(".")) {
      decimalBtn.disabled = true;
    } else {
      decimalBtn.disabled = false;
    }
    display.textContent = `${firstNumber}`;
  } else {
    decimalBtn.disabled = false;
    secondNumber += number;
    console.log(secondNumber);
    if (secondNumber.includes(".")) {
      decimalBtn.disabled = true;
    }
    display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
  }
}

function getOperator(op) {
  operator = op;
  hasClicked = true;

  display.textContent = `${firstNumber} ${operator}`;
}

function operate(num1 = firstNumber, num2 = secondNumber) {
  firstNumber = num1;
  secondNumber = num2;
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
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

function clearAll() {
  firstNumber = "";
  secondNumber = "";
  result = 0;
  display.textContent = "0";
  hasClicked = false;
}
clearBtn.addEventListener("click", clearAll);
