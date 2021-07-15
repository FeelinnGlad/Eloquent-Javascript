function deepEqual(val1, val2) {
  // Checking if values are primitive and thus comparable
  // Or if they're null values
  if (val1 === val2 || (val1 === null && val2 === null)) {
    return true;
  }
  var cond = !val1 || !val2;
  if (cond || typeof(val1) !== 'object' || typeof(val2) !== 'object') {
    return false;
  }
  // Comparing object values
  var keyVal1 = 0, keyVal2 = 0;
  for (var key1 in val1) {
    if (val1.hasOwnProperty(key1)) {
      keyVal1++;
    }
  }
  for (var key2 in val2) {
    if (val2.hasOwnProperty(key2)) {
      keyVal2++;
      if (!(key2 in val1) || !deepEqual(val1[key2], val2[key2])) {
        return false;
      }
    }
  }
  return keyVal1 === keyVal2;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
