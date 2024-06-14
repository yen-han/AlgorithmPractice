/*********************************************************************** 
Source LeetCode
392. Is Subsequence
https://leetcode.com/problems/is-subsequence/description/
1st 2024-06-13

Given two strings s and t, return true if s is a subsequence of t, or 
false otherwise.
A subsequence of a string is a new string that is formed from the original 
string by deleting some (can be none) of the characters without disturbing
the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:
    0 <= s.length <= 100
    0 <= t.length <= 104
    s and t consist only of lowercase English letters.

 * @param {string} s
 * @param {string} t
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC: make pointer to s string and check all alphabets are included in t string
// Time: O(n)  |  Space: O(1)
var isSubsequence = function (s, t) {
  let sTracker = 0;
  for (let i = 0; sTracker < s.length && i < t.length; i++) {
    if (t[i] == s[sTracker]) {
      sTracker++;
    }
  }
  if (sTracker == s.length) return true;
  return false;
};
