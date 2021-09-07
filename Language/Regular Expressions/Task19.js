function fixedText() {
    var text = "'I'm the cook,' he said, 'it's my job.'";
    // Changed call
    return text.replace(/^'|(\W)'|'(\W)|'$/g, '$1"');
}
console.log(fixedText());
