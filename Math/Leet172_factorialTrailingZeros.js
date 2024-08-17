/*********************************************************************** 
Source LeetCode
172. Factorial Trailing Zeroes
https://leetcode.com/problems/factorial-trailing-zeroes/description/
1st 2024-08-16

Given an integer n, return the number of trailing zeroes in n!.
Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

Example 1:
Input: n = 3
Output: 0
Explanation: 3! = 6, no trailing zero.

Example 2:
Input: n = 5
Output: 1
Explanation: 5! = 120, one trailing zero.

Example 3:
Input: n = 0
Output: 0

 * @param {number} n
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC:
var trailingZeroes = function (n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
};
