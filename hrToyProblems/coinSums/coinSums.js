// from Hack Reactor Toy Problems
/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/


var makeChange = function(total, coins = [200, 100, 50, 20, 10, 5, 2, 1]) {
  if (typeof total != "number") { return null; }
  if (total === 0) {return 1;}
  let combinations = 0;
  for (let i = 0; i < coins.length; i++) {
    let value = coins[i];
    let remainingValue = total - value;
    if (remainingValue >= 0) {
      let subCombinations = makeChange(remainingValue, coins.slice(i));
      combinations += subCombinations;
    }
  }
  return combinations;
};

// console.log('makeChange(0) ', makeChange(0));
// console.log('makeChange(1) ', makeChange(1));
// console.log('makeChange(2) ', makeChange(2));
// console.log('makeChange(3) ', makeChange(3));
// console.log('makeChange(4) ', makeChange(4));
// console.log('makeChange(5) ', makeChange(5));
// console.log('makeChange(10) ', makeChange(10));
// console.log('makeChange(25) ', makeChange(25));
// console.log('makeChange(50) ', makeChange(50));
// console.log('makeChange(100) ', makeChange(100));
// console.log('makeChange(200) ', makeChange(200));
