// Function - .some() method, takes array and predicate as arguments
// Returns true as soon as the predicate returns true for any of the elements
function some(array, predicate) {
	for(var i = 0; i < array.length; i++) {
		if (predicate(array[i])) {
			return true;
		}
	}
	return false;
}

// Function - .every() method, takes array and predicate as arguments
// Returns true as soon as the predicate returns true for all the elements
function every(array, predicate) {
	for(var i = 0; i < array.length; i++) {
		if (!predicate(array[i])) {
			return false;
		}
	}
	return true;
}


console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false 
