//creates a function to figure out factorial based on num variable
function factorial(num) {
    //declare i variable, for looping purposes, set to 1 as 1 is a factorial
    let i = 1;

    //run this loop while num is greater than 1
    while (num > 1) {
        //increase i by 1 
        i++;
        //then divide num by i and reassign num value to calculation
        num /= i;
    };
    //if loop that returns the values calculated in the while loop
    if (num < 1) {
        //if num value is less than value, return error
        return 'None';
    } else if (num == 1) {
        //if num equals 1 return the value of i, which will be the factorial number, with an ! on the end
        return i + '!';
    }
};

//logs the num stated above and the factorial calculated in function
//console.log(`${num} has a factorial of ${factorial(num)}`);

module.exports = {factorial};