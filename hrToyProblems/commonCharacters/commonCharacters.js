// from Hack Reactor Toy Problems
/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  let strings = Array.from(arguments).map((string) => new Set(string.replace(/\s/g, '').split('')));
  string1 = strings.shift();
  // reduce function for each string argument
  return Array.from(strings.reduce((reducedCommonalities, stringSet) => {
    // reduce function for each character
    let commonalityCopy = new Set(reducedCommonalities);
    commonalityCopy.forEach((character) => {
      if (!stringSet.has(character)) {reducedCommonalities.delete(character)}
    });
    return reducedCommonalities;
  }, string1)).join('');
};

// console.log(commonCharacters('acexivou', 'aegihobu'));
