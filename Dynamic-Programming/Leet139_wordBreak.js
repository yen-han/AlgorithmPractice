/*********************************************************************** 
Source LeetCode
139. Word Break
https://leetcode.com/problems/word-break/description/
1st 2024-07-05

Given a string s and a dictionary of strings wordDict, return true if 
s can be segmented into a space-separated sequence of one or more 
dictionary words.

Note that the same word in the dictionary may be reused multiple times 
in the segmentation.

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

Constraints:
    1 <= s.length <= 300
    1 <= wordDict.length <= 1000
    1 <= wordDict[i].length <= 20
    s and wordDict[i] consist of only lowercase English letters.
    All the strings of wordDict are unique.

 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC:
var wordBreak = function (s, wordDict) {
  if (!wordDict || wordDict.length == 0) return false;
  var dp = new Array(s.length + 1);
  dp.fill(false);
  dp[0] = true;
  for (var i = 1; i <= s.length; i++) {
    for (var j = 0; j < i; j++) {
      if (dp[j] && wordDict.indexOf(s.substring(j, i)) >= 0) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};
