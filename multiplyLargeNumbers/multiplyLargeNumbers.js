// This is the Part II of Multiplying numbers as strings.

// Multiply two numbers! Simple!

// Rules
// The arguments are passed as strings.
// The numbers will be very large
// The arguments can be negative, in decimals, and might have leading and trailing zeros. 
// e.g. "-01.300"
// Answer should be returned as string
// The returned answer should not have leading or trailing zeroes (when applicable) 
// e.g. "0123" and "1.100" are wrong, they should be "123" and "1.1"
// Zero should not be signed and "-0.0" should be simply returned as "0".

const removeTrailingZeros = (numArray) => {
  const copy = numArray.slice();
  if (copy.includes('.')) {
    while (copy[ copy.length - 1 ] === "0") {
      copy.pop();
    }
    if (copy[ copy.length - 1 ] === ".") {
      copy.pop();
    }
  }
  return copy;
}

const removeLeadingZeros = (numArray) => {
  const copy = numArray.slice();
  const isNegative = copy[ 0 ] === '-';
  if (isNegative) { copy.shift(); }
  while(copy[0] === '0' && copy.length > 1 && copy[1] !== '.') { copy.shift();}
  if (copy.length === 1 && copy[0] === '0') { return copy; }
  if (isNegative) { copy.unshift('-'); }
  return copy;
}

const clean = (numArray) => {
  const noTrailing = removeTrailingZeros(numArray);
  const noLeading = removeLeadingZeros(noTrailing);
  return noLeading;
}

const removeDecimal = (numArray) => {
  const decimalIndex = numArray.indexOf('.');
  if (decimalIndex === -1) {
    return [ numArray, 0 ]
  }

  let places = decimalIndex - (numArray.length - 1);
  const newArray = numArray.slice();
  newArray.splice(decimalIndex, 1);

  return [ newArray, places ];
}

function multiply(n, o) {
  const inputs = [ n, o ];
  const inputObjects = inputs.map(input => input.split(''))
    .map(input => clean(input))
    .map(input => {
      const [ num, places ] = removeDecimal(input);
      const isNegative = num[ 0 ] === '-';
      if (isNegative) { num.shift() }
      return { num, places, isNegative }
    });

  const isNegative = inputObjects.reduce((isNegative, each) => {
    return each.isNegative ? !isNegative : isNegative;
  }, false)
  const places = inputObjects.reduce((p, each) => p + each.places, 0)
  const [ newN, newO ] = inputObjects.map(input => BigInt(input.num.join('')))
  const productArray = (newN * newO).toString().split('');
  if (places) {
    if (productArray.length + places <= 1) {
      productArray.unshift(...'0'.repeat(-places - productArray.length + 1).split(''));
    }
    productArray.splice(productArray.length + places, 0, '.');
  }

  if (isNegative) {
    productArray.unshift('-');
  }
  const result = clean(productArray).join('');
  return result;
}



export default multiply;