//Create an object
const darthVader = {
    allegiance : "empire",
    weapon : "lightsabre",
    sith : true
};
console.log(darthVader);

//Uses template literals to create sentances
console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choise is the ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
//Uses the boolean value of sith to create template literal
//We are asking is Darth Vader is a jedi, we know because of the object parameter he is not, he is a sith
//So we query '?' if he is a sith, if this is true, we return 'false' as you cannot be a jedi if you are a sith
//If we returned true, we would return true
console.log(`Darth Vader is a jedi? ${darthVader.sith ? "false" : "true"}`);

//Create an array
const myArray = ["Hello", "everyone"];
//Print length of array
console.log(myArray.length);
//Add 3 elements to the array
myArray.push("hope");
myArray.push("you're");
myArray.push("ok");
//Print new length
console.log(myArray.length);
//Checking it works
console.log(myArray);

//Removes first element of the array
myArray.shift();
console.log(myArray);

//Print contents of the array using a for loop
//Creates a variable and sets the condition, that the loop will run until the end of the array
//The variable will cycle through each element of the array and print until it reaches the end
for (let eachElement of myArray) {
    console.log(eachElement);
}