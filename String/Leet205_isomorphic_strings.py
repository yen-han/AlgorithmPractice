"""
Source LeetCode
205. Isomorphic Strings
https://leetcode.com/problems/isomorphic-strings/description/
1st 2024-12-12

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can 
be replaced to get t.

All occurrences of a character must be replaced with another 
character while preserving the order of characters. No two characters 
may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Constraints:
    1 <= s.length <= 5 * 104
    t.length == s.length
    s and t consist of any valid ascii character.
"""

# 1st Attempt
# LOGIC: check if a alphabet mapped with 2 different alphabets or 2 different alphabets mapped with same alphabet
# Time : O(n)  | Space: O(n)
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        hash_map = {}
        for i in range(len(s)):
            # if one alphabet -> 2 different mapping
            if s[i] in hash_map and hash_map[s[i]] != t[i]:
                return False
            # if two different alphabet -> one mapping
            elif s[i] not in hash_map and t[i] in hash_map.values():
                return False
            else:
                hash_map[s[i]] = t[i]
        return True