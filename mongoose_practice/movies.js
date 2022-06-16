const router = require('express').Router();
const movies = require('./db');

//CREATE
router.post('/create', (req, res, next) => {
    const newMovie = req.body;
    
    movies.create(newMovie)
        .then((result) => res.status(201).send(result))
        .catch((err) => next(err));
    
});

//READ ALL
router.get('/readAll', (req, res) => {
    movies.find()
        .then((result) => res.send(result))
        .catch((err) => next(err));
});

//READ ONE
router.get('/readOne', (req, res) => {
    movies.find( {name: "Starship Troopers"} )
        .then((result) => res.send(result))
        .catch((err) => next(err));
});

//UPDATE
router.put('/update/:id', (req, res, next) => {
    const id = req.params.id;
    const newMovie = req.body;

    movies.findByIdAndUpdate(id, newMovie)
        .then((result) => res.status(202).send(result))
        .catch((err) => next(err));
});

//DELETE
router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;

    movies.findByIdAndDelete(id)
        .then(() => res.status(204).send())
        .catch((err) => next(err));
});

module.exports = router;