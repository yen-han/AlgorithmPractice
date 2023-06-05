/*********************************************************************** 
Source LeetCode
3. Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
1st 2023-05-25
1st 2023-06-05

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
// LOGIC: using Set, keep track of start index and
// find longest substring without repeating characters
// Time: O(n^2)  |  Memory: O(n)
var lengthOfLongestSubstring = function (s) {
  let substring = new Set();
  let longest = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (!substring.has(s[i])) {
      substring.add(s[i]);
    } else {
      if (substring.size > longest) longest = substring.size;
      substring.clear();
      i = start++;
    }
  }
  return substring.size > longest ? substring.size : longest;
};

// 2nd Attempt
// LOGIC: using sliding window & Set, going through each character
// When duplicate is found, move start index to the next index of duplicate
// Time: O(n^2)  |  Memory: O(n)
var lengthOfLongestSubstring = function (s) {
  let substring = new Set();
  let longest = 0;
  let start = 0;
  let end = 0;
  while (end < s.length) {
    while (substring.has(s[end])) {
      substring.delete(s[start]);
      start++;
    }
    substring.add(s[end]);

    longest = Math.max(end - start + 1, longest);
    end++;
  }
  return longest;
};
