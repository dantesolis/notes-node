const expect = require('chai').expect;

const notes = require('../notes.js');

console.log('About to start running tests on notes.js.');

describe('add function', () => {
  it('should add to numbers corretly', () => {
    const addition = notes.add(1,2);
    expect(addition).to.equal(3);
  })
});