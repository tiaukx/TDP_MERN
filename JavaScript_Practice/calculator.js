"use strict";

const display = document.getElementById("calculatorID");

//const number = document.querySelectorAll(".number");
//const deleteBtn = document.getElementsByClassName("delete");
//const clearBtn = document.getElementsByClassName("clear");
//const total = document.getElementsByClassName("equals");

const calc = {
    num1: null,
    num2: null,
    total: null,
    op: null,
}

//for operators and first num
for (let button of document.querySelectorAll(".operator")) {
    button.addEventListener('click', function(event) {
        calc.num1 = display.value;
        calc.op = event.target.innerText;
        display.value = '0';
    } )
}

//Clear button
for (let clrBtn of document.getElementsByClassName("clear")) {
    clrBtn.addEventListener('click', function(event) {
        display.value = '0';
        calc.num1 = null;
        calc.num2 = null;
        calc.total = null;
        calc.op = null;
    } )
}

//delete button
for (let dltBtn of document.getElementsByClassName("delete")) {
    dltBtn.addEventListener('click', function(event) {
        display.value = '0';
    })
}

//for the number buttons to input value
for (let numBtns of document.querySelectorAll(".number")) {
    numBtns.addEventListener('click', function(event) {
        if (display.value == 0) {
            display.value = event.target.innerText;
        } else {
            display.value += event.target.innerText;
        }
        
    } )
}

//for 2nd num and equals button
for (let eqlBtn of document.getElementsByClassName("equals")) {
    eqlBtn.addEventListener('click', function(event) {
        
        calc.num2 = display.value;
        
        if (calc.op === "/") {
            calc.total = parseFloat(calc.num1) / parseFloat(calc.num2);
        } else if (calc.op === "+") {
            calc.total = parseFloat(calc.num1) + parseFloat(calc.num2);
        } else if (calc.op === "-") {
            calc.total = parseFloat(calc.num1) - parseFloat(calc.num2);
        } else if (calc.op === "x") {
            calc.total = parseFloat(calc.num1) * parseFloat(calc.num2);    
        }
    
        display.value = calc.total;
        
    } )
}
