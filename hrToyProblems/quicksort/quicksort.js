// from Hack Reactor Toy Problems
/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
  if (!Array.isArray(array)){return array;}
  if (array.length <= 1){ return array;}
  let smaller = [];
  let larger = [];
  let pivot = array[0];
  for (let i = 1; i < array.length; i++){
    if (array[i] < pivot) {
      smaller.push(array[i]);
    } else {
      larger.push(array[i]);
    }
  }
  return quicksort(smaller).concat(pivot, quicksort(larger));
};
