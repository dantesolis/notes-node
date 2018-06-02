// @flow

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