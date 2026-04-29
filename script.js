// Reference variables

const numbersBtn = document.querySelectorAll(".num-btn");
const operatorsBtn = document.querySelectorAll(".operators");
const equalityBtn = document.querySelector("#equality-operator");
const decimalBtn = document.querySelector("#decimal-btn");
const deleteBtn = document.querySelector("#delete-btn");
const clearBtn = document.querySelector("#all-clear-btn");
const display = document.querySelector("#calc-display");
const calculator = document.querySelector("#main-container");

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
    operatorEvent(button.textContent);
  });
});

equalityBtn.addEventListener("click", performCalculation);

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
  if (result !== 0 && display.textContent === `${result}`) {
    clearAll();
  }
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
    case "*":
      multiply(firstNumber, secondNumber);
      break;
    case "÷":
    case "/":
      divide(firstNumber, secondNumber);
      break;
    default:
      clearAll();
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

function backSpace() {
  decimalBtn.disabled = false;
  if (result !== 0 && display.textContent === `${result}`) {
    clearAll();
  } else if (secondNumber !== "") {
    secondNumber = String(secondNumber).split("");
    if (secondNumber.length !== 1) {
      secondNumber.pop();

      secondNumber = secondNumber.join("");
    } else {
      secondNumber = "";
    }
    display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
  } else if (operator !== "") {
    operator = "";
    display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
  } else if (firstNumber !== "") {
    firstNumber = String(firstNumber).split("");
    if (firstNumber.length !== 1) {
      firstNumber.pop();
      console.log(typeof firstNumber);
      firstNumber = firstNumber.join("");
      display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    } else {
      clearAll();
    }
  }
}

deleteBtn.addEventListener("click", backSpace);

function operatorEvent(buttonText) {
  if (secondNumber !== "") {
    operate(firstNumber, secondNumber);
    firstNumber = result;
    secondNumber = "";
  }
  getOperator(buttonText);
  console.log(operator);
}

function performCalculation() {
  if (display.textContent === `${result}`) {
    operate(result, secondNumber);
  } else if (firstNumber && operator && secondNumber) {
    operate();
  } else {
    return;
  }

  if (!Number.isInteger(result)) {
    if (result === Infinity) {
      alert("Nope");
      clearAll();
    } else {
      result = result.toFixed(2);
    }
  }
  display.textContent = `${result}`;
}

document.body.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "0":
      getNumbers(e.key);
      break;
    case "1":
      getNumbers(e.key);
      break;
    case "2":
      getNumbers(e.key);
      break;
    case "3":
      getNumbers(e.key);
      break;
    case "4":
      getNumbers(e.key);
      break;
    case "5":
      getNumbers(e.key);
      break;

    case "6":
      getNumbers(e.key);
      break;

    case "7":
      getNumbers(e.key);
      break;

    case "8":
      getNumbers(e.key);
      break;

    case "9":
      getNumbers(e.key);
      break;
  }
});

document.body.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "+":
      operatorEvent(e.key);
      break;
    case "-":
      operatorEvent(e.key);
      break;

    case "*":
      operatorEvent(e.key);
      break;

    case "/":
      operatorEvent(e.key);
      break;
  }
});

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    performCalculation();
  }
});
