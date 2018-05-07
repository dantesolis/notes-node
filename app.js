// nodejs.org/api // to see all modules that come with node
console.log(`Starting app`);

const fs = require('fs');

fs.appendFile('gretings.txt', 'Hello there from Node', (err) => {
	if (err) { console.log(err) };
});
