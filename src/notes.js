// @flow
/* [TODO]: 
* - [ ] Maybe change to ES7/8 to export/import declarations?
* - [ ] Write test for all this functions
* - [ ] Add flow
*/

/*::
export type Note = {
  title: string,
  body: string,
}
*/

console.log('Startng notes.js');

const fs = require('fs');

const fetchNotes = () /*: Array<Note> */ => {
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


const addNote = (title /*: string */, body /*: string */) /*: Note */ => {
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

const getNote = (title /*: string  */) /*: {} | void */ => {
  console.log(`Getting note with title: ${title}`);

  // complete this function
  // fetchNotes
  // filter notes by title
  // return this note => return first item on the array
};

const removeNote = (title /*: string */ ) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};


module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
};