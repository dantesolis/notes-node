// @flow
/* [TODO]: 
* - [ ] Maybe change to ES7/8 to export/import declarations?
* - [ ] Write test for all this functions
* - [ ] Add flow
*/

console.log('Startng notes.js');

const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json', 'utf8');
    // parses the string and returns an arry
    return JSON.parse(notesString);
  } catch (e) {
    return [];  
  };
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


const addNote = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title,
    body
  };

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  console.log(`Getting all notes`);
}

const getNote = (title) => {
  console.log(`Getting note with title: ${title}`);
};

const removeNote = (title) => {
  console.log(`Deleting note with title: ${title}`);
};



module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
};