"""
Source LeetCode
473. Matchsticks to Square
https://leetcode.com/problems/matchsticks-to-square/description/
1st 2025-10-09

You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. 
You want to use all the matchsticks to make one square. You should not break any stick, 
but you can link them up, and each matchstick must be used exactly one time.

Return true if you can make this square and false otherwise.

Example 1:
Input: matchsticks = [1,1,2,2,2]
Output: true

Example 2:
Input: matchsticks = [3,3,3,3,4]
Output: false

Constraints:
    1 <= matchsticks.length <= 15
    1 <= matchsticks[i] <= 108
"""

class Solution:
    def makesquare(self, matchsticks: List[int]) -> bool:
        sum_val = sum(matchsticks)
        if sum_val % 4 != 0:
            return False
        side = int(sum_val / 4)

        square = [0] *4
        matchsticks.sort(reverse=True)

        def backtrack(j):
            if j == len(matchsticks):
                print(square)
                return all(k == side for k in square)
            for i in range(4):
                if square[i] + matchsticks[j] <= side:
                    square[i] += matchsticks[j]
                    if backtrack(j+1):
                        return True
                    square[i]-= matchsticks[j]
            return False
        
        res = backtrack(0)
        return res