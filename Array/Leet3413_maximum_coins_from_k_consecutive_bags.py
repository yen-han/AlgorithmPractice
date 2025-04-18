'''
Source LeetCode
3413. Maximum Coins From K Consecutive Bags
https://leetcode.com/problems/maximum-coins-from-k-consecutive-bags/description/
1st 2025-04-18

There are an infinite amount of bags on a number line, one bag for each coordinate. 
Some of these bags contain coins.

You are given a 2D array coins, where coins[i] = [li, ri, ci] denotes that every bag 
from li to ri contains ci coins.

The segments that coins contain are non-overlapping.

You are also given an integer k.

Return the maximum amount of coins you can obtain by collecting k consecutive bags.

Example 1:
Input: coins = [[8,10,1],[1,3,2],[5,6,4]], k = 4
Output: 10

Example 2:
Input: coins = [[1,10,3]], k = 2
Output: 6

Constraints
    1 <= coins.length <= 105
    1 <= k <= 109
    coins[i] == [li, ri, ci]
    1 <= li <= ri <= 109
    1 <= ci <= 1000
    The given segments are non-overlapping.
'''

# 1st Attempt
# Memory Limit Exceeded for some cases
class Solution:
    def maximumCoins(self, coins: List[List[int]], k: int) -> int:
        coins.sort()
        max_end = max(end for _, end, _ in coins)

        flat_coins = [0] * (max_end+1)
        for i in range(len(coins)):
            s = coins[i][0]
            while s <= coins[i][1]:
                flat_coins[s] = coins[i][2]
                s += 1

        max_coins = sum(flat_coins[1:k])
        sum_k = sum(flat_coins[1:k])

        for start in range(1, len(flat_coins)-k + 1):
            end = start + k - 1 
            start_val = flat_coins[start] 
            sum_k += flat_coins[end] 
            max_coins = max(max_coins, sum_k)
            sum_k -= start_val 
        return max_coins