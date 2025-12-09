"""
Source LeetCode
2716. Minimize String Length
https://leetcode.com/problems/minimize-string-length/description/
1st 2025-12-08

Given a string s, you have two types of operation:

    Choose an index i in the string, and let c be the character in position i. 
    Delete the closest occurrence of c to the left of i (if exists).

    Choose an index i in the string, and let c be the character in position i. 
    Delete the closest occurrence of c to the right of i (if exists).

Your task is to minimize the length of s by performing the above operations zero or more times.

Return an integer denoting the length of the minimized string.

Example 1:
Input: s = "aaabc"
Output: 3

Example 2:
Input: s = "cbbd"
Output: 3

Example 3:
Input: s = "baadccab"
Output: 4

Constraints:
    1 <= s.length <= 100
    s contains only lowercase English letters
"""

# 1st Attempt
# LOGIC: Using a hash set to track distinct characters in substrings of size three.
# Time : O(n)  | Space: O(1)
class Solution:
    def minimizedStringLength(self, s: str) -> int:
        return len(set(s))