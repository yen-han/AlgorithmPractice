/*********************************************************************** 
Source LeetCode
8. String to Integer (atoi)
https://leetcode.com/problems/string-to-integer-atoi/description/
1st 2023-06-14

Implement the myAtoi(string s) function, which converts a string to 
a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

    Read in and ignore any leading whitespace.
    Check if the next character (if not already at the end of the string) 
    is '-' or '+'. Read this character in if it is either. This determines 
    if the final result is negative or positive respectively. Assume the 
    result is positive if neither is present.
    Read in next the characters until the next non-digit character or the 
    end of the input is reached. The rest of the string is ignored.
    Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). 
    If no digits were read, then the integer is 0. Change the sign as 
    necessary (from step 2).
    If the integer is out of the 32-bit signed integer range [-231, 231 - 1],
    then clamp the integer so that it remains in the range. 
    Specifically, integers less than -231 should be clamped to -231,
    and integers greater than 231 - 1 should be clamped to 231 - 1.
    Return the integer as the final result.

Note:
    Only the space character ' ' is considered a whitespace character.
    Do not ignore any characters other than the leading whitespace or
    the rest of the string after the digits.

Constraints:
    0 <= s.length <= 200
    s consists of English letters (lower-case and upper-case), 
    digits (0-9), ' ', '+', '-', and '.'.

 * @param {string} s
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Starting from the longest substring, check if it is a palindrome
// Time: O(s)  |  Memory: O(1)
var myAtoi = function (s) {
  const reg = new RegExp("[0-9]");
  let res = 0;
  let count = 0;
  let whitespace = false;
  let sign = 1;
  for (let i = 0; !whitespace && i < s.length; i++) {
    if (s[i] == " ") {
      count++;
    } else whitespace = true;
  }

  if (s[count] == "-") {
    sign = -1;
    count++;
  } else if (s[count] == "+") {
    count++;
  }

  for (let i = count; i < s.length; i++) {
    if (reg.test(s[i])) {
      if (sign == 1 && res * 10 + s[i].charCodeAt(0) - 48 > Math.pow(2, 31) - 1)
        res = Math.pow(2, 31) - 1;
      else if (
        sign == -1 &&
        res * 10 + s[i].charCodeAt(0) - 48 > Math.pow(2, 31)
      )
        res = Math.pow(2, 31);
      else res = res * 10 + s[i].charCodeAt(0) - 48;
    } else return res * sign;
  }
  return res * sign;
};
