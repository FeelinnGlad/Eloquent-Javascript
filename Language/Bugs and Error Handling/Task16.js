// Custom type of exception
function multiplicatorUnitFailure () {};

// Inheriting from the Error constructor
multiplicatorUnitFailure.prototype = Object.create(Error.prototype);

// Function to be wrapped
function primitiveMultiply (a, b) {
    if (Math.random() < 0.5) {
        return a * b;
    } else {
        throw new multiplicatorUnitFailure();
    }
}
// Using a recursion until the call succeeds
function reliableMultiply (a, b) {
    try {
        return primitiveMultiply(a, b);
    } catch (e) {
        if (e instanceof multiplicatorUnitFailure) {
            console.log('Bad luck.');
            return reliableMultiply(a, b);
        } else {
            throw e;
        }
    }
}

console.log(reliableMultiply(8, 8));
// → 64
