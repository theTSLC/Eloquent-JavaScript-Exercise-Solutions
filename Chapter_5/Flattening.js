// Flattening

// Write a function that uses reduce and concat to 'flaten' an array of arrays that still has all the emelents of the original array.

var arrays = [[1,2,3,], [4,5], [6]];

var reduce = function(array) {
	return array.reduce(function(array, current) {
		return arrary.concat(current)
		// need to provide empty array as initial value for reduce
	}, [])
}