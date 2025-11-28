"""
Source LeetCode
1025. Divisor Game
https://leetcode.com/problems/minimum-time-visiting-all-points/description/
1st 2025-11-27

Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:

    Choosing any integer x with 0 < x < n and n % x == 0.
    Replacing the number n on the chalkboard with n - x.

Also, if a player cannot make a move, they lose the game.

Return true if and only if Alice wins the game, assuming both players play optimally.

Example 1:
Input: n = 2
Output: true

Example 2:
Input: n = 3
Output: false

Constraints:
    1 <= n <= 1000
"""

# 1st Attempt
# LOGIC: If n is even, Alice can always win by making n odd for Bob. If n is odd, Bob can always win by making n even for Alice.
# Time: O(1) | Space: O(1)
class Solution:
    def divisorGame(self, n: int) -> bool:
        if n % 2 == 0:
            return True
        return False