/*********************************************************************** 
Source LeetCode
231 Power of Two
(https://leetcode.com/problems/power-of-two/)
1st 2022-04-25

Given an integer n, return true if it is a power of two. Otherwise, 
return false.
An integer n is a power of two, if there exists an integer x such that n == 2x.

 * @param {number} n
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC: Recursion
// Time: O(logn)  |  Space: O(1)
var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  } else if (n === 1) {
    return true;
  } else if (n % 2 !== 0) {
    return false;
  } else {
    return isPowerOfTwo(n / 2);
  }
};
