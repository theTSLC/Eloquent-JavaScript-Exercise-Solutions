// the venerable, if omnipresent, FizzBuzz

// A function that prints all numbers from 1-100 with 3 exceptions:
//  when the number is divisible by 3 instead print "Fizz"
//  when the number is divisible by 5 instead print "Buzz"
//  when the number is divisible by 3 and 5 instead print "FizzBuzz"

var fizzBuzz = function () {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
