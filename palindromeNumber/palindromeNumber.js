/**
 * @param {number} x
 * @return {boolean}
 */
const palindromeNumber = function(x) {
  if (x < 0) { return false }
  if (x < 10) { return true }

  let digits = [];
  while (x > 0) {
    let remainder = x % 10;
    digits.push(remainder);
    x -= remainder;
    x /= 10;
  }
  const reversed = digits.slice().reverse();
  return digits.reduce((match, currentValue, index) => {
    return match && currentValue === reversed[index];
  }, true)
};

export default palindromeNumber;