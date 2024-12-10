let oper;
let var1;
let var2;
let op1;
let done;

function cleared() {
    let screen1 = document.getElementById("screen")
    screen1.innerHTML = "";
    screen1.style.padding = "58px"
    oper = false;
    op1 = "";
    done = false;

};

function number(num) {

    if(done === true) {
        cleared()
    }

    let buttn = document.getElementById("screen")

    if (buttn.innerHTML === "Screen") {
        buttn.innerHTML = "";
    }

    buttn.style.padding = "33px";
    buttn.innerHTML += num;

};

function operator1(op) {

    var1 = document.getElementById("screen").innerHTML

    cleared();
    op1 = op
    oper = true;

};

function decim() {

    if(done === true) {
        cleared();
    };
    if (document.getElementById("screen").innerHTML.includes(".")) {
        document.getElementById("screen").innerHTML = "ERROR!"
    };

    if(document.getElementById("screen").innerHTML === "") {
        document.getElementById("screen").innerHTML = "0.";
    } else {
        number('.');
    }
};

function enter() {

    if (oper === true) {
        if (op1 === "^") {
            var2 = document.getElementById("screen").innerHTML;
            result = var1 ** var2;
        } else {
            var2 = document.getElementById("screen").innerHTML; 
            result = eval(+var1 + op1 + +var2);
        };

        document.getElementById("screen").innerHTML = result;
        done = true;
    } else return;

};
