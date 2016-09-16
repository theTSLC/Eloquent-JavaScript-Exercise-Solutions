// Count Chars

// A function that returns a number with the count of how ofen the letter passed in as an argument returns

var countChar = function(string, letter) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) {
      counter ++
    }
  }
  return counter
}