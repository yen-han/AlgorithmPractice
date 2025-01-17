"""
Source LeetCode
202 Happy Number
https://leetcode.com/problems/happy-number/description/
2nd 2025-01-12

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum 
    of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), 
    or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.
Constraints:
    1 <= n <= 231 - 1

 * @param {number} n
 * @return {boolean}
"""

# 2nd Attempt
# LOGIC: Using set to check for cycle
class Solution:
    def isHappy(self, n: int) -> bool:
        my_set = set() 
        while n != 1 and n not in my_set:
            temp_number = 0
            my_set.add(n) 
            while n > 0:
                last = n % 10
                n = n // 10 
                temp_number = (last * last) + temp_number
            n = temp_number
           
        return n == 1