// from Hack Reactor Toy Problems
/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function(array, target) {
  const midpoint = Math.floor(array.length / 2);
  const midpointValue = array[midpoint];
  if (target === midpointValue) { return midpoint }
  if (array.length <= 1){return null}
  if (target < midpointValue) {
    const subSearch = binarySearch(array.slice(0, midpoint), target);
    if (subSearch === null) {return null}
    return subSearch;
  }
  if (target > midpointValue) {
    const subSearch = binarySearch(array.slice(midpoint + 1), target);
    if (subSearch === null) { return null }
    return subSearch + midpoint+1;
  }
};

// var index = binarySearch([1, 2, 3, 4, 5], 4);
// console.log(index); // 3
// var index = binarySearch([1, 2, 3, 4, 5], 8);
// console.log(index); // null

