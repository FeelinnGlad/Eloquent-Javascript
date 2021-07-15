var ANCESTRY_FILE = require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

// Function for computing average value from array
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

// Function that computes century group for each person
// in the array with the help of function argument
function groupBy (arr, func) {
    var mapped = {};
    arr.forEach(function (person) {
        var century = func(person);
        // Computing correct group, else creating new one
        if(!mapped[century]) {
            mapped[century] = [];
        }
        mapped[century].push(person);
    });
    return mapped;
}

// Function that computes the average age
// of the people in the ancestry data set per century
function getStatistic() {

    var mapped = groupBy(ancestry, function(person) {
        return Math.ceil(person.died / 100);
    });

    // Extracting age values and computing average in each array
    for(var key in mapped) {
        if(mapped.hasOwnProperty(key)) {
            var inKey = [];
            mapped[key].forEach(function (person) {
                inKey.push(person.died - person.born);
            });
            mapped[key] = average(inKey);
        }
    }

    return Object.keys(mapped).map(function (_key) {
        return _key + ': ' + mapped[_key];
    });
}

console.log(getStatistic());
