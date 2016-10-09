// Mother Child Age Difference

// Using the chapter's data set, calculate the average age difference between mother's and children.  Can use the average function provided earlier in the chapter.

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// new code here
