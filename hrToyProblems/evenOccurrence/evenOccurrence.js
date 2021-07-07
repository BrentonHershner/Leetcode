// from Hack Reactor Toy Problems
/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {

  var uniqueObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (!uniqueObj[arr[i]]) { uniqueObj[arr[i]] = 0 }
    uniqueObj[arr[i]]++;
  }

  var greatestOccurance = 0;
  for (key in uniqueObj) {
    if (key % 2 === 0 && uniqueObj[key] > greatestOccurance) {
      greatestOccurance = uniqueObj[key];
    }
  }

  for (key in uniqueObj) {
    if (key % 2 === 0 && uniqueObj[key] == greatestOccurance) {
      return Number(key);
    };
  }
  return null;
};
