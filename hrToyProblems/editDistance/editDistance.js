// from Hack Reactor Toy Problems
// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

const editDistance = (str1, str2) => {
  // console.log('editDistance of ', str1, str2, '\n');

  const lev = (a, b, c = 0) => {
    let steps;
    if (a === b) { return 0; }
    if (a.length === 0) { return b.length; }
    if (b.length === 0) { return a.length; }

    const matrix = [];

    for (i = 0; i <= a.length; i++) {
      matrix[i] = [i];
    }
    for (j = 0; j <= b.length; j++) {
      matrix[0][j] = j
    }

    for (i = 1; i <= a.length; i++) {
      for (j = 1; j <= b.length; j++) {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1],
          matrix[i - 1][j],
          matrix[i][j - 1],
        ) + (a[i - 1] === b[j - 1] ? 0 : 1)
      }
    }

    // console.table(matrix);

    return matrix[a.length][b.length];
  }

  return lev(str1, str2)

};

module.exports = { editDistance };
