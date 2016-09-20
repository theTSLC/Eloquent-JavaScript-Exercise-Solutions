// A List

// Write out funtions associated with the List data structure.


var arrayToList = function(array) {
	var list = null;
	for (var i = array.length-1; i >= 0; i--) {
		list = {
			value: array[i],
			rest: list
		};
	}
	return list;
}

var listToArray = function(list) {
	var array = [];
	for (var node = list; node; node = node.rest) {
		array.push(node.value);
	}
	return array;
}

var prepend = function(element, list) {
	var newList = {
		value: element,
		rest: list
	};
	return newList;
}

var nth = function(list, n) {
	if (!list) {
		return undefined;
	} else if (n == 0) {
		return list.value;
	} else {
		return nth(list.rest, n-1);
	}
}