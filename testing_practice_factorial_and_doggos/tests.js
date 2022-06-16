const mocha = require('mocha');
const chai = require('chai');

const factorials = require('./index.js');
const doggos = require('./doggos.js');

//factorials.js testing
mocha.describe('Test factorial', () => {
    mocha.it('should equal 6!', () => {
        chai.expect(factorials.factorial(720)).to.equal('6!');
    });
    mocha.it('should equal 5!', () => {
        chai.expect(factorials.factorial(120)).to.equal('5!');
    });
    mocha.it('should equal none', () => {
        chai.expect(factorials.factorial(760)).to.equal('None');
    });
});

//doggos testing
mocha.describe('Test doggos', () => {
    mocha.it('should not show 5th place', () => {
        chai.expect('5th').to.not.equal(doggos.showDogs(5));
    });
    mocha.it('should not show 12th place', () => {
        chai.expect('12th').to.not.equal(doggos.showDogs(12));
    });
    mocha.it('should not show 51st place', () => {
        chai.expect('51st').to.not.equal(doggos.showDogs(51));
    });
    mocha.it('should have 99 results', () => {
        chai.expect(doggos.showDogs(1)).to.have.lengthOf.below(100);
    });
});