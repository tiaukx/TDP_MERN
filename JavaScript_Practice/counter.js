"use strict";

//creates the global variable counter
const counter = document.getElementById("counter");

//creates 5 functions that link to the buttons, called via onlick=""
const minusFive = () => {
    counter.value = parseInt(counter.value) -5;
}
const minusOne = () => {
    counter.value = parseInt(counter.value) -1;
}
const reset = () => {
    counter.value = 0;
}
const addOne = () => {
    counter.value = parseInt(counter.value) +1;
}
const addFive = () => {
    counter.value = parseInt(counter.value) +5;
}

//Completes all above functions in a single function
const updateCounter = (event) => {
    const change = event.target.innerText;              //Targets the text of the button
    if (change === "R") {                               //As we cannot add string to a number, if button text is R, resets value to 0
        return counter.value = 0;                       //Use return to complete / finish the if statement
    } 
        const current = counter.value;
        const result = parseInt(current) + parseInt(change);
        //even if the text begins with a minus, the minus supercedes the plus and returns a negative anyway
        //parseInt() parses the value of a string and returns the first integer
        
        counter.value = result;
        writeHistory(current, change, result);
}

const output = document.getElementById("output");

const writeHistory = (num1, num2, result) => {
    const newHistory = document.createElement('p');
    newHistory.innerText = `${num}${num2}=${result}`;
    output.prepend(newHistory);
}