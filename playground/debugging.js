// command: node inspect fileToInspect
/* commands
* list(10) = list the amount of lines I want my debugger to inspect
* (n) = next
* (c) = continue
* repl = to enter repl mode, enters the application as it stand and allows me to chnage and modify variables
* debugger; = allows me enter a specific place on the program
*/

var person = {
	name: 'DS'
};

person.age = 28;
person.name = 'Dante';

console.log(person);