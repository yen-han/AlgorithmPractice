"""
Source LeetCode
290. Word Pattern
https://leetcode.com/problems/word-pattern/description/
1st 2024-12-22

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection 
between a letter in pattern and a non-empty word in s. Specifically:

    Each letter in pattern maps to exactly one unique word in s.
    Each unique word in s maps to exactly one letter in pattern.
    No two letters map to the same word, and no two words map to 
    the same letter.


Example 1:
Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:
Input: pattern = "abba", s = "dog cat cat fish"
Output: false


Constraints:
    1 <= pattern.length <= 300
    pattern contains only lower-case English letters.
    1 <= s.length <= 3000
    s contains only lowercase English letters and spaces ' '.
    s does not contain any leading or trailing spaces.
    All the words in s are separated by a single space.
"""

# 1st Attempt
# LOGIC: checks if a given pattern of characters in pattern matches the corresponding words in s by using a hash map
# Time : O(n)  | Space: O(n)
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        hash_map = {}
        s = s.split()
        if len(s) != len(pattern):
            return False
        for i in range(len(s)):
            # if one alphabet -> 2 different mapping
            if s[i] in hash_map and hash_map[s[i]] != pattern[i]:
                return False
            # if two different alphabet -> one mapping
            elif s[i] not in hash_map and pattern[i] in hash_map.values():
                return False
            else:
                hash_map[s[i]] = pattern[i]
        return True