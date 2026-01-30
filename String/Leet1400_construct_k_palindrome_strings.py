"""
Source LeetCode
1400. Construct K Palindrome Strings
https://leetcode.com/problems/construct-k-palindrome-strings/description/
1st 2026-01-29

Given a string s and an integer k, return true if you can use all the characters 
in s to construct non-empty k or false otherwise.

Example 1:
Input: s = "annabelle", k = 2
Output: true

Example 2:
Input: s = "leetcode", k = 3
Output: false

Constraints:
    1 <= s.length <= 105
    s consists of lowercase English letters.
    1 <= k <= 105
"""

# 1st Attempt
# LOGIC: Count the number of characters with odd frequency.
# Time : O(n)  | Space: O(n)
class Solution:
    def canConstruct(self, s: str, k: int) -> bool:
        # early exit
        if k == len(s):
            return True
        if k > len(s):
            return False

        dictionary ={}
        for i in range(len(s)):
            if(dictionary.get(s[i])):
                dictionary[s[i]] = dictionary.get(s[i]) + 1
            else:
                dictionary[s[i]] = 1

        count =0
        for key, value in dictionary.items():
            if value % 2 ==1:
                count += 1
        if k >= count:
            return True
        return False
