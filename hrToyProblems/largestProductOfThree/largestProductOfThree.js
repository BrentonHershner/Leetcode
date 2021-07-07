// from Hack Reactor Toy Problems
/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // const sortFunc = (a, b) => Math.abs(a) - Math.abs(b)
  const sortFunc = (a, b) => a - b
  array.sort(sortFunc);
  console.log(array);
  const l = array.length
  const opt1 = array[l - 1] * array[l - 2] * array[l - 3];
  const opt2 = array[0] * array[1] * array[l - 1];
  return Math.max(opt1, opt2);
};
