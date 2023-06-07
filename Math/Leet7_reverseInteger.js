/*********************************************************************** 
Source LeetCode
7. Reverse Integer
https://leetcode.com/problems/reverse-integer/description/
1st 2023-06-07

Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer 
range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers 
(signed or unsigned).

Constraints:
    231 <= x <= 231 - 1

 * @param {number} x
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Reversing the number while checking if it is within the range
// Time : O(n)  | Space : O(1)
var reverse = function (x) {
  let result = 0;
  let negative = x > 0 ? false : true;
  x = Math.abs(x);

  while (x > 0) {
    let num = x % 10;
    x = Math.floor(x / 10);
    result *= 10;
    // Check if enough room for adding num
    if (result + num > Math.pow(2, 31)) return 0;
    result += num;
  }
  return negative ? -result : result;
};
