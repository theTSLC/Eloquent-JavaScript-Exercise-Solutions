// Deep Comparison

// Write a funciton that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recurisve call to the function

var deepEqual = function(value1, value2) {
	// comparing each value by identity with ===
	if (value1 === value2) {
		if (value1 || value2 == null) {
			return false;
		} else {
			for (key1 in value1) {
				for (key2 in value2) {
					if (key1 == key2) {
						return true;
					}
				}
			}
		}
		return true;
	} else if (value1 == value2) {
		
	}
	return false;
}