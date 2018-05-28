// nodejs.org/api  /* to see all modules that come with node */
console.log(`Starting app`);

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

// accessing args from the command line at third position;
// argv arrays
const command =  process.argv[2];
console.log(`Command: ${command}`);

console.log(process.argv);

if (command === 'add') {
	console.log('Adding new note');
} else if (command === 'list') {
	console.log('Listing all notes');
} else if (command === 'read') {
	console.log('Readig all notes');
} else if (command === 'remove') {
	console.log('Removing all notes');
} else if (command === '') {
	console.log('No command passed in');
} else {
	console.log('Command not recognized');
}