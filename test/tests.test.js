const assert = require('assert');

describe('A basic test for the String object', () => {

	describe('#split("")', () => {
		it('should return an array containing the original elements of the string', () => {
			const str = 'hello';
			const splittedString = str.split('');
			assert.equal(str.split(""), splittedString);
		});
	});
});