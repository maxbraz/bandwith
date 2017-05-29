const expect = require('chai').expect;
const Instrument = require('../../db/models/instruments.js');

describe('Instrument Model', () => {
  it('should be able to retrieve test data', (done) => {
    Instrument.forge({ instrument_name: 'triangle' }).save()
      .then(() => Instrument.where({ id: 1 }).fetch())
      .then((results) => {
        expect(results.get('id')).to.equal(1);
        expect(results.get('instrument_name')).to.equal('triangle');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should verify that all instrument names are unique', (done) => {
    Instrument.forge({ instrument_name: 'triangle' }).save()
      .then((result) => {
        done(new Error('was not supposed to succeed: ', result));
      })
      .catch((err) => {
        expect(err).to.be.an('error');
        done();
      });
  });

  it('should be able to delete a record', (done) => {
    Instrument.where({ id: 1 }).destroy()
      .then(() => Instrument.where({ id: 1 }).fetch())
      .then((result) => {
        expect(result).to.equal(null);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});