// Constructor "vector" with "x" and "y" parameters
function vector (x, y) {
    this.x = x;
    this.y = y;
};

// "plus" method that returns a sum of two vectors
vector.prototype.plus = function (_vector) {
    return new vector(this.x + _vector.x, _vector.y + this.y);
};

// "minus" method that returns a difference of two vectors
vector.prototype.minus = function (_vector) {
    return new vector(this.x - _vector.x, this.y - _vector.y);
};

// getter property "length" that computes the length of the vector
Object.defineProperty(vector.prototype, 'length', {
    get: function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
});

console.log(new vector(1, 2).plus(new vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new vector(1, 2).minus(new vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new vector(3, 4).length);
console.log(new vector(7, 8).length);
// → 5
