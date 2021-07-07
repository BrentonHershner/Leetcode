// from Hack Reactor Toy Problems
/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.

var testingTransform = function(array) {
  var transform = [];

  for (var i = 0; i < array.length; i++) {
    transform.push({ value: array[i], i: i });
  }

  return transform;
};

var insertionSort = function(array, compareFunction = (a, b) => {
  // console.log(a.value, b.value);

  // if (!a.value || !b.value) { return 0; }
  return a.value - b.value;
}) {
  if (!Array.isArray(array)) { return undefined; }
  if (array.length <= 1) { return array; }

  for (let i = 1; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      if (compareFunction(array[j], array[i]) > 0) {
        array.splice(j, 0, array.splice(i, 1)[0]);
        break;
      }
    }
  }
  return array;
};

// array.should.eql([
//   { value: 0, i: 0 },  0
//   { value: [], i: 4 }, 1 
//   { value: 1, i: 1 },  a
//   { value: ';', i: 3 },  ; 
//   { value: {}, i: 5 },   []
//   { value: 'a', i: 2 },  {}
//   { value: undefined, i: 6 },  undefined
//   { value: null, i: 7 }  null
// ]);



// let comparison = (a, b) => {
//   let comparison = '';
//   if (a === b) {
//     comparison = '='
//   } else if (a < b) {
//     comparison += '<'
//   } else if (a > b) {
//     comparison += '>'
//   } else {
//     comparison = '!'
//   }
//   return comparison;
// }

// var weird = [0, 1, 'a', ';', [], {}, undefined, null];
// var matrix = [[''].concat(weird)];
// for (let i = 0; i < weird.length; i++) {
//   let row = [weird[i]];
//   for (let j = 0; j < weird.length; j++) {
//     row.push(comparison(weird[i], weird[j]))
//   }
//   matrix.push(row);
// }

// console.table(matrix);

// var array = testingTransform([0, 1, 'a', ';', [], {}, undefined, null]);
// console.log(JSON.stringify(insertionSort(array), null, 2)); // Welcome to bizarro-world: play with this in your terminal to figure out why it sorts as it does.





console.log(JSON.stringify(insertionSort([
  { value: 3, i: 0 },
  { value: 5, i: 1 },
  { value: 1, i: 2 },
  { value: -6, i: 3 },
  { value: 1, i: 4 },
  { value: 6, i: 5 },
]), null, 2)); // yields [{value: 1}, {value: 2}, {value: 3}]


// var array = testingTransform([1, 2, 3, 4, 5]);
// console.log(JSON.stringify(insertionSort(array, function(a, b) {
//   return b.i - a.i;
// })));
// ([
//   { value: 5, i: 4 },
//   { value: 4, i: 3 },
//   { value: 3, i: 2 },
//   { value: 2, i: 1 },
//   { value: 1, i: 0 }]);

// var array = testingTransform([0, 1, 2, 3, 4, 5]);
// console.log(JSON.stringify(insertionSort(array, function(a, b) {
//   var aIsOdd = a.value & 1;
//   var bIsOdd = b.value & 1;
//   return aIsOdd - bIsOdd;
// })));
// ([
// { value: 0, i: 0 },
// { value: 2, i: 2 },
// { value: 4, i: 4 },
// { value: 1, i: 1 },
// { value: 3, i: 3 },
// { value: 5, i: 5 }]);

