/*********************************************************************** 
Source LeetCode
72. Edit Distance
https://leetcode.com/problems/edit-distance/description/
1st 2022-07-30

Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

    Insert a character
    Delete a character
    Replace a character

Example 1:
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

Constraints:
    0 <= word1.length, word2.length <= 500
    word1 and word2 consist of lowercase English letters.

 * @param {string} word1
 * @param {string} word2
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: using 2D array
// Time : O(m*n)  | Space : O(m*n)
var minDistance = function (word1, word2) {
  let dp = new Array(word1.length + 1);
  for (var i = 0; i < dp.length; i++) {
    dp[i] = new Array(word2.length + 1);
  }
  dp[0][0] = 0;
  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= word2.length; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[word1.length][word2.length];
};
