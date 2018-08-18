// nodejs.org/api  /* to see all modules that come with node */
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// eases the process for parsing args
const argv = yargs
.command('add', 'Add a new note', {
	title: {
		describe: 'Title of note', // tells yarg and user what it needs to be pass
		demand: true,
		alias: 't' // let's me create an alias so when user passes the argument on the console he could type "-t" for title
	},
	body: {
		describe: 'Body of note',
		demand: true,
		alias: 'b'
	}
})
.help() // gives the user available commands when they type --help
.argv;
const command = argv._[0];


// accessing args from the command line at third position
// of the argv arrays (same as above)
// const command = process.argv[2];
// console.log(`Command: ${command}`);
// console.log(`Yargs: ${JSON.stringify(argv)}`);

// prints out how the arguments passed to on th command line 
// console.log(process.argv);


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
	let allNotes = notes.getAll();
	console.log(`Printing: ${allNotes.length} notes(s)`);
	allNotes.forEach(note => notes.logNote(note));
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