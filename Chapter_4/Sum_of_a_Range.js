// Sum of a Range

// Write a function that takes two arguments, and returns the range between the two

var range = function(number1, number2) {
  var numArray = [];
  var counter = 0;
  for (var i = number1; i <= number2; i++) {
    numArray[counter] = i;
    counter++
  }
  return numArray;
}