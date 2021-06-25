/**
 * @param {number} x
 * @return {number}
 */
const reverseInteger = (x) => {
  if (x == null) { return null; }
  const sign = x < 0 ? -1 : 1;
  x *= sign;
  let y = 0;

  let remainder = 0;
  let previous = x;
  let overflow = false;

  while (x > 0) {

    previous = x;
    y *= 10;
    remainder = x % 10;
    x -= remainder;
    x /= 10;
    y += remainder;
    overflow = x > previous;

  }

  if (overflow || y >= 2 ** 32 / 2) {
    return 0;
  }
  return sign * y;
};

export default reverseInteger;