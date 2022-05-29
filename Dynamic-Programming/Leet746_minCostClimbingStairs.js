/*********************************************************************** 
Source LeetCode
746 Min Cost Climbing Stairs
(https://leetcode.com/problems/min-cost-climbing-stairs/)
1st 2022-05-27

You are given an integer array cost where cost[i] is the cost of ith 
step on a staircase. Once you pay the cost, you can either climb one or 
two steps.
You can either start from the step with index 0, or the step with index 1.
Return the minimum cost to reach the top of the floor.

Constraints:
    2 <= cost.length <= 1000
    0 <= cost[i] <= 999

 * @param {number[]} cost
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Update cost array with minimum cost by adding up
var minCostClimbingStairs = function(cost) {
    for (let i = 2; i < cost.length; i++) {
        cost[i] = cost[i] + Math.min(cost[i-2], cost[i-1]);
    }
    return Math.min(cost[cost.length - 2], cost[cost.length - 1]);
};