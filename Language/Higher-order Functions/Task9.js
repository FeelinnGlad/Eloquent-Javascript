// Function for flattering arrays
// made with reduce method combined with concat
function flatter(arr) {
  return arr.reduce(function(accum, curr) {
    return accum.concat(curr);
  });
}

var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatter(arrays));
