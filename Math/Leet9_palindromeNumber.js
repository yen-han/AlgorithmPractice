/*********************************************************************** 
Source LeetCode
9. Palindrome Number
https://leetcode.com/problems/palindrome-number/description/
1st 2022-04-01

Given an integer x, return true if x is a
palindrome
, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, 
it becomes 121-. Therefore it is not a palindrome.

Constraints:
    -231 <= x <= 231 - 1

 * @param {number} x
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC: Convert number to string and compare each character from the start and the end
// Time : O(n)  | Space : O(n)
var isPalindrome = function (x) {
  let str = x.toString();
  let strLen = str.length;
  let palindrome = true;
  for (let i = 0; i < strLen / 2 && palindrome; i++) {
    str[i] === str[strLen - (i + 1)]
      ? (palindrome = true)
      : (palindrome = false);
  }
  return palindrome;
};
