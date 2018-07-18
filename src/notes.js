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

// Fetching Notes
const fetchNotes = () /*: Array<Note> */ => {
  try {
    const notesString = fs.readFileSync('notes-data.json', 'utf8');
    // parses the string and returns an arry
    return JSON.parse(notesString);
  } catch (e) {
    return [];  
  };
};

// Saving Notes
const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// Adding Notes
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

// Listing All Notes
const getAll = () => {
  console.log(`Getting all notes`);
}

// Reading All Notes
const getNote = (title /*: string  */) /*: {} | void */ => {

  let notes = fetchNotes();

  const filteredNotes = notes.filter(note => note.title === title);

  return filteredNotes[0];
};

// Removing a Note
const removeNote = (title /*: string */ ) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

// Loging a Note
const logNote = (note) => {
  // break on this line and use repl to output note
  // use read command with --title='to buy'
  debugger;
  console.log('--');
  console.log(`note title: ${note.title}`);
  console.log(`note body: ${note.body}`);  
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};