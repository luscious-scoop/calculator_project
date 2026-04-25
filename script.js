// Reference variables

const numbersBtn = document.querySelectorAll(".num-btn");
const operatorsBtn = document.querySelectorAll(".operators");
const equalityBtn = document.querySelector("#equality-operator");
const decimalBtn = document.querySelector("#decimal-btn");

let firstNumber = "";
let secondNumber = "";
let result = 0;

function getFirstNumber() {
  numbersBtn.forEach((button) => {
    button.addEventListener("click", () => {
      firstNumber += button.textContent;
      console.log(firstNumber);
    });
  });
}
