const expect = require('chai').expect;

const notes = require('../notes.js');

console.log('About to start running tests on notes.js.');

describe('addNote', () => {
  it('should add a note with title and body', () => {
  	const title = 'Dummy Title';
  	const body = 'Dummy body';

    const newNote = notes.addNote(title, body);
    expect(newNote.title).to.include('Dummy title');
  })
});