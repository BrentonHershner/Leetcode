// Given an array of positive or negative integers

// I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

// Example:
// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.


const getPrimesUpTo2 = (num) => {
  const primes = {};
  for (let i = 2; i <= num; i++) {
    primes[ i ] = true;
  }
  for (const prime in primes) {
    for (let m = 2; m * prime <= num; m++) {
      delete primes[ m * prime ];
    }
  }
  return Object.keys(primes).map(num => Number(num));
};

const getPrimesUpTo = (num) => {
  const primes = [];
  for (let i = 2; i <= num; i++) {
    if (!primes.length) {
      primes.push(i);
      continue;
    }
    const isPrime = primes.every(p => i % p !== 0);
    if (isPrime) { primes.push(i); }
  }
  return primes;
};

function sumOfDivided(lst) {
  const abs = lst.map(n => Math.abs(n));
  const largest = Math.max(...abs);
  const sums = {};
  getPrimesUpTo(largest)
    .filter(p => {
      return lst.some(i => i % p === 0);
    }).forEach(p => sums[ p ] = 0);

  lst.forEach(inputNum => {
    for (const primeStr in sums) {
      const primeFactor = Number(primeStr);
      if (inputNum % primeFactor === 0) {
        sums[ primeStr ] += inputNum;
      }
    }
  });

  return Object.entries(sums)
    .map(kvp => [ Number(kvp[ 0 ]), kvp[ 1 ] ]);
}



// const primeMax = 1000;

// console.time('prime');
// console.log(getPrimesUpTo(primeMax));
// console.timeEnd('prime');

// console.time('prime2');
// console.log(getPrimesUpTo2(primeMax));
// console.timeEnd('prime2');

export default sumOfDivided;