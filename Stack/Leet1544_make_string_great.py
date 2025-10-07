"""
Source LeetCode
1544. Make The String Great
https://leetcode.com/problems/make-the-string-great/description/
1st 2025-10-06

Given a string s of lower and upper case English letters.

A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
    0 <= i <= s.length - 2
    s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.
Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
Notice that an empty string is also good.

Example 1:
Input: s = "leEeetcode"
Output: "leetcode"

Example 2:
Input: s = "abBAcC"
Output: ""

Example 3:
Input: s = "s"
Output: "s"

Constraints:
    1 <= s.length <= 100
    s contains only lower and upper case English letters.
"""

# 1st Attempt
# LOGIC: using stack, check the ascii difference between the last character in stack and current character.
# Time : O(n)  | Space: O(n)
class Solution:
    def makeGood(self, s: str) -> str:
        stack = []
        for i in range(len(s)):
            if len(stack) == 0:
                stack.append(s[i])
            else:
                last_char = stack.pop() 
                if abs(ord(last_char) - ord(s[i])) != 32:
                    stack.append(last_char)
                    stack.append(s[i])
        join_str = "".join(stack)
        return join_str