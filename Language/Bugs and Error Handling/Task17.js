// Working object
var box = {
    locked: true,
    unlock: function () { this.locked = false; },
    lock: function () { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) {
            throw new Error('Locked!');
        };
        return this._content;
    }
};

// Using "finally" block to "lock" the box
// regardless the body execution result
function withBoxUnlocked(body) {
    box.unlock();
    try {
        body();
    } finally {
        box.lock();
    }
}

// Passing a safe function
withBoxUnlocked(function () {
    box.content.push('gold piece');
});

// Passing an erring function
try {
    withBoxUnlocked(function () {
        throw new Error('Pirates on the horizon! Abort!');
    });
} catch (e) {
    console.log('Error raised:', e);
}
console.log(box.locked);
// → true
