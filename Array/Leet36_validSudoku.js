/*********************************************************************** 
Source LeetCode
36. Valid Sudoku
https://leetcode.com/problems/valid-sudoku/description/
1st 2023-04-16

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need 
to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 
    1-9 without repetition.

Note:
    - A Sudoku board (partially filled) could be valid but is not necessarily 
    solvable.
    - Only the filled cells need to be validated according to the mentioned 
    rules.

 * @param {character[][]} board
 * @return {boolean}

Constraints:
    board.length == 9
    board[i].length == 9
    board[i][j] is a digit 1-9 or '.'.
************************************************************************/

// 1st Attempt
// LOGIC: Check if each row, column, and 3*3 sub-box follows the sudoku rules.
// Time: O(n^2) Space: O(n^2)
var isValidSudoku = function (board) {
  // Hash set
  let check = new Set();

  // 1) check each row
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== ".") {
        if (check.has(board[i][j])) return false;
        else check.add(board[i][j]);
      }
    }
    check.clear();
  }

  // 2) check each column
  for (let i = 0; i < board[0].length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[j][i] !== ".") {
        if (check.has(board[j][i])) return false;
        else check.add(board[j][i]);
      }
    }
    check.clear();
  }

  // 3) check the 3*3 sub-box
  let subbox = 3;
  let breakpoint = 0;
  for (let p = 0, start = 0; p < board.length; p++) {
    if (p != 0 && p % subbox == 0) {
      start += subbox;
      breakpoint = 0;
    }

    for (let i = start; i < start + subbox; i++) {
      for (let j = breakpoint; j < breakpoint + subbox; j++) {
        if (board[i][j] !== ".") {
          if (check.has(board[i][j])) return false;
          else check.add(board[i][j]);
        }
      }
    }
    breakpoint += subbox;
    check.clear();
  }

  return true;
};
