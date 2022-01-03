
// Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the first one.
// Return null if there are no even-occurrence items.

// example usage:
// var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
// console.log(onlyEven); //  4


const evenOccurrence = (arr) => {

  const occurances = new Map();
  
  arr.forEach(num => {
    const times = occurances.has(num) ? occurances.get(num) + 1 : 1;
    occurances.set(num, times);
  })

  for (const [ num, times ] of occurances) {
    if (times % 2 === 0) { return num; }
  }

  return null;
};

export default evenOccurrence;