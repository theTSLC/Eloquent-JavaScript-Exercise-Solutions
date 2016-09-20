// Deep Comparison

// Write a funciton that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recurisve call to the function

var deepEqual = function(value1, value2) {
	if (value1 === value2) {
		return true;
	}

	if (value1 == null || typeof value1 != "object" || value2 == null || typeof value2 != "object") {
		return false;
	}

	var counter1 = 0;
	var counter2 = 0;

	for (var key in value1) {
		counter1 ++;
	}

	for (var key in value2) {
		counter2 ++;
		if (!(key in value1) || !(deepEqual(value1[key], value2[key]))) {
			return false;
		}
	}
}