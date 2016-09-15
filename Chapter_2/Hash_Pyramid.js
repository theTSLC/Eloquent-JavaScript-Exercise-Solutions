// Looping a Triangle

// Make 7 calls to console.log logging n # where n is the line number

// first solution
var pyramid = "#";
for (var x = 0; x < 7; x++) {
  for (var y = 0; y <= x; y ++) {
    if (pyramid.length <= x) {
    pyramid += "#";
    }
  }
  console.log(pyramid)
}

// simpler solution
for (var pyramid = "#"; pyramid.length <= 7; pyramid += "#") {
  console.log(pyramid)
}