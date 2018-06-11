// @flow
// https://codeburst.io/getting-started-with-flow-and-nodejs-b8442d3d2e57

const _ = require('lodash');

// typed alias
type Point2d = {|
	x: number,
	y: number
|};

const points: Array<Point2d> = [
	{ x: 1, y: 2 },
	{ x: -1, y: 2 }
]

const numbers = [2, 3, 4];

const testFunction = (point: Point2d):bool => {
	return point.x > 0 && point.y > 0
}

_.some(numbers, testFunction)

console.log(myPoint.x, myPoint.y);