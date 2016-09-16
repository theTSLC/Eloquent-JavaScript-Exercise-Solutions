// Recursion

// Create a recursive function that identifies if a whole number is even, returning a Boolean

var isEven = function(number) {
  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false;
  } else if (number < 0) {
    return isEven(-number);
  } else {
    return isEven(number-2);
  }
}