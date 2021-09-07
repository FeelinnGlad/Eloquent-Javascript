// "car and cat" match
console.log(verify(/ca(r|t)/,
    ['my car', 'bad cats'],
    ['camper', 'high art']));

// "pop and prop" match
console.log(verify(/pr?op/,
    ['pop culture', 'mad props'],
    ['plop']));

// "ferret, ferry, and ferrari" match
console.log(verify(/ferr(et|y|ari)/,
    ['ferret', 'ferry', 'ferrari'],
    ['ferrum', 'transfer A']));

// Any word ending in ious
console.log(verify(/\w*(ious)\b/,
    ['how delicious', 'spacious room'],
    ['ruinous', 'consciousness']));

// A whitespace character followed by a dot, comma, colon, or semicolon
console.log(verify(/ (\.|,|;|:)/,
    ['bad punctuation .'],
    ['escape the dot']));

// A word longer than six letters
console.log(verify(/\b[a-zA-Z]{7,}\b/,
    ['hottentottententen'],
    ['no', 'hotten totten tenten']));

// A word without the letter e
console.log(verify(/\b[a-df-z]+\b/i,
    ['red platypus', 'wobbling nest'],
    ['earth bed', 'learning ape']));

function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source === '...') {
        return false;
    }
    yes.forEach(function (s) {
        if (!regexp.test(s)) {
            console.log("Failure to match '" + s + "'");
            return false;
        }
    });
    no.forEach(function (s) {
        if (regexp.test(s)) {
            console.log("Unexpected match for '" + s + "'");
            return false;
        }
    });
}
