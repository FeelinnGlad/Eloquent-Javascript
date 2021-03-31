/*
The previous chapter introduced the standard function Math.min that returns its smallest argument.

We can do that ourselves now.

Write a function min that takes two arguments and returns their minimum.
*/

function min (_1, _2) {
  if (_1 > _2) { return _2; } else { return _1; }
}

//Alternative -> using Math.min([any number of values])
