"""
Source LeetCode
130. Surrounded Regions
https://leetcode.com/problems/surrounded-regions/description/
1st 2024-10-16

You are given an m x n matrix board containing letters 'X' and 'O', capture regions 
that are surrounded:

    Connect: A cell is connected to adjacent cells horizontally or vertically.
    Region: To form a region connect every 'O' cell.
    Surround: The region is surrounded with 'X' cells if you can connect the region 
    with 'X' cells and none of the region cells are on the edge of the board.

A surrounded region is captured by replacing all 'O's with 'X's in the input matrix board.

Example 1:
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

Example 2:
Input: board = [["X"]]
Output: [["X"]]


Constraints:
    m == board.length
    n == board[i].length
    1 <= m, n <= 200
    board[i][j] is 'X' or 'O'.
"""
class Solution:
    def solve(self, board: List[List[str]]) -> None:

        if not board or not board[0]:
            return
        
        R, C = len(board), len(board[0])
        
        visited = [[False for _ in range(C)] for _ in range(R)]

        def dfs(i: int, j: int) -> None:
            if i < 0 or j < 0 or i >= R or j >= C or board[i][j] == "X" or visited[i][j]:
                return

            visited[i][j] = True
            dfs(i + 1, j)
            dfs(i - 1, j)
            dfs(i, j + 1)
            dfs(i, j - 1)

        # Step 1: Start DFS from the border and mark all connected "O"s in the visited array
        for r in range(R):
            dfs(r, 0)        
            dfs(r, C - 1)    
        for c in range(C):
            dfs(0, c)        
            dfs(R - 1, c)    

        # Step 2: Traverse the board, flipping all unvisited "O" to "X"
        for r in range(R):
            for c in range(C):
                if board[r][c] == "O" and not visited[r][c]:
                    board[r][c] = "X" 
              
