function repeat (string, times) {
    var result = '';
    for (var i = 0; i < times; i++) { result += string; }
    return result;
}

function textCell (text) {
    this.text = text.split('\n');
}
textCell.prototype.minWidth = function () {
    return this.text.reduce(function (width, line) {
        return Math.max(width, line.length);
    }, 0);
};
textCell.prototype.minHeight = function () {
    return this.text.length;
};
textCell.prototype.draw = function (width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || '';
        result.push(line + repeat(' ', width - line.length));
    }
    return result;
};

// --------------------------------------- My code ------------------------------------------------

// Creating constructor function that conforms to the table cell interface
function stretchCell (inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}

// Describing constructor prototypes' methods
stretchCell.prototype.minWidth = function () {
    return Math.max(this.width, this.inner.minWidth());
};
stretchCell.prototype.minHeight = function () {
    return Math.max(this.height, this.inner.minHeight());
};
stretchCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height);
};

var sc = new stretchCell(new textCell('abc'), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]
