/*********************************************************************** 
Source LeetCode
383. Ransom Note
https://leetcode.com/problems/ransom-note/description/
1st 2024-06-13

Given two strings ransomNote and magazine, return true if ransomNote 
can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:
    1 <= ransomNote.length, magazine.length <= 105
    ransomNote and magazine consist of lowercase English letters.

 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC: Make hashmap with magazine and count the letter from rnasomNote
// Time: O(n)  |  Memory: O(n)
var canConstruct = function (ransomNote, magazine) {
  const hashmap = new Map();
  for (let i = 0; i < magazine.length; i++) {
    if (!hashmap.has(magazine[i])) {
      hashmap.set(magazine[i], 1);
    } else {
      let next = hashmap.get(magazine[i]) + 1;
      hashmap.set(magazine[i], next);
    }
  }

  for (let j = 0; j < ransomNote.length; j++) {
    if (hashmap.has(ransomNote[j]) && hashmap.get(ransomNote[j]) > 0) {
      let minus = hashmap.get(ransomNote[j]) - 1;
      hashmap.set(ransomNote[j], minus);
    } else return false;
  }
  return true;
};
