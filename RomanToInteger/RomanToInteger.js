const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const translateRomanNumeral = (romanNumeral) => {
  if (typeof romanNumeral !== 'string') { return null; }
  return romanNumeral.split('').map((romanLetter) => { return DIGIT_VALUES[romanLetter] })
    .map((value, index, array) => (array[index + 1] && array[index + 1] > value ? -value : value))
    .reduce((accu, value) => accu + value, 0);
};

export default translateRomanNumeral;
