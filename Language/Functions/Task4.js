/*
You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

// 1st function counts B's
// Parameters to be passed: string
function countBs (str) {
	return countChar(str, 'B');
}

// 2nd function counts number of passed letter iterations
// Parameters to be passed: string and character for search
function countChar (str, char) {
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] === char) {
			count++;
		}
	}
	return count;
}
