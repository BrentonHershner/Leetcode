// from Hack Reactor Toy Problems
/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  let uniqueLetters = {};
  let repeatedLetters = {};
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (repeatedLetters[letter]) { continue; }
    if (uniqueLetters[letter] >= 0) {
      repeatedLetters[letter] = true;
      delete uniqueLetters[letter];
    } else {
      uniqueLetters[letter] = i;
    }
  }

  let firstUniqueLetter = null;

  for (letter in uniqueLetters) {
    if (firstUniqueLetter === null) {firstUniqueLetter = letter}
    if (uniqueLetters[letter] < uniqueLetters[firstUniqueLetter]) {firstUniqueLetter = letter}
  }

  return firstUniqueLetter
};

// console.log(firstNonRepeatedCharacter('AACBDB')); // => 'C'
// console.log(firstNonRepeatedCharacter('ABA')); // => 'B'
// console.log(firstNonRepeatedCharacter('Aba')); // => 'B'
