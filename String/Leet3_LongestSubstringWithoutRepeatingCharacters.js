/*********************************************************************** 
Source LeetCode
3. Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
1st 2023-05-25

Given a string s, find the length of the longest substring without 
repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Constraints:
    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

 * @param {string} s
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: using sliding window, keep track of start index and
// find longest substring without repeating characters
// Time: O(n)  |  Memory: O(n)
var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let longest = 0;
  let substring = new Set();

  for (let i = 0; i < s.length; i++) {
    if (substring.has(s[i])) {
      if (substring.size > longest) {
        longest = substring.size;
      }
      substring.clear();
      i = start;
      start += 1;
    } else {
      substring.add(s[i]);
    }
  }
  if (substring.size > longest) longest = substring.size;
  return longest;
};
