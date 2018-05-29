// nodejs.org/api  /* to see all modules that come with node */
console.log(`Starting app`);

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// accessing args from the command line at third position;
// argv arrays
const command = process.argv[2];

// for passing args
const argv = yargs.argv;

console.log(`Command: ${command}`);
console.log(`Proccess: ${process.argv}`);
console.log(`Yargs: ${JSON.stringify(argv)}`);

console.log(process.argv);

if (command === 'add') {
	notes.addNote(argv.title, argv.body);

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