// from Hack Reactor Toy Problems
/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  if (string.length === 1) { return [string]; }
  let anagrams = new Set();
  let checkedLetters = new Set();
  let stringLength = string.length;
  for (let i = 0; i < stringLength; i++) {
    if (checkedLetters.has(string[i])) { continue; }
    checkedLetters.add(string[i]);
    let beforeIndex = string.slice(0, i);
    let afterIndex = string.slice(i + 1);
    let subString = beforeIndex.concat(afterIndex);
    let subStringAnagrams = allAnagrams(subString);
    subStringAnagrams.forEach(subAnagram => {
      let newAnagram = string[i].concat(subAnagram);
      anagrams.add(newAnagram);
    })
  }
  return Array.from(anagrams);
};


// let log = function(thisFunction, ...args) {
//   let tick = Date.now();
//   let result = thisFunction.apply(null, args);
//   console.log(`${thisFunction.name} took ${Date.now() - tick}ms to run and it's result is ${result}`);
// }

// log(allAnagrams, 'abc', 'another');
// log(allAnagrams, 'apps');

// let tick = Date.now();
// console.log(allAnagrams('debitcard').indexOf('badcredit'), 'should not be -1');
// console.log(`${Date.now() - tick}ms`)