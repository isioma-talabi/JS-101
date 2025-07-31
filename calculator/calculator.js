let calculation = JSON.parse(localStorage.getItem("calc"));

if (calculation === null) {
  calculation = "";
}

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplication = document.getElementById("multiplication");
const dot = document.getElementById("dot");
const equals = document.getElementById("equals");
const divide = document.getElementById("divide");
const clear = document.getElementById("clear");
const displayCalculation = document.getElementById("display-calculation");

displayCalculation.innerHTML = calculation;

one.addEventListener("click", function () {
  updateCalculation("1");
});

two.addEventListener("click", function () {
  updateCalculation("2");
});

three.addEventListener("click", function () {
  updateCalculation("3");
});

four.addEventListener("click", function () {
  updateCalculation("4");
});

five.addEventListener("click", function () {
  updateCalculation("5");
});

six.addEventListener("click", function () {
  updateCalculation("6");
});

seven.addEventListener("click", function () {
  updateCalculation("7");
});

eight.addEventListener("click", function () {
  updateCalculation("8");
});

nine.addEventListener("click", function () {
  updateCalculation("9");
});

zero.addEventListener("click", function () {
  updateCalculation("0");
});

plus.addEventListener("click", function () {
  updateCalculation(" + ");
});

minus.addEventListener("click", function () {
  updateCalculation(" - ");
});

multiplication.addEventListener("click", function () {
  updateCalculation(" * ");
});

dot.addEventListener("click", function () {
  updateCalculation(".");
});

divide.addEventListener("click", function () {
  updateCalculation(" / ");
});

equals.addEventListener("click", function () {
  calculation = eval(calculation);
  displayCalculation.innerHTML = calculation;
  // console.log(calculation);
});

clear.addEventListener("click", function () {
  localStorage.removeItem("calc");
  calculation = "";
  displayCalculation.innerHTML = calculation;
  console.log("Cleared");
});

function updateCalculation(value) {
  calculation += value;
  displayCalculation.innerHTML = calculation;
  // console.log(calculation);
  localStorage.setItem("calc", JSON.stringify(calculation));
}
