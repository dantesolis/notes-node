const assert = require('assert');
const notes = require('./notes.js');

console.log('About to start running tests on notes.js.');

const assertion = assert.strictEqual(notes.add('a', 2), 3, `Expected numbers`);
const assertion2 = assert.ok(false, 'True');

// console.log(assertion);
console.log(assertion2);