/*********************************************************************** 
Source LeetCode
227. Basic Calculator II
https://leetcode.com/problems/basic-calculator-ii/description/
1st 2023-04-17

Given a string s which represents an expression, evaluate this expression 
and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate 
results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates 
strings as mathematical expressions, such as eval().

Example 1:
Input: s = "3+2*2"
Output: 7

Example 2:
Input: s = " 3/2 "
Output: 1

Example 3:
Input: s = " 3+5 / 2 "
Output: 5

Constraints:
    1 <= s.length <= 3 * 105
    s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
    s represents a valid expression.
    All the integers in the expression are non-negative integers in the range [0, 231 - 1].
    The answer is guaranteed to fit in a 32-bit integer.

 * @param {string} s
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Using Stack, calculate the string with integer & operator
// Time : O(n)  |  Memory: O(1)
var calculate = function (s) {
  let stack = [];
  let temp = "",
    sign = "";
  let num;
  for (let i = 0; i <= s.length; i++) {
    // if space
    if (s[i] == " ") continue;
    // if number
    else if (!isNaN(s[i])) temp += s[i];
    // if operator
    else {
      num = parseInt(temp);
      switch (sign) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        case "/":
          stack.push(parseInt(stack.pop() / num, 10));
          break;
        default:
          stack.push(num);
          break;
      }
      sign = s[i];
      temp = "";
    }
  }
  let sum = 0;
  stack.forEach((value) => (sum += value));
  return sum;
};
