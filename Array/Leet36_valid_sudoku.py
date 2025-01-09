"""
Source LeetCode
36. Valid Sudoku
https://leetcode.com/problems/valid-sudoku/description/
2nd: 2024-12-22

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:

    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.

Example 1:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Constraints:

    board.length == 9
    board[i].length == 9
    board[i][j] is a digit 1-9 or '.'.
"""

# 2nd Attempt
# LOGIC: Using set, check if there is repetition in row, column and 3*3 grid
# Time : O(n^2)  |  Space: O(1)
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # row validation
        for i in range(len(board)):
            used = set()
            for j in range(len(board[i])):
                if board[i][j] in used and board[i][j]!='.':
                    return False
                else:
                    used.add(board[i][j])
        # column validation
        for i in range(len(board)):
            used = set()
            for j in range(len(board[i])):
                if board[j][i] in used and board[j][i]!='.':
                    return False
                else:
                    used.add(board[j][i])

        # 3*3 validation
        for start_row in range(0, 9, 3):  
            for start_col in range(0, 9, 3):  
                used = set()
                for row in range(start_row, start_row + 3):  
                    for col in range(start_col, start_col + 3): 
                        if board[row][col] in used and board[row][col]!='.':
                            return False
                        else:
                            used.add(board[row][col])
        return True