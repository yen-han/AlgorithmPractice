/*********************************************************************** 
Source LeetCode
58. Length of Last Word
https://leetcode.com/problems/length-of-last-word/description/
1st 2024-06-12

Given a string s consisting of words and spaces, return the length of 
the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

Constraints:
    1 <= s.length <= 104
    s consists of only English letters and spaces ' '.
    There will be at least one word in s.


 * @param {string} digits
 * @return {string[]}
************************************************************************/

// 1st Attempt
// LOGIC: Brute force, search last word from end of string
// Time: O(n)  |  Memory: O(1)
var lengthOfLastWord = function (s) {
  let start = 0,
    end = -1;
  for (i = s.length - 1; start == 0 && i >= 0; i--) {
    if (s[i] != " " && end == -1) {
      end = i;
    } else if (end != -1 && s[i] == " ") {
      start = i + 1;
    }
  }
  return end - start + 1;
};
