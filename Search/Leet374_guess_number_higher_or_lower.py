"""
Source LeetCode
374. Guess Number Higher or Lower
https://leetcode.com/problems/guess-number-higher-or-lower/description/
1st 2025-11-13

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked (the number I picked stays the same throughout the game).

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

    -1: Your guess is higher than the number I picked (i.e. num > pick).
    1: Your guess is lower than the number I picked (i.e. num < pick).
    0: your guess is equal to the number I picked (i.e. num == pick).

Return the number that I picked.

Example 1:
Input: n = 10, pick = 6
Output: 6

Example 2:
Input: n = 1, pick = 1
Output: 1

Constraints:
    1 <= n <= 231 - 1
    1 <= pick <= n
"""

# 1st Attempt
# LOGIC: Using binary search to find the picked number.
# Time : O(logn)  |  Space: O(1)
class Solution:
    def binary(self, start:int, end:int) -> int:
        mid = (start+end) // 2
        result = guess(mid)
        if result == 0:
            return mid
        elif result == 1:
            return self.binary(mid+1,end)
        elif result == -1:
            return self.binary(start,mid-1)
    def guessNumber(self, n: int) -> int:
        return self.binary(1, n)
