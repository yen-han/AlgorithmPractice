/*********************************************************************** 
Source LeetCode
14 Longest Common Prefix
(https://leetcode.com/problems/longest-common-prefix/description/)
1st 2023-01-16

Write a function to find the longest common prefix string amongst an 
array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

 * @param {string[]} strs
 * @return {string}

Constraints:
    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.
************************************************************************/

// 1st Attempt
// LOGIC: Make the first string as prefix and compare with other strings.
// Slice it down if there is a mismatch.
// Time : O(s)  | Space : O(1)
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    let done = false;
    while (!done && prefix[j]) {
      if (prefix[j] != strs[i][j]) {
        prefix = prefix.slice(0, j);
        done = true;
      }
      j++;
    }
  }
  return prefix;
};
