// nodejs.org/api  /* to see all modules that come with node */
console.log(`Starting app`);

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// eases the process for parsing args
const argv = yargs.argv;

const command = argv._[0];
// accessing args from the command line at third position
// of the argv arrays (same as above)
// const command = process.argv[2];
console.log(`Command: ${command}`);
console.log(`Yargs: ${JSON.stringify(argv)}`);

// prints out how the arguments passed to on th command line 
console.log(process.argv);

if (command === 'add') {	
	let note = notes.addNote(argv.title, argv.body);
	console.log(`This is the note that was added: ${JSON.stringify(note)}`)
	if (typeof note === 'undefined' ) {
		console.log('a note with that title was already added');
	} else {
		console.log(`A note was added with title: ${note.title} and body: ${note.body}`)
	}

} else if (command === 'list') {
	notes.getAll();

} else if (command === 'read') {
	let note = notes.getNote(argv.title);
  console.log(`This is the note: ${JSON.stringify(note)}`);

  // complete this function
  // do something zith return value with read note
  // general flow is the same as <add>
    if (note) {
      console.log('Note read');
      console.log('--');
      console.log(`note title: ${note.title}`);
      console.log(`note body: ${note.body}`);
    } else {
      console.log(`note title taken or already exists`);
    }

  

} else if (command === 'remove') {
	let noteRemoved = notes.removeNote(argv.title);
	let message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);

} else if (command === '') {
	console.log('No command passed in');
} else {
	console.log('Command not recognized');
}