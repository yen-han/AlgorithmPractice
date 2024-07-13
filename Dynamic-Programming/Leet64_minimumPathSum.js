/*********************************************************************** 
Source LeetCode
64. Minimum Path Sum
(https://leetcode.com/problems/unique-paths/)
1st 2024-07-13

Given a m x n grid filled with non-negative numbers, find a path 
from top left to bottom right, which minimizes the sum of all numbers 
along its path.

Note: You can only move either down or right at any point in time.

Example 1:
Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

Example 2:
Input: grid = [[1,2,3],[4,5,6]]
Output: 12

Constraints:
    m == grid.length
    n == grid[i].length
    1 <= m, n <= 200
    0 <= grid[i][j] <= 200

 * @param {number[][]} grid
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: using 2D array
// Time : O(m*n) Space : O(m*n)
var minPathSum = function (grid) {
  var dp = new Array(grid.length);
  for (var i = 0; i < dp.length; i++) {
    dp[i] = new Array(grid[0].length);
  }

  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[0].length; j++) {
      if (i == 0 && j == 0) dp[0][0] = grid[0][0];
      else if (i == 0) dp[i][j] = grid[i][j] + dp[i][j - 1];
      else if (j == 0) dp[i][j] = grid[i][j] + dp[i - 1][j];
      else {
        dp[i][j] = Math.min(
          (dp[i][j] = grid[i][j] + dp[i - 1][j]),
          grid[i][j] + dp[i][j - 1]
        );
      }
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
};
