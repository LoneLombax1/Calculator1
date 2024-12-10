let oper;
let var1;
let var2;
let op1;
let done;

function cleared() {
  let screen1 = document.getElementById("screen");
  screen1.innerText = "";
  oper = false;
  op1 = "";
  done = false;
}

function number(num) {
  if (done) cleared();

  let buttn = document.getElementById("screen");

  if (buttn.innerHTML === "Screen") {
    buttn.innerHTML = "";
  }

  buttn.style.padding = "33px";
  buttn.innerHTML += num;
}

function operator1(op) {
  var1 = document.getElementById("screen").innerHTML;

  cleared();
  op1 = op;
  oper = true;
}

function decim() {
  if (done) cleared();

  const screen = document.getElementById("screen");
  if (screen.innerHTML.includes(".")) {
    screen.innerHTML = "ERROR!";
    return;
  }

  if (screen.innerHTML === "") {
    screen.innerHTML = "0.";
  } else {
    inputNumber(".");
  }
}

function calculate() {
  if (!oper) return; // Prevent calculation if no operator set
  let result;

  if (operator === "^") {
    result = Math.pow(firstOperand, secondOperand);
  } else {
    result = eval(`${+firstOperand} ${operator} ${+secondOperand}`);
  }

  document.getElementById("screen").innerHTML = result;
  calculationDone = true;
}
