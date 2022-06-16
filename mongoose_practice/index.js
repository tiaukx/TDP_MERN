const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const movieRouter = require('./movies');
app.use('/movies', movieRouter);

const server = app.listen(4494, () => {
    console.log("Server started on", server.address().port);
})
//error handling middleware
//must always have 4 variables - err, req, res, next
//as it is at the end of the file, nothing to pass to so no need to call next
app.use((err, req, res, next) => {
    res.status(err.status ? err.status : 500).send(err.message);
});

module.exports = server;