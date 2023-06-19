/*********************************************************************** 
Source Geeks for Geeks
Longest Common Substring in an Array of Strings
https://www.geeksforgeeks.org/longest-common-substring-array-strings/
1st 2023-06-19

Example 1:
Input : grace graceful disgraceful gracefully
Output : grace

Example 2:
Input : sadness sad sadly
Output : sad

 * @param {string[]} strs
 * @return {string}
************************************************************************/

// Time : O(s)  | Space : O(1)
var longestCommonSubstring = function (strs) {
  let substring = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let pos = strs[i].indexOf(substring[0]);
    if (pos == -1) return "";
    j = 0;
    pos = 0;
    while (substring[j]) {
      if (strs[i][pos + j] == undefined || substring[j] != strs[i][pos + j]) {
        substring = substring.slice(0, j);
      }
      j++;
    }
  }
  return substring;
};

// Test Cases
// let strs = ["grace", "graceful", "disgraceful", "gracefully"];
// let strs = ["geeksforgeeks", "geeks", "geek", "geezer"];
// let strs = ["sadness", "sad", "sadly"];
let strs = ["apple", "banana", "orange"];

console.log(longestCommonSubstring(strs));
