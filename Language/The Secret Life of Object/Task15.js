// Constructor function that wraps an array and allows
// iteration over the array using the interface
function arraySeq (arr) {
    this.arr = arr;
    this.currPos = -1;
}

// Method indicating about the end of a sequence
arraySeq.prototype.getNext = function () {
    this.currPos++;
    if (this.currPos < this.arr.length) {
        return {
            value: this.arr[this.currPos],
            end: false
        };
    } else {
        return { end: true };
    };
};

// Constructor function that iterates over a range of integers
function rangeSeq (from, to) {
    var arr = [];
    for (var i = from; i <= to; i++) {
        arr.push(i);
    }
    arraySeq.call(this, arr);
};

rangeSeq.prototype = Object.create(arraySeq.prototype);

// Function that logs 1st five (or fewer if sequence overs in advance) elements
function logFive (object) {
    var res = '';
    for (var i = 0; i < 5; i++) {
        var data = object.getNext();
        if (!data.end) {
            res += data.value + '\n';
        } else {
            break;
        };
    }
    return res;
};

logFive(new arraySeq([1, 2]));
logFive(new rangeSeq(100, 1000));
