"use strict";

//Create a variable
let helloWorld = "Hello World";

//Creates a pop-up window
//alert(helloWorld);
//Outputs to the console
console.log(helloWorld);
//Writes variable onto site page
document.write(helloWorld);

//Accepts a number and returns it square
/*
let numSquared = squaredFunction(8);
function squaredFunction (a) {
    return a ** 2;
};
console.log(numSquared);
*/

//Accepts 3 numbers and returns the sum
/*
let numSum = sumFunction(2, 2, 2);
function sumFunction(a, b, c) {
    return a + b + c;
}
console.log(numSum);
*/

//Create a variable with 3 attributes, then change one
let person = {
    name : "Tia",
    age : 26,
    occupation : "Analyst"
};
console.log(person);
person.occupation = "TDP";
console.log(person);

//Function increases age of person object, when button on web page clicked
function increaseAge () {
    person.age++;
    console.log(person.age);
};

//Create series of textboxes and buttons that let you create a person object
//Output your object
//Edit your object
let person1 = {};
function addPerson(form) {
    person1[form.name.value] = {name : form.name.value, age: form.age.value, occupation: form.job.value};
    return false;
}
console.log(person1);


//Create a variable and display it, using string methods convert this to uppercase and display it
let stringText = "He said 'My name is Elliott'.";
console.log(stringText);
console.log(stringText.toUpperCase());

//Concatenate a string and a number together
let str1 = "abc";
let num1 = 123;
let strAndNum = str1 + num1;
console.log(strAndNum);

let num2 = 456;
let str2 = `def ${num2}`;
console.log(str2);

//Create an array with 3 strings and output
//Add another string and output
//Remove last string and output
const strArray = ["A", "B", "C"];
console.log(strArray);
strArray.push("D");
console.log(strArray);
strArray.pop();
console.log(strArray);

//Using conditional statements, create a function that checks if your person is between 20-40 yrs old
//Output whether result is true or false
let age = ageCheck(26);
function ageCheck (i) {
    if (i > 20 && i < 40) {
        console.log("True")
    } else {
        console.log("False")
    }
};

//Create a for loop that increments from 1 to 10, outputting the current iteration at each step
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Create a conditional statement inside for loop body, which checks what the current interation is
//if the current iteration is divisble by 2, output the result, otherwise do nothing
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    } else {
        
    }
}

