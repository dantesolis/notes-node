// @flow
// https://codeburst.io/getting-started-with-flow-and-nodejs-b8442d3d2e57

// typed alias
type Point2d = {|
	x: number,
	y: number
|};

const myPoint: Point2d = {
  x: 1,
  y: 2
};

console.log(myPoint.x, myPoint.y);