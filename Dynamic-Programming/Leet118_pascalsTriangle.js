/*********************************************************************** 
Source LeetCode
118 Pascal's Triangle
(https://leetcode.com/problems/pascals-triangle/)
1st 2022-07-26

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly 
above it as shown:
        1
      1   1
    1   2   1
  1  3   3   1
1  4   6   4  1

Constraints:
    1 <= numRows <= 30

 * @param {number} numRows
 * @return {number[][]}
************************************************************************/

// 1st Attempt
// LOGIC: Go through every row with the calculated number
var generate = function(numRows) {
    let res = [];
    for(let i = 0;i < numRows; i++){
        let row = [];
        for(let j = 0; j < i+1; j++){
            if(j === 0 || j === i) {
                row.push(1);
            }
            else {
                row.push(res[i-1][j-1]+res[i-1][j]);
            }
        }
        res.push(row);
    }
    return res;
};