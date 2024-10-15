"""
Source LeetCode
200. Number of Islands
https://leetcode.com/problems/number-of-islands/description/
1st 2024-10-12

Given an m x n 2D binary grid grid which represents a map of '1's (land) 
and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent 
lands horizontally or vertically. You may assume all four edges of the 
grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

Constraints:
    m == grid.length
    n == grid[i].length
    1 <= m, n <= 300
    grid[i][j] is '0' or '1'.
"""

# 1st Attempt
# LOGIC: Check all 4 directions(up, down, left, right) of 0
# Time : -
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        def dfs(i: int, j: int) -> None:
            if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]) or grid[i][j] == "0" or visited[i][j]:
                return
            visited[i][j] = True 
            dfs(i+1, j)
            dfs(i-1, j) 
            dfs(i, j+1)
            dfs(i, j-1) 

        visited = [[False for _ in range(len(grid[0]))] for _ in range(len(grid))] 
        count = 0 
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == "1" and not visited[i][j]:
                    count += 1
                    dfs(i, j)
        return count 