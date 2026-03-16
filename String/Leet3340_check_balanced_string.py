"""
Source LeetCode
3340. Check Balanced String
https://leetcode.com/problems/check-balanced-string/
1st 2025-12-08

You are given a string num consisting of only digits. A string of digits is called balanced 
if the sum of the digits at even indices is equal to the sum of digits at odd indices.

Return true if num is balanced, otherwise return false.

Example 1:
Input: num = "1234"
Output: false

Example 2:
Input: num = "24123"
Output: true

Constraints:
    2 <= num.length <= 100
    num consists of digits only
"""

# 1st Attempt
# LOGIC: Iterate through the string and calculate the sum of digits at even and odd indices. Finally, compare the two sums.
# Time : O(n)  | Space: O(1)
class Solution:
    def isBalanced(self, num: str) -> bool:
        even = 0
        odd = 0
        for i in range(len(num)):
            if i % 2 == 0:
                even +=int(num[i])
            else: 
                odd +=int(num[i])
        return even == odd