'''
Source LeetCode
3239. Minimum Number of Flips to Make Binary Grid Palindromic I
https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/description/
1st 2025-04-14

You are given an m x n binary matrix grid.

A row or column is considered palindromic if its values read the same forward and backward.

You can flip any number of cells in grid from 0 to 1, or from 1 to 0.

Return the minimum number of cells that need to be flipped to make either 
all rows palindromic or all columns palindromic.

Example 1:
Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
Output: 2

Example 2:
Input: grid = [[0,1],[0,1],[0,0]]
Output: 1

Constraints
    m == grid.length
    n == grid[i].length
    1 <= m * n <= 2 * 105
    0 <= grid[i][j] <= 1
'''

# 1st Attempt
# LOGIC: Using two pointer, find minimum number of how many times to make palindrome either rows or columns
# Time: O(m*n)  | Space: O(1)
class Solution:
    def minFlips(self, grid: List[List[int]]) -> int:
        row_count = 0
        col_count = 0

        n = len(grid[0]) - 1
        for i in range(len(grid)):
            for j in range(len(grid[0])//2):
                if grid[i][j] != grid[i][n-j]:
                    row_count += 1

        m = len(grid) - 1
        for i in range(len(grid[0])):
            for j in range(len(grid)//2):
                if grid[j][i] != grid[m-j][i]:
                    col_count += 1
        
        return min(row_count, col_count)