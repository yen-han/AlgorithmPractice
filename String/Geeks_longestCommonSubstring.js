/*********************************************************************** 
Source Geeks for Geeks
Longest Common Substring in an Array of Strings
https://www.geeksforgeeks.org/longest-common-substring-array-strings/
1st 2023-06-19
2nd 2023-06-19

Example 1:
Input : grace graceful disgraceful gracefully
Output : grace

Example 2:
Input : sadness sad sadly
Output : sad

 * @param {string[]} strs
 * @return {string}
************************************************************************/

// 1st Attempt
// LOGIC: Using Brute force, compare the first string with the rest of the strings.
// Time : O(s)  | Space : O(1)
var longestCommonSubstring = function (strs) {
  let substring = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let pos = strs[i].indexOf(substring[0]);
    if (pos == -1) return "";
    j = 0;

    while (substring[j]) {
      if (strs[i][pos + j] == undefined || substring[j] != strs[i][pos + j]) {
        substring = substring.slice(0, j);
      }
      j++;
    }
  }
  return substring;
};

// 2nd Attempt
// LOGIC: Make substrings from the first string and check if it is present in other strings.
// Time : O(s^2)  | Space : O(s)
var longestCommonSubstring = function (strs) {
  let sub = strs[0];
  let len = sub.length;
  let result = "";
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      let temp = sub.substring(i, j);
      let notFound = false;
      for (k = 1; !notFound && k < strs.length; k++) {
        if (!strs[k].includes(temp)) {
          notFound = true;
        }
      }
      if (!notFound && result.length < temp.length) result = temp;
    }
  }
  return result;
};

// Test Cases
// let strs = ["grace", "graceful", "disgraceful", "gracefully"];
// let strs = ["geeksforgeeks", "geeks", "geek", "geezer"];
// let strs = ["sadness", "sad", "sadly"];
let strs = ["apple", "banana", "orange", "hike"];

console.log(longestCommonSubstring(strs));
