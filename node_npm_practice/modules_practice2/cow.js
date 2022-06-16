const cows = require("cowsay"); //imports the cowsay library

text = (text) => cows.say({'text' : text}); //creates a function that takes a string and passes it through the say function in the cowsay object

module.exports.speak = text; //exports the module