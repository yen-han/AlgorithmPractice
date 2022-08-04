/*********************************************************************** 
Source LeetCode
121 Best Time to Buy and Sell Stock
(https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
1st 2022-08-03

You are given an array prices where prices[i] is the price of a given 
stock on the ith day.

You want to maximize your profit by choosing a single day to buy one 
stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you 
cannot achieve any profit, return 0.

Constraints:
    1 <= prices.length <= 105
    0 <= prices[i] <= 104

 * @param {number[]} prices
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: As looping through, find the minimum price and maximum profit
// Time: O(n) Space: O(1)
var maxProfit = function(prices) {
    let profit = 0;
    let min = prices[0];
    for(let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        profit = Math.max(profit, prices[i] - min);
    }
    return profit;
};