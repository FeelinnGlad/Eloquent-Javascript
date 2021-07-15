var ANCESTRY_FILE = require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

// Making names as key values
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Array for storing age diffs
var differences = [];
// Computing diffs
ancestry.forEach(function (person) {
  if(byName[person.mother]) {
    return differences.push(person.born - byName[person.mother].born);
  }
});

// Computing average
function average(array) {
  function plus(a, b) { return a + b; }
  return (array.reduce(plus) / array.length).toFixed(1);
}

console.log(average(differences));
