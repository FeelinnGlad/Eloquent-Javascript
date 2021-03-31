/*
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

Also, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

// Function that takes three arguments, "start", "end"
// and optional third argument that indicates the
// “step” value used to build up the array
// Returns an array containing all the numbers from
// start up to (and including) end.
function range(start, end, step) {
	// If no step is given, the array elements go up by increments of one
	if(!step) {
		step = 1;
	}
	// Checking if parameters aren't correct, then returning an error message
	if(Math.abs(end - start) < Math.abs(step) || (start < end && step < 0) || (start > end && step > 0)) {
		return "Wrong parameters given.";
	}
	// Checking if step is positive or negative
	var isPositive = step > 0;
	var arrRange = [];

	if(isPositive) {
		// According to sign of step giving a correct
		// condition for a cycle that pushes new elements into array
		var next1 = start;
		while(next1 <= end) {
			arrRange.push(next1);
			next1 += step;
		}
	} else {
		var next = start;
		while(next >= end) {
			arrRange.push(next);
			next += step;
		}
	}
	return arrRange;
}

// Function that takes an array of numbers and returns the sum of these numbers
var sum = arr => arr.reduce((sum, item) => sum + item, 0);
console.log(range(1, 10));
console.log(range(5, 2, -2));
console.log(sum(range(1, 10)));
