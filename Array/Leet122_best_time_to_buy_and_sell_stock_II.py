'''
Source LeetCode
122. Best Time to Buy and Sell Stock II
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
1st: 2025-01-23

You are given an integer array prices where prices[i] is the price of a given 
stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold 
at most one share of the stock at any time. However, you can buy it then 
immediately sell it on the same day.

Find and return the maximum profit you can achieve.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 7

Example 2:
Input: prices = [1,2,3,4,5]
Output: 4

Constraints:
    1 <= prices.length <= 3 * 104
    0 <= prices[i] <= 104
'''
# 1st Attempt
# LOGIC: If the current price is greater than the previous price, add the difference to the max profit
# Time : O(n)   | Space: O(1)
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max = 0 
        start = prices[0]

        for i in range(0, len(prices)):
            if start < prices[i]: 
                max = max + prices[i] - start
            start = prices[i]

        return max 