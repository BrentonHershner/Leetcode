// from Hack Reactor Toy Problems
/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

const threeDigits = (number) => {
  const numberValue = Number(number);
  if (numberValue === 0) { return null }

  const num = numberValue.toString().split('')

  const placeWord = numbersToPlace[100];

  const [onesDigit] = num.slice(-1);
  const [tensDigit] = num.slice(-2, -1);
  const [hundDigit] = num.slice(-3, -2);

  const onesWords = numbersToWords[onesDigit];
  const tensWords = numbersToWords[tensDigit * 10];
  const hundWords = hundDigit ? `${numbersToWords[hundDigit]} ${placeWord}` : null;

  const nonCompound = numbersToWords[num.slice(-2).join('')];
  const compound = [tensWords, onesWords].join('-')

  const tensAndOnes = onesDigit === '0' && tensDigit === '0' ? undefined : nonCompound ?? compound;

  const words = [];
  if (hundWords) { words.push(hundWords) }
  if (tensAndOnes) { words.push(tensAndOnes) }

  return words.join(' ');
}

Number.prototype.toEnglish = function() {
  let num = this.valueOf();
  if (num === 0) { return numbersToWords[0] }

  // if (this.valueOf() === 1000) { debugger };

  let place = 1;

  let words = [];

  while (num > 0) {
    const numArray = num.toString().split('');

    const commaSeparated = [threeDigits(numArray.splice(-3, 3).join('').valueOf())];
    let placeWord = numbersToPlace[place];
    if (commaSeparated[0]) {
      if (placeWord) { commaSeparated.push(placeWord) }
      words.unshift(commaSeparated.join(' '));
    }
    num = numArray.join('');
    place *= 1000;
  }

  return words.join(' ');
};


// Extra credit: Make your function support decimals.
// Example:
//   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"

module.export = Number;
