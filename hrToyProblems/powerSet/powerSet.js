// from Hack Reactor Toy Problems
/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str, sorted = false) {
  let letters = new Set();
  for (let i = 0; i < str.length; i++){
    letters.add(str[i]);
  }
  str = Array.from(letters).join('');
  let set = new Set();
  let strlength = str.length;
  if (strlength === 0) { set.add(''); }
  for (let i = 0; i < strlength; i++) {
    // let first = str.slice(0, i);
    let last = str.slice(i + 1);
    let subsets = powerSet(last);
    subsets.forEach(subset => {
      set.add(str[i].concat(subset));
      set.add(subset);
    });
  }

  return (Array.from(set)).sort();
};

// console.log(JSON.stringify(powerSet("abc")));
// [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
// console.log(JSON.stringify(powerSet("aabbb")));

// console.log(JSON.stringify(powerSet("jump")));
// console.log(JSON.stringify(["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]));
