"""
Source LeetCode
63. Unique Paths II
https://leetcode.com/problems/unique-paths-ii/description/
1st 2025-03-29

You are given an m x n integer array grid. There is a robot initially located 
at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner 
(i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot 
takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to 2 * 109.

Example 1:
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2

Example 2:
Input: obstacleGrid = [[0,1],[0,0]]
Output: 1

Constraints:
    m == obstacleGrid.length
    n == obstacleGrid[i].length
    1 <= m, n <= 100
    obstacleGrid[i][j] is 0 or 1.
"""
# 1st Attempt
# LOGIC: Use dynamic programming to count unique paths while avoiding obstacles.
# Time : O(m*n)  | Space: O(m*n)
class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        dp = [[0] * len(obstacleGrid[0]) for _ in range(len(obstacleGrid))]

        for i in range(len(obstacleGrid)):
            for j in range(len(obstacleGrid[0])):
                if i == 0 and j == 0:
                    dp[i][j] = 1 if obstacleGrid[i][j] == 0 else 0  
                elif i == 0:  # first row
                    dp[i][j] = 1 if obstacleGrid[i][j] == 0 and dp[i][j-1] == 1 else 0
                elif j == 0:  # first col
                    dp[i][j] = 1 if obstacleGrid[i][j] == 0 and dp[i-1][j] == 1 else 0
                else:
                    if obstacleGrid[i][j] == 0:
                        dp[i][j] = dp[i-1][j] + dp[i][j-1]  
                    else:
                        dp[i][j] = 0  

        return dp[-1][-1] 

