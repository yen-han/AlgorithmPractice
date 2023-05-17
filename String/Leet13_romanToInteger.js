/*********************************************************************** 
Source LeetCode
860 Lemonade Change
(https://leetcode.com/problems/lemonade-change/)
1st 2022-06-03 (JavaScript)
2nd 2022-06-03 (JavaScript)
3rd 2023-05-16 (Java)
4th 2023-05-16 (Java)

Roman numerals are represented by seven different symbols: I, V, X, L, 
C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added 
together. 12 is written as XII, which is simply X + II. The number 27 is 
written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is
written as IV. Because the one is before the five we subtract it making four.
The same principle applies to the number nine, which is written as IX. 
There are six instances where subtraction is used:
    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Constraints:
    1 <= s.length <= 15
    s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
    It is guaranteed that s is a valid roman numeral in the range [1, 3999].

 * @param {string} s
 * @return {number}
************************************************************************/

// 2nd Attempt
// LOGIC: if the next index is from largest to smallest, add value
// if the next index is from smallest to largest, subtract value
// Time O(n) Space O(1)
var romanToInt = function (s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let integer = 0;
  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] >= roman[s[i + 1]] || s[i + 1] === undefined) {
      integer += roman[s[i]];
    } else {
      integer += roman[s[i + 1]] - roman[s[i]];
      i++;
    }
  }
  return integer;
};
// 1st Attempt
// LOGIC: 2D array to add every value, then subtract for special case
var romanToInt = function (s) {
  let roman = [
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ];
  let integer = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < roman.length; j++) {
      if (s[i] === roman[j][0]) {
        integer += roman[j][1];
      }
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] === "I" && s[i + 1] === "V") ||
      (s[i] === "I" && s[i + 1] === "X")
    ) {
      integer -= 2;
      i++;
    } else if (
      (s[i] === "X" && s[i + 1] === "L") ||
      (s[i] === "X" && s[i + 1] === "C")
    ) {
      integer -= 20;
      i++;
    } else if (
      (s[i] === "C" && s[i + 1] === "D") ||
      (s[i] === "C" && s[i + 1] === "M")
    ) {
      integer -= 200;
      i++;
    }
  }
  return integer;
};

console.log(romanToInt("IV")); // 4
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); //1994
