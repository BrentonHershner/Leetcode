// from Hack Reactor Toy Problems
/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(a, b) {
  if (typeof a !== typeof b) { return false }
  if (typeof a === 'object') {
    if (Object.keys(a).length !== Object.keys(b).length) { return false }
    for (let key in a) {
      if (!deepEquals(a[key], b[key])) { return false }
    }
  } else {
    if (a !== b) { return false }
  }
  return true
};

console.log(deepEquals({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } }), 'should be true'); // true
console.log(deepEquals({ a: 1, b: { c: 5 } }, { a: 1, b: { c: 6 } }), 'should be false'); // false
