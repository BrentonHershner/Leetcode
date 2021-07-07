// from Hack Reactor Toy Problems
/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  const sign = number < 0 ? -1 : 1;
  number = Math.abs(number);
  const precision = 0.000000000001;
  let numerator = 0;
  let denominator = 1;
  while (true) {
    const difference = numerator / denominator - number;
    if (difference < precision && difference > -precision) { return `${sign * numerator}/${denominator}`; }
    if (difference > 0) { denominator += 1; } else { numerator += 1; }
  }
};
