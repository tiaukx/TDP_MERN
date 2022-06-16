const router = require('express').Router();

//Creates array of names
let names = ['Tia', 'Moogle', 'Mickey', 'Jimmy'];

//Sends a request to print all names in array
router.get('/getAll', (req, res) => {
    res.send(names);
});

//Sends a request that prints name in array based on id
router.get('/getOne/:id', (req, res) => {
    res.send(names[req.params.id]);
});

//Removes name in array based on id in url, and prints name that has been removed
router.get('/remove/:id', (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

//Pushes array created in postman to console log
router.post('/create', (req, res) => {
    console.log("Received:", req.body);
});


//Deletes an item in the array from postman
router.delete('/delete/:id', (req, res, next) => {
    const id = parseInt(req.params.id, 10);

    if (Number.isNaN(id) || id < 0 || id >= names.length) return next({status: 400, message: "Invalid ID"});

    res.send(names.splice(req.params.id, 1));
    console.log("The following ID has been deleted", id);
});

//Adds a name from postman to array created in JS
router.post('/addName', (req, res, next) => {
    const name = req.body.name;

    if(name = "") return next({status: 400, message: "Incorrect user input"})

    names.push(name);
    res.status(201).send(`${name} added succesfully`);
});

//Adds multiple names from postman to array created in JS
router.post('/addNames', (req, res, next) => {
    const name = req.body;

    if(name = "") return next({status: 400, message: "Incorrect user input"})

    for (let person of name) {
        names.push(person.name);
    }

    res.status(201).send(`Names added succesfully`);
});

//Replaces a name in the array with a name specified in a query parameter at an index specified in a URL parameter
router.put('/updateName/:id', (req, res, next) => {
    //pulls through name from postman e.g. http://localhost:4494/updateName/0?name=Tiarnna
    //In the above URL, we are taking the id, which is 0, and the new name, which is Tiarnna
    const name = req.query.name;
    const id = parseInt(req.params.id, 10);

    //to run the error handling middleware 'next' needs to be added as a variable after req, res
    if (Number.isNaN(id) || id < 0 || id >= names.length) return next({status: 400, message: "Invalid ID"});

    //states old name from the JS array at the same id
    const old = names[id];
    //takes location of old name, and uses to update old name to new name from postman
    names[id] = name;
    //confirms that change has been made
    res.status(202).send(`${old} successfully replaced with ${name}`);
});

module.exports = router;