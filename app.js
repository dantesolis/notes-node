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

	if (typeof note === undefined ) {
		return `note with tthat title already exists`;
	} else {
		return note;
	}
} else if (command === 'list') {
	notes.getAll();

} else if (command === 'read') {
	notes.getNote(argv.title);	

} else if (command === 'remove') {
	notes.removeNote(argv.title);

} else if (command === '') {
	console.log('No command passed in');
} else {
	console.log('Command not recognized');
}