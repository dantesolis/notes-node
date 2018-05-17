// nodejs.org/api  /* to see all modules that come with node */
console.log(`Starting app`);

const fs = require('fs');
const os = require('os');

const notes = require('./notes.js');

const result = notes.addNote();
console.log(result);

const addition = notes.add(1, 2);
console.log(addition);


// let user = os.userInfo();

// fs.appendFile('gretings.txt', `Hello there from Node ${user.username}! You are ${notes.age}`, (err) => {
// 	if (err) { console.log(err) };
// });
