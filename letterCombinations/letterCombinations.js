const combinations = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
}

const letterCombinations = (phoneNumber) => {
  if (phoneNumber.length === 0) { return [] }
  const possibleLetters = combinations[phoneNumber[0]].split('');
  const recursiveResult = letterCombinations(phoneNumber.slice(1));
  if (recursiveResult.length === 0) { return possibleLetters; }
  return possibleLetters.reduce((allCombos, eachLetter) => {
    const thisCombo = recursiveResult.map(eachRecursiveResult => {
      return eachLetter.concat(eachRecursiveResult)
    });
    return allCombos.concat(thisCombo);
  }, [])
};

export default letterCombinations;
