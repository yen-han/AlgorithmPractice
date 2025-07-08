"""
Source LeetCode
1876. Substrings of Size Three with Distinct Characters
https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/
1st 2025-07-07

A string is good if there are no repeated characters.
Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
A substring is a contiguous sequence of characters in a string.

Example 1:
Input: s = "xyzzaz"
Output: 1

Example 2:
Input: s = "aababcabc"
Output: 4

Constraints:
    1 <= s.length <= 100
    s​​​​​​ consists of lowercase English letters.
"""

# 1st Attempt
# LOGIC: Using a hash set to track distinct characters in substrings of size three.
# Time : O(n)  | Space: O(1)
class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        res = 0

        for i in range (len(s)-2):
            hash_set = set()
            j = i
            while j <= i + 2:
                if s[j] in hash_set:
                    break
                hash_set.add(s[j])
                j += 1
            if len(hash_set) == 3:
                res += 1

        return res