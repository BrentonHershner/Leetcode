// from Hack Reactor Toy Problems
/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {
  const rows = board.split('\n');
  const columns = rows[0].split('').map((firstElement, index) => {
    return rows.map((row) => row.split('')[index]).join('');
  });
  const grids = {};
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const grid = `${Math.floor(row / 3)},${Math.floor(col / 3)}`;
      grids[grid] = grids[grid] ? grids[grid].concat(rows[row][col]) : rows[row][col];
    }
  }
  const rowsColumnsGrids = rows.concat(columns).concat(Object.values(grids));
  return rowsColumnsGrids.every((line) => new Set(line.split('')).size === 9) ? 'solved' : 'invalid';
}

// const input = "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";
// console.log(sudokuChecker(input));
