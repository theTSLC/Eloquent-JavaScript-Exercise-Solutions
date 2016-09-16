// Sum of a Range

// Write a function that takes two arguments, and returns an array of numbers that is the range between the two

var range = function(number1, number2) {
  var numArray = [];
  var counter = 0;
  for (var i = number1; i <= number2; i++) {
    numArray[counter] = i;
    counter++;
  }
  return numArray;
}

// Now, write a function that returns the sum of an array of numbers

var sum = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Now, modify the range function so that it takes an optional third parameter, a step incrementor, which if present dictates the range between each individual element of the array
// i.e., range(1,10,2) ==> [1,3,5,7,9]

var range = function(number1, number2, step) {
  var numArray = [];
  var counter = 0;
  if (step) {
    for (var i = number1; i <= number2; i += step) {
      numArray[counter] = i;
      counter++;
    }
  } else {
    for (var i = number1; i <= number2; i++) {
      numArray[counter] = i;
      counter++;
    }
  }
  return numArray;
}
