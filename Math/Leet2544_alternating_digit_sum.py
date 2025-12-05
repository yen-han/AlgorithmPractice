"""
Source LeetCode
2544. Alternating Digit Sum
https://leetcode.com/problems/alternating-digit-sum/description/
1st 2025-12-04

You are given a positive integer n. Each digit of n has a sign according to the following rules:

    The most significant digit is assigned a positive sign.
    Each other digit has an opposite sign to its adjacent digits.

Return the sum of all digits with their corresponding sign.

Example 1:
Input: n = 521
Output: 4

Example 2:
Input: n = 111
Output: 1

Constraints:
    1 <= n <= 109
"""

# 1st Attempt
# LOGIC: Calculate the alternating sum of the digits by iterating through the string representation of the number and adding or subtracting based on the index parity.
# Time: O(n) | Space: O(1)
class Solution:
    def alternateDigitSum(self, n: int) -> int:
        sum_value =0
        string_n = str(n)
        for i in range(len(string_n)):
            if i %2 ==0:
                sum_value += int(string_n[i])
            else: 
                sum_value -= int(string_n[i])
        return sum_value