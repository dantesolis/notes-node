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


// command add
if (command === 'add') {	
	let note = notes.addNote(argv.title, argv.body);

	if (note) {
    console.log('Note created');
		notes.logNote(note);
	} else {
		console.log(`Note title already taken`);
	}

// command list
} else if (command === 'list') {
	notes.getAll();

// command read
} else if (command === 'read') {
	let note = notes.getNote(argv.title);

  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log(`Note not found`);
  }

// command remove
} else if (command === 'remove') {
	let noteRemoved = notes.removeNote(argv.title);
	let message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);

} else if (command === '') {
	console.log('No command passed in');
} else {
	console.log('Command not recognized');
}