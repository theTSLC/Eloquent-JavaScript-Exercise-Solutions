// Reversing an Array

// Write a function that returns the reverse of an inputed array

var reverse = function(array) {
	var reversed = [];
	for (var i = array.length-1; i >= 0; i--) {
		reversed.push[array[i]];
	}
	return reversed;
}