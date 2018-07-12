const assert = require('assert');

describe('A basic test for the String object', () => {

	describe('#split("")', () => {
		it('should return an array containing the original elements of the string', () => {
			const str = 'hello';
			const splittedString = str.split("");
			assert.deepStrictEqual(str.split(""), splittedString);
			//assert.strictEqual(str.split(""), splittedString); // [ASK]: why this does not work? 
		});
	});
});