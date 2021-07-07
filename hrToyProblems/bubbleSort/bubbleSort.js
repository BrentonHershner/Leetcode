// from Hack Reactor Toy Problems
/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


var bubbleSort = function(array) {
  if (array === undefined || array === null) { return; }
  let sorted = array.slice();
  let swapped = false;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === undefined || array[i] === null) { return; }
    swapped = false;
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
        swapped = true;
      }
    }
    if (swapped === false) {
      return sorted;
    }
  }
  return sorted;
};


// console.log(bubbleSort([6, 2, 10, 3, 5, 4]));
// console.log(bubbleSort([6, 2, 1, 3, 5, 4]));
// console.log(bubbleSort(['c', 'b', 'a']));
// console.log(bubbleSort([]));
// console.log(bubbleSort(undefined));
// console.log(bubbleSort(null));
// console.log(bubbleSort([0]));
// console.log(bubbleSort([undefined]));

