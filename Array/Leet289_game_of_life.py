'''
Source LeetCode
289. Game of Life
https://leetcode.com/problems/game-of-life/description/
1st 2025-01-20

According to Wikipedia's article: "The Game of Life, also 
known simply as Life, is a cellular automaton devised by the 
British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has 
an initial state: live (represented by a 1) or dead (represented by a 0). 
Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) 
using the following four rules (taken from the above Wikipedia article):

    Any live cell with fewer than two live neighbors dies as if caused by under-population.
    Any live cell with two or three live neighbors lives on to the next generation.
    Any live cell with more than three live neighbors dies, as if by over-population.
    Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The next state of the board is determined by applying the above rules 
simultaneously to every cell in the current state of the m x n grid board. 
In this process, births and deaths occur simultaneously.

Given the current state of the board, update the board to reflect its next state.

Note that you do not need to return anything.

Example 1:
Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

Example 2:
Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]

Constraints
    m == board.length
    n == board[i].length
    1 <= m, n <= 25
    board[i][j] is 0 or 1.
'''

# 1st Attempt
# LOGIC: Create a new board to store the next state of the board, then update the original board
# Time: O(m*n)  | Space: O(1)
class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        rows, columns = len(board), len(board[0])
        for row in range(rows):
            for col in range(columns):
                count = self.checkNeighbors(board, [row, col]) 
                if board[row][col] == 1 and (count < 2 or count > 3):
                    board[row][col] = 2 # live -> dead
                if board[row][col] == 0 and count ==3:
                    board[row][col] = -1 # dead->live
        for row in range(rows):
            for col in range(columns):
                if board[row][col] == 2:
                    board[row][col] = 0  # Dead cell (was live, now dies)
                elif board[row][col] == -1:
                    board[row][col] = 1 
    
    def checkNeighbors(self, board: List[List[int]], coor: list) -> int:
        x, y = coor[0], coor[1] 
        count = 0
        # Check all 8 neighbors with boundary checks
        for i in range(-1, 2):
            for j in range(-1, 2):
                # Skip the center cell itself
                if i == 0 and j == 0:
                    continue
                if 0 <= x + i < len(board) and 0 <= y + j < len(board[0]):
                    if board[x + i][y + j] == 1 or board[x + i][y + j] == 2:
                        count += 1

        return count