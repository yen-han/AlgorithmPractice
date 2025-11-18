"""
Source LeetCode
848. Shifting Letters
https://leetcode.com/problems/shifting-letters/description/
1st 2025-11-17

You are given a string s of lowercase English letters and an integer array shifts of the same length.

Call the shift() of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a').
    For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.
Now for each shifts[i] = x, we want to shift the first i + 1 letters of s, x times.

Return the final string after all such shifts to s are applied.

Example 1:
Input: s = "abc", shifts = [3,5,9]
Output: "rpl"

Example 2:
Input: s = "aaa", shifts = [1,2,3]
Output: "gfd"

Constraints:
    1 <= s.length <= 10^5
    s consists of lowercase English letters.
    shifts.length == s.length
    0 <= shifts[i] <= 10^9
"""

# 1st Attempt
# LOGIC: Calculate cumulative shifts from the end to the start, then apply to each character.
# Time : O(n)  | Space: O(n)
class Solution:
    def shiftingLetters(self, s: str, shifts: List[int]) -> str:
        add = 0
        for i in range(len(shifts)-1, -1, -1):
            if i == len(shifts)-1:
                add = shifts[i] 
            else: 
                add += shifts[i] 
                shifts[i] = add
        result = ""
        for i in range(len(s)):
            original = ord(s[i]) - ord('a')
            calculated = (original + shifts[i]) % 26
            result += chr(calculated + ord('a'))
        return result