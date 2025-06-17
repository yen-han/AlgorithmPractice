"""
Source LeetCode
89. Gray Code
https://leetcode.com/problems/gray-code/description/
1st 2025-06-16

An n-bit gray code sequence is a sequence of 2n integers where:

    Every integer is in the inclusive range [0, 2n - 1],
    The first integer is 0,
    An integer appears no more than once in the sequence,
    The binary representation of every pair of adjacent integers differs by exactly one bit, and
    The binary representation of the first and last integers differs by exactly one bit.

Given an integer n, return any valid n-bit gray code sequence.

Example 1:
Input: n = 2
Output: [0,1,3,2]

Example 2:
Input: n = 1
Output: [0,1]

Constraints:
    1 <= n <= 16
"""

# 1st Attempt
# LOGIC: Using backtracking, try to find all possible gray codes by flipping bits.
# Time: O(2^n)  | Space: O(n)
class Solution:
    def grayCode(self, n: int) -> List[int]:
        visited = set()
        max_val = (2 ** n)
        res = []
        visited.add(0)
        res.append(0)

        def backtrack(curr):
            if len(visited) == max_val:
                return True

            for flip_bit in range(n):
                flipped = curr ^ (1 << flip_bit)
                if flipped not in visited and flipped < max_val:
                    visited.add(flipped)
                    res.append(flipped)
                    if backtrack(flipped):
                        return True
                    visited.remove(flipped)
                    res.pop()
            return False

        backtrack(0)

        return res
        