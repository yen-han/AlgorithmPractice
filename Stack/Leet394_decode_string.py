"""
Source LeetCode
394. Decode String
https://leetcode.com/problems/decode-string/description/
1st 2025-11-20

Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Constraints:
    1 <= s.length <= 30
    s consists of lowercase English letters, digits, and square brackets '[]'.
    s is guaranteed to be a valid input.
    All the integers in s are in the range [1, 300].
"""

# 1st Attempt
# LOGIC: Using stack, check for parenthesis to pop and calculate string.
# Time : O(n)  | Space: O(n)
class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        num_value = 0
        str_value = ""
        for i in range(len(s)):
            if s[i].isdigit():
                num_value = num_value * 10 + int(s[i])
            elif s[i].isalpha():
                str_value += s[i]
            elif s[i] == '[':            
                stack.append(num_value)
                num_value = 0
                stack.append(str_value)
                str_value = ""
            elif s[i] == ']':
                str_pop = stack.pop()
                num_pop = stack.pop()
                str_value = str_pop + (str_value * num_pop)
        return str_value