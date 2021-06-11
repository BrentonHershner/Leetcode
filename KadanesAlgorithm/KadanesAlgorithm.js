const sumOfArray = (array) => {
  return array.reduce((accum, curr) => accum + curr)
}

var KadanesAlgorithm = (array) => {

  if (array.length === 1) { return array; }

  const allButFirst = array.slice(1);
  const allButLast = array.slice(0, array.length - 1);

  if (sumOfArray(array) > sumOfArray(KadanesAlgorithm(allButLast)) &&
    sumOfArray(array) > sumOfArray(KadanesAlgorithm(allButFirst))) {
    return array;
  }

  if (sumOfArray(allButFirst) > sumOfArray(allButLast)) {
    return KadanesAlgorithm(allButFirst);
  } else {
    return KadanesAlgorithm(allButLast);
  }

};

export default KadanesAlgorithm;
