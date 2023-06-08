/*********************************************************************** 
Source LeetCode
5. Longest Palindromic Substring
https://leetcode.com/problems/longest-palindromic-substring/description/
1st 2023-06-07

Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Constraints:
    1 <= s.length <= 1000
    s consist of only digits and English letters.

 * @param {string} s
 * @return {string}
************************************************************************/

// 1st Attempt
// LOGIC: Starting from the longest substring, check if it is a palindrome
// Time: O(n^3)  |  Memory: O(1)
var longestPalindrome = function (s) {
  for (let length = s.length; length > 0; length--) {
    for (let start = 0; start < s.length - length; start++) {
      if (validPalindrome(start, start + length, s))
        return s.slice(start, start + length + 1);
    }
  }
  return s[0];
};

function validPalindrome(start, end, s) {
  while (start < end) {
    if (s[start] != s[end]) return false;
    else {
      start++;
      end--;
    }
  }
  return true;
}
