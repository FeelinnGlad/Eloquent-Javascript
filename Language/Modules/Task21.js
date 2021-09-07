var month = (function () {
    // Giving month names own namespace
    var names = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    // Wrapping functions in one object
    return {
        name: function (number) {
            return names[number];
        },
        number: function (number) {
            return names.indexOf(number);
        }
    };
}());
console.log(month.name(11));
// → March
console.log(month.number('November'));
// → 10
