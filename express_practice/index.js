const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const nameRouter = require('./names.js');

app.use('/names', nameRouter);

const server = app.listen(4494, () => {
    console.log("Server started on", server.address().port);
})

//log date to console then passes through next function
app.use((req, res, next) => {
    console.log("Date Accessed:", new Date());
    next();
});

//Sends a request to page that prints greeting + name
app.get("/hello", (req, res) => {
    res.send("Hello my name is Tia!");
});


//error handling middleware
//must always have 4 variables - err, req, res, next
//as it is at the end of the file, nothing to pass to so no need to call next
app.use((err, req, res, next) => {
    res.status(err.status).send(err.message);
});