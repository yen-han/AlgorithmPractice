'''
Source LeetCode
1351. Count Negative Numbers in a Sorted Matrix
https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/
1st 2025-11-24

Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, 
return the number of negative numbers in grid.

Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8

Example 2:
Input: grid = [[3,2],[1,0]]
Output: 0

Constraints
    m == grid.length
    n == grid[i].length
    1 <= m, n <= 100
    -100 <= grid[i][j] <= 100
'''

# 1st Attempt
# LOGIC: Brute force to count negative numbers.
# Time: O(1)  | Space: O(1)
class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] < 0:
                    count +=1
        return count

# 2nd Attempt
# LOGIC: Start from top-right corner and move left/down based on the value.
# Time: O(m + n)  | Space: O(1)
class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        count = 0
        row = 0 
        col = n-1

        while row < m and col >= 0:
            if grid[row][col] < 0:
                count += m - row
                col -= 1
            else: 
                row += 1
        return count
