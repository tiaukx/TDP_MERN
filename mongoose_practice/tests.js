const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('./index');
const movieMongoose = require('./db');

mocha.describe('CRUD Testing', () => {
    let id;
    mocha.beforeEach((done) => {
        movieMongoose.deleteMany({}).then(() => {
            movieMongoose.create({
                name: 'Starship Troopers',
                description: 'Johnny Rico completes his graduation and joins the Mobile Infantry to serve the nation. Soon, he finds himself fighting against alien bugs that are hell-bent on destroying life on Earth.',
                minsLength: 129,
            }).then((result) => {
                id = result._id;
                done();
            }).catch((err) => console.error(err));
        }).catch((err) => console.error(err));
    });

    mocha.it('Should create a movie', (done) => {
        const requestBody = {
            name: 'Sorry to Bother You',
            description: 'Telemarketer Cassius Green discovers an alluring method towards success. However, owing to his greed, he ends up fading away from his family and friends.',
            minsLength: 112,
        };
        chai.request(server).post('/movies/create').send(requestBody).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(requestBody);
            done();
        });
    });

    mocha.it('Should update a movie', (done) => {
        chai.request(server).put(`/movies/update/${id}`).send({
            name: 'Midsommar',
            description: "A couple travels to Northern Europe to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
            minsLength: 148,
        }).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(202);
            chai.expect(res.body).to.include({
                name: 'Starship Troopers',
                description: 'Johnny Rico completes his graduation and joins the Mobile Infantry to serve the nation. Soon, he finds himself fighting against alien bugs that are hell-bent on destroying life on Earth.',
                minsLength: 129,
            });
            done();
        });
    });

    mocha.it('Should delete a movie', (done) => {
        chai.request(server).delete(`/movies/delete/${id}`).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(204);
            done();
        });
    });

    mocha.it('Should read all movies', (done) => {
        //tell chai to request server, get all objects from this file path, then end to say we don't expect an error
        chai.request(server).get('/movies/readAll').end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            done();
        });
    });

});

