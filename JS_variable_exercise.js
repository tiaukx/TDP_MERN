//Using template literals to dynamically change a sentence
let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;

//console.log("The total bill is £" + totalMoney + " the remaining amount of money to be paid is £" + totalLeftToPay);
//The above is long winded, template literals shortens the code
//You need to use backwards quotation for this to work - Found next to 1 on keyboard
console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);

//Creates an object
const objectLiteral = {
    name : "Tia",
    age : 26,
    job: "Analyst"
};
//Displays the entire object
//Displays an item within the object
console.log(objectLiteral.name);
console.log(objectLiteral.age);
console.log(objectLiteral.job);

//Takes the name item, adds 'Foster' then reassign the value to display both names
console.log(objectLiteral.name += " Foster");

//If you try to change a value that does not exist, JS will just create it
//The below example tries to change the 'pet' value to Moogle, but as it does not exist, just add it onto the end
objectLiteral.pet = "Moogle";
console.log(objectLiteral.pet);
console.log(objectLiteral);

//Creates an array
const arr = ["Tia", 26, "Analyst"];
console.log(arr);
//Displays the 3rd index in the array
console.log(arr[2]);
//Displays the last index in the array, using the current length - Has to be -1 as arrays counts from 0 but .length starts from 1
console.log(arr[arr.length - 1]);
//Adds an index to the array
arr.push("Female");
console.log(arr);
//Removes an index from the array
arr.pop();
console.log(arr);




