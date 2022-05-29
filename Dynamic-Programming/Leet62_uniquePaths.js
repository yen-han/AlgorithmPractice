/*********************************************************************** 
Source LeetCode
62 Unique Paths
(https://leetcode.com/problems/unique-paths/)
1st 2022-05-27
2nd 2022-05-27
3rd 2022-05-28

There is a robot on an m x n grid. The robot is initially located at 
the top-left corner (i.e., grid[0][0]). The robot tries to move to the 
bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move 
either down or right at any point in time.

Given the two integers m and n, return the number of possible unique 
paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or 
equal to 2 * 109.

Constraints:
    1 <= m, n <= 100

 * @param {number} m
 * @param {number} n
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: using 2D array
// Time : O(n^2) Space : O(m*n)
var uniquePaths = function(m, n) {
    // 2D array filled with 1
    let grid = Array(m).fill(Array(n).fill(1));
    
    // Go through each element starting (1, 1)
    for(let row = 1;row < m; row++){
        for(let col = 1;col < n; col++){
                            // left           + up
            grid[row][col] = grid[row-1][col] + grid[row][col-1];
        }
    }
    return grid[m-1][n-1]
};
// 2nd Attempt
// LOGIC: using 2 arrays
// Time : O(n^2) Space : O(n)
var uniquePaths = function(m, n) {
    // 2 arrays filled with 1
    let curr = Array(n).fill(1);
    let next = Array(n).fill(1);
    
    // Go through each element starting (1, 1)
        for(let row = 1;row < m; row++){
            for(let col = 1;col < n; col++){
                            // left  + up
                next[col] = curr[col] + next[col-1];
            }
            curr=next;
        }
    return curr[n-1];
};
// 3rd Attempt
// LOGIC: using 1 array
// Time : O(n^2) Space : O(n)
var uniquePaths = function(m, n) {
    // array filled with 1
    let next = Array(n).fill(1);
    // Go through each element starting (1, 1)
        for(let row = 1;row < m; row++){
            for(let col = 1;col < n; col++){
                let temp = next[col];
                            // up  + left
                next[col] = temp + next[col-1];
            }
        }
    return next[n-1];
};
