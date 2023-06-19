/*********************************************************************** 
Source LeetCode
17. Letter Combinations of a Phone Number
https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
1st 2023-06-18

Given a string containing digits from 2-9 inclusive, return all possible 
letter combinations that the number could represent. Return the answer 
in any order.

A mapping of digits to letters (just like on the telephone buttons) is 
given below. Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Constraints:
    0 <= digits.length <= 4
    digits[i] is a digit in the range ['2', '9'].

 * @param {string} digits
 * @return {string[]}
************************************************************************/

// 1st Attempt
// LOGIC: Using backtracking & Hash Map, add each letter to the string
// and then backtrack
// Time: O(3^N × 4^M)  |  Memory: O(n)
var letterCombinations = function (digits) {
  let result = [];
  if (digits.length == 0) return result;

  const letter = new Map();
  letter.set("2", ["a", "b", "c"]);
  letter.set("3", ["d", "e", "f"]);
  letter.set("4", ["g", "h", "i"]);
  letter.set("5", ["j", "k", "l"]);
  letter.set("6", ["m", "n", "o"]);
  letter.set("7", ["p", "q", "r", "s"]);
  letter.set("8", ["t", "u", "v"]);
  letter.set("9", ["w", "x", "y", "z"]);

  function backtrack(str, index) {
    if (str.length == digits.length) {
      result.push(str);
    } else {
      const chars = letter.get(digits[index]);
      for (let char of chars) {
        backtrack(str + char, index + 1);
      }
    }
  }

  backtrack("", 0);
  return result;
};
