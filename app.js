// nodejs.org/api  /* to see all modules that come with node */
console.log(`Starting app`);

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('DS'));

let filteredArry = _.uniq(['DS', 1, 'DS', 1, 2, 3, 4]);

console.log(filteredArry);

// const result = notes.addNote();
// console.log(result);

// const addition = notes.add(1, 2);
// console.log(addition);


// let user = os.userInfo();

// fs.appendFile('gretings.txt', `Hello there from Node ${user.username}! You are ${notes.age}`, (err) => {
// 	if (err) { console.log(err) };
// });
