/*********************************************************************** 
Source LeetCode
97. Interleaving String
https://leetcode.com/problems/interleaving-string/description/
1st 2024-07-13

Given strings s1, s2, and s3, find whether s3 is formed by an interleaving 
of s1 and s2.

An interleaving of two strings s and t is a configuration where s and 
t are divided into n and m

respectively, such that:

    s = s1 + s2 + ... + sn
    t = t1 + t2 + ... + tm
    |n - m| <= 1
    The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...

Note: a + b is the concatenation of strings a and b.

Constraints:
    0 <= s1.length, s2.length <= 100
    0 <= s3.length <= 200
    s1, s2, and s3 consist of lowercase English letters.

 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC: Using 2D array to store the interleaving of s1 and s2
// Time : O(n*m) | Space : O(n*m)
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length != s3.length) return false;
  let dp = new Array(s1.length + 1)
    .fill(false)
    .map(() => new Array(s2.length + 1).fill(false));

  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = true;
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] && s2[j - 1] === s3[i + j - 1];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1];
      } else {
        dp[i][j] =
          (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
          (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
      }
    }
  }

  return dp[s1.length][s2.length];
};
