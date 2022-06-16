"use strict";


//Increases the value of a by 1 until it reaches 200 then terminates code execution
/*let a = 100;
while (a < 200) {
    a++;
    console.log(`a = ${a}`);
}*/

//Increases the value of a by 1 until it reaches 200 then terminates code execution
//If a is able to be divided by 2, output '-' else output '*'
/*let a = 100;
while (a < 200) {
    if (a % 2 == 0) {
        console.log("-")
    } else {
        console.log("*")
    }
    a++;
}*/


//Prints the numbers 1-10, 10 times
/*for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(j);
    }
}*/

//1st Exercise but using for loops
/*for (let a = 100; a < 200; a++) {
    console.log(a);
}*/

//2nd Exercise but using for loops
/*for (let a = 100; a < 200; a++) {
    if (a % 2 == 0) {
        console.log("-")
    } else {
        console.log("*")
    }
}*/

//Write a switch case statement which uses the current day as its expression and matches with the relevant case
let now = new Date();
let day = now.getDay();

switch (day) {
    case 0:
        console.log(`It's Sunday`);
        break;
    case 6: 
        console.log(`It's Saturday`);
        break;
    case 1:
        console.log(`It's Monday`)
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`It's a weekday`);
        break;
    default:
        console.log(`Excuse me?`);
        break;    
}

let strictA = true;
let strictB = 1;
console.log(strictA == strictB); //Will return true as both are trutheys, only the values are checked
console.log(strictA === strictB); //Will return false using the strictly equaly operator as the type and the value are checked

console.log(strictA != strictB); //Will return false as type and values are not the same
console.log(strictA !== strictB); //Will return true as type and value were not the same anyway

let age = 26;

if (age > 18 && age < 65) {
    console.log("Between 18 & 65 years' old.")
} else if (age < 18) {
    console.log("Underage.")
} else {
    console.log("Over the age of 65.")
};

console.log(`Is the age over 50 years old? ${age > 50 ? "Yes" : "No"}`);

//function that takes 2 number and subtracts them 
function subFunction (a, b) {
    return a - b;
}
console.log(subFunction(8, 3));

//function expression
const subExpression = function(a, b) {
    return a - b;
}
console.log(subExpression(10, 3));

//Arrow function
const subArrow = (a, b) => {
    return a - b;
}
console.log(subArrow(10, 2));

//or arrow function can be done like the below, but will only work if the function executes one line of code
const subArrow2 = (a, b) => a / b;
console.log(subArrow2(10, 5));

//exercise 2 on functions
function welcome (name, age, gender) {
    return `My name is ${name} i am ${age} years old and of ${gender} gender.`;
}
console.log(welcome("Tia", 26, "female"));

const welcome1 = (name, age, gender) => {
    return `My name is ${name} i am ${age} years old and of ${gender} gender.`;
}
console.log(welcome1("Moogle", 6, "female"));

const welcome2 = (name, age, gender) => `My name is ${name} i am ${age} years old and of ${gender} gender.`;
console.log(welcome2("Mickey", 5, "male"));

//An arrow function that takes 2 values and returns the power of the 2 numbers
//e.g. n1=2, n2=3 would return 8 (2x2x2)
//Math.pow() returns the value of x to y
const powerUp = (n1, n2) => Math.pow(n1, n2);
console.log(powerUp(2,3));

/*function scopeTest () {
    let x = "foo";
    if (x == "foo") {
        let y = "boo";
    }
    console.log(x);
    console.log(y);
}
console.log(scopeTest());*/

/*function doSomething () {
    console.log(a);
    console.log(foo());
    let a = 1;
    function foo () {
        return 2;
    }
}
doSomething();*/




//Function that creates a paragraph tag
function insertPara() {
    let p = document.createElement('p');
    let text = document.getElementById('textID');
    let div = document.querySelector('div');

    p.textContent = "Inserted Paragraph.";
    p.id = "paraID";
    div.appendChild(p);
}

//Changes the text of the paragraph via input from a textbox
function changePara () {
    let p = document.getElementById('paraID');
    let text = document.getElementById('textID');
    let div = document.querySelector('div');

    p.innerText = text.value;
}

//Deletes the paragraph
function deletePara () {
    let p = document.getElementById('paraID');
    let div = document.querySelector('div');
    div.removeChild(p);
}

