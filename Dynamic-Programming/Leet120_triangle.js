/*********************************************************************** 
Source LeetCode
120. Triangle
https://leetcode.com/problems/triangle/submissions/
1st 2024-07-07

Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. 
More formally, if you are on index i on the current row, you may move 
to either index i or index i + 1 on the next row.

Example 1:

Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 
(underlined above).

Example 2:

Input: triangle = [[-10]]
Output: -10

Constraints:
    1 <= triangle.length <= 200
    triangle[0].length == 1
    triangle[i].length == triangle[i - 1].length + 1
    -104 <= triangle[i][j] <= 104

 * @param {number[][]} triangle
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC:
var minimumTotal = function (triangle) {
  if (triangle.length == 1) return triangle[0][0];

  for (let row = 1; row < triangle.length; row++) {
    for (let j = 0; j < triangle[row].length; j++) {
      if (j == 0) triangle[row][j] = triangle[row - 1][j] + triangle[row][j];
      else if (j == triangle[row].length - 1)
        triangle[row][j] = triangle[row - 1][j - 1] + triangle[row][j];
      else {
        triangle[row][j] = Math.min(
          triangle[row - 1][j - 1] + triangle[row][j],
          triangle[row - 1][j] + triangle[row][j]
        );
      }
    }
  }

  let min = triangle[triangle.length - 1][0];
  triangle[triangle.length - 1].forEach((element) => {
    if (min > element) min = element;
  });
  return min;
};
