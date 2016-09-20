// A List

// Write out funtions associated with the List data structure.

var arrayToList = function (array) {
	var list = null;
	for (var i = array.length-1; array >=0; i--) {
    list = {value: array[i], rest: list};
	}
	return list;
}

var listToArray = function(list) {
	var array = [];
	for (var key in list) {
	  array.push(list[key]);
	  listToArray(list[key]);
	}
}
