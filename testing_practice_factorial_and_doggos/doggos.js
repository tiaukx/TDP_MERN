function showDogs (myDog) {
    
    //creates an array
    const dogs = [];
    //creates values for array
    for (let i = 1; i < 101; i++) {
        
        //if i is the same value as myDog, cancel the loop and go to next index in array
        if (i == myDog) {
            continue;
        }

        let pup = i;

        //if pup (index in array) ends in 1 and does not equal 11 add 'st' to end
        if (pup % 10 == 1 && pup % 100 != 11) {
            pup += 'st';
        //if pup (index in array) ends in 2 and does not equal 12 add 'nd' to end
        } else if (pup % 10 == 2 && pup % 100 != 12) {
            pup += 'nd';
        //if pup (index in array) ends in 3 and does not equal 13 add 'rd' to end
        } else if (pup % 10 == 3 && pup % 100 != 13) {
            pup += 'rd';
        //for everything else, add th onto the end
        } else {
            pup += 'th';
        };
        //push pup to dogs
        dogs.push(pup);
    }
    //return the value of dogs
    return dogs;
}
//console.log(showDogs(5));
module.exports = {showDogs};