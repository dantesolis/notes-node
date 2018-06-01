// const obj =  {
//   name: 'DS'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// const personString = '{"name": "DS", "age": 28}';

// const person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);


const fs = require('fs');

const originalNote = {
  title: 'Some title',
  body: 'Some body',
}

// orinialNoteString
// turn  into a json string
const originalNoteString = JSON.stringify(originalNote);
console.log(typeof originalNoteString);
console.log(originalNoteString);


fs.writeFileSync('notes.json', originalNoteString);


const noteString = fs.readFileSync('notes.json');

// note
// convert the file into an object
const note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);