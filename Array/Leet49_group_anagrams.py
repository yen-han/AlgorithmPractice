"""
Source LeetCode
49. Group Anagrams
https://leetcode.com/problems/group-anagrams/description/
1st: 2025-01-12

Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.
"""

# 1st Attempt
# LOGIC: Sort the string and use it as key in hash map for anagrams.
# Time : O(m*n)  |  Space: O(m*n)
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hash_map = {}

        for string in strs:
            sorted_string = ''.join(sorted(string))
            if sorted_string not in hash_map:
                hash_map[sorted_string] = []
            hash_map[sorted_string].append(string)
        return list(hash_map.values())