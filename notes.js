/* [TODO]: 
* Maybe change to ES7/8 to export/import declarations?
* Write test for all this functions
*
*/

console.log('Startng notes.js');

const addNote = (title, body) => {
  console.log(`Adding note with title and body: ${title, body}`);
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