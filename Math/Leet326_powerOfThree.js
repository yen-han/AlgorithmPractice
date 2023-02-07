/*********************************************************************** 
Source LeetCode
326 Power of Three
https://leetcode.com/problems/power-of-three/description/
1st 2023-02-06

Given an integer n, return true if it is a power of three. Otherwise, 
return false.

An integer n is a power of three, if there exists an integer x such that 
n == 3x.

 * @param {number} n
 * @return {boolean}

Constraints
    -231 <= n <= 231 - 1
************************************************************************/

// 1st Attempt
// LOGIC: Recursion - Divide n by 3 and check the remainder
// Time: -  |  Space: O(1)
var isPowerOfThree = function (n) {
  if (n <= 0) {
    return false;
  } else if (n === 1) {
    return true;
  } else if (n % 3 !== 0) {
    return false;
  } else {
    return isPowerOfThree(n / 3);
  }
};
