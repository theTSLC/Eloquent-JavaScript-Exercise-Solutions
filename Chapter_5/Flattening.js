// Flattening

// Write a function that uses reduce and concat to 'flaten' an array of arrays that still has all the emelents of the original array.

var arrays = [[1,2,3,], [4,5], [6]];

var flatten = function(arrays) {
	return arrays.reduce(function(array, current) {
    return array.concat(current)
	}. [])
}