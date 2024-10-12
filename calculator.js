let calculation = localStorage.getItem("calculation") || "";
const displayCal = document.getElementById("displayCal");

displayCalculation();
function displayCalculation() {
  if (calculation) displayCal.textContent = calculation;
  else {
    displayCal.textContent = 0;
  }
}
function updateCalculation(value) {
  calculation += value;
  displayCalculation();
}
document.getElementById("btn-0").onclick = () => {
  updateCalculation("0");
};
document.getElementById("btn-1").onclick = () => {
  updateCalculation("1");
};
document.getElementById("btn-2").onclick = () => {
  updateCalculation("2");
};
document.getElementById("btn-3").onclick = () => {
  updateCalculation("3");
};
document.getElementById("btn-4").onclick = () => {
  updateCalculation("4");
};
document.getElementById("btn-5").onclick = () => {
  updateCalculation("5");
};
document.getElementById("btn-6").onclick = () => {
  updateCalculation("6");
};
document.getElementById("btn-7").onclick = () => {
  updateCalculation("7");
};
document.getElementById("btn-8").onclick = () => {
  updateCalculation("8");
};
document.getElementById("btn-9").onclick = () => {
  updateCalculation("9");
};

document.getElementById("clear-btn").onclick = () => {
  calculation = "";
  localStorage.removeItem("calculation");
  displayCalculation();
};
document.getElementById("delete-btn").onclick = () => {
  calculation = calculation.substring(0, calculation.length - 1);
  displayCalculation();
};
document.getElementById("plus-btn").onclick = () => {
  updateCalculation("+");
};
document.getElementById("minus-btn").onclick = () => {
  updateCalculation("-");
};
document.getElementById("divide-btn").onclick = () => {
  updateCalculation("/");
};
document.getElementById("multiply-btn").onclick = () => {
  updateCalculation("*");
};
document.getElementById("decimal-btn").onclick = () => {
  if(displayCal.textContent === '0') updateCalculation('0');
  updateCalculation(".");
};
document.getElementById("equal-btn").onclick = () => {
  calculation = eval(calculation);
  calculation = String(calculation); // chuyển về để dùng delete-btn
  localStorage.setItem("calculation", calculation);
  displayCalculation();
};
