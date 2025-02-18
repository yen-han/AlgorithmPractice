"""
Source LeetCode
58. Length of Last Word
https:#leetcode.com/problems/length-of-last-word/description/
3rd 2025-02-18

Given a string s consisting of words and spaces, return the length 
of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5

Example 2:
Input: s = "luffy is still joyboy"
Output: 6


Constraints:
    1 <= s.length <= 104
    s consists of only English letters and spaces ' '.
    There will be at least one word in s.
"""

# 3rd Attempt
# LOGIC: Using split and length method
# Time: O(n)  |  Memory: O(1)
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        splitted = s.split()
        return len(splitted[-1])