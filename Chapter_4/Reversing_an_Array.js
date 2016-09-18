// Reversing an Array

// Write 2 functions that returns the reverse of an inputed array, one which returns a new array and one which returns the original array

// 1rst function, returns a new array

var reverseArray = function(array) {
  var reversed = [];
  for (var i = array.length-1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}


// 2nd function, returns the original array

var reverseArrayInPlace = function(array) {
  // loop through the first half of the array
  for (var i = 0; i < (Math.floor(array.length / 2)); i++) {
    // save the original first element in the array
    var old = array[i];
    // set the first element of the array to the last element of the array, iterating through by 1 as that was the incremental increase of i in the loop declaration
    array[i] = array[(array.length-1)-i];
    // set the last element of the array equal to the captured first value; iterate down from backhalf and up from fronthalf via loop
    array[(array.length-1)-i] = old;
  }
  // return original array with swapped values
  return array;
}