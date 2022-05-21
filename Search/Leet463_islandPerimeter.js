/*********************************************************************** 
Source LeetCode
463 Island Perimeter
(https://leetcode.com/problems/island-perimeter/)
1st 2022-05-12

You are given row x col grid representing a map where grid[i][j] = 1 
represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The 
grid is completely surrounded by water, and there is exactly one island 
(i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected 
to the water around the island. One cell is a square with side length 
1. The grid is rectangular, width and height don't exceed 100. 
Determine the perimeter of the island.

 * @param {number[][]} grid
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Check for every side(up, down, right,left)
// Time : O(n)
var islandPerimeter = function(grid) {
    let strip = 0;
    let row = grid.length;
    let col = grid[0].length;
    for(let j = 0; j < row; j++) { // rows
        for(let i = 0;i < col; i++) { // colums
            if(grid[j][i]) {
                strip += 4;
                if(i > 0 && grid[j][i-1]) strip--;
                if(j > 0 && grid[j-1][i]) strip--;
                if(i < col-1 && grid[j][i+1]) strip--;
                if(j < row-1 && grid[j+1][i]) strip--;
            }
        }
    }
    return strip;
};