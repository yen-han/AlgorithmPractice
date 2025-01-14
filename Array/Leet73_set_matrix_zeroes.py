"""
Source LeetCode
73. Set Matrix Zeroes
https://leetcode.com/problems/set-matrix-zeroes/description/
1st: 2025-01-12

Given an m x n integer matrix matrix, if an element is 0, set its 
entire row and column to 0's.

You must do it in place.

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

Constraints:
    m == matrix.length
    n == matrix[0].length
    1 <= m, n <= 200
    -231 <= matrix[i][j] <= 231 - 1
"""

# 1st Attempt
# LOGIC: Track the row and column of the element that is zero. Then, set the entire row and column to zero
# Time : O(m*n)  |  Space: O(m+n)
class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        combination = []
        rows, columns = len(matrix), len(matrix[0])
        for r in range(rows):
            for c in range(columns):
                if matrix[r][c] == 0:
                    combination.append([r,c])

        for comb in combination:
            r = comb[0]
            c = comb[1]
            # up, down, right, left
            for i in range(0, rows):
                matrix[i][c]=0
            for k in range(0, columns):
                matrix[r][k]=0

