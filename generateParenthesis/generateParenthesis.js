const generateParenthesis = (n) => {
  const allPossibilities = [];
  const buildParens = (parenString, open, close) => {
    if (parenString.length === n * 2) { allPossibilities.push(parenString); }
    if (open < n) { buildParens(parenString + '(', open + 1, close) }
    if (close < open) { buildParens(parenString + ')', open, close + 1) }
  };
  buildParens('', 0, 0);
  return allPossibilities;
};

export default generateParenthesis;
