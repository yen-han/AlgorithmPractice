/*********************************************************************** 
Source LeetCode
5. Longest Palindromic Substring
https://leetcode.com/problems/longest-palindromic-substring/description/
1st 2023-06-07
2nd 2023-06-08

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

// 2nd Attempt
// LOGIC: Using dynamic programming, check if the first & last letter matches
// and if the substring in between is a palindrome
// Time: O(n^2)  |  Memory: O(n^2)
var longestPalindrome = function (s) {
  let ans = [0, 0];
  // Make 2D array for dynamic programming
  var dp = new Array(s.length);

  for (var i = 0; i < dp.length; i++) {
    dp[i] = new Array(s.length);
  }
  // Length of 1
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }
  // Length of 2
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == s[i + 1]) {
      dp[i][i + 1] = true;
      ans = [i, i + 1];
    } else dp[i][i + 1] = false;
  }
  // > Lengt of 3
  for (let diff = 2; diff < s.length; diff++) {
    for (let i = 0; i < s.length - diff; i++) {
      let j = i + diff;
      if (s[i] == s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        ans = [i, j];
      } else dp[i][j] = false;
    }
  }
  return s.slice(ans[0], ans[1] + 1);
};
