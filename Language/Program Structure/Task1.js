/*
#
##
###
####
#####
######
#######
Separate new lines with '\n' symbol, so the output string looks like this:

"#\n##\n###\n####\n#####\n######\n#######\n"
It may be useful to know that you can find the length of a string by writing .length after it.

var abc = "abc";
console.log(abc.length);
// → 3
*/

function forLoop () {
  let line = '';
  for (let delta = '#'; delta.length <= 7; delta += '#') {
    line += `${delta}\n`;
  }
  return line;
}

forLoop();
