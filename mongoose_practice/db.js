const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//connects to a mongoDB database, if it does not exist will create one
mongoose.connect('mongodb://localhost:27017/TDP_DB', { useNewUrlParser: true }, (err) => {
    if (err) return console.error(err);
    return console.log('Connection succesful');
});

const movieSchema = new Schema ({
    name: {
        type: String,
        min: 2,
        required: true
    },
    description: {
        type: String,
        default: "N/A"
    },
    minsLength: {
        type: Number,
        min: 2,
        required: true
    }
});

const movieMongoose = mongoose.model('movie', movieSchema);
module.exports = movieMongoose;