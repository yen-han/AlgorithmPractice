"""
Source LeetCode
647. Palindromic Substrings
https://leetcode.com/problems/palindromic-substrings/description/
1st 2025-10-16

Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

Example 1:
Input: s = "abc"
Output: 3

Example 2:
Input: s = "aaa"
Output: 6

Constraints:
    1 <= s.length <= 1000
    s consists of lowercase English letters.
"""
# 1st Attempt
# LOGIC: Use brute force to check all substrings and count palindromic ones.
# Time : O(m*n)  | Space: O(m*n)
class Solution:
    def checkPalindromic(self, s:str) -> bool:
        start = 0
        end = len(s)-1
        while start < end:
            if s[start]!= s[end]:
                return False
            start += 1
            end -= 1
        return True
    def countSubstrings(self, s: str) -> int:
        count = 0
        for i in range(len(s)):
            for j in range(i+1, len(s)+1):
                sub_str = s[i:j]
                if len(sub_str) == 1:
                    count += 1
                else:
                    if self.checkPalindromic(sub_str):
                        count += 1
        return count
