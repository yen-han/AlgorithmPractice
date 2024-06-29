/*********************************************************************** 
Source LeetCode
70 Climbing Stairs
(https://leetcode.com/problems/climbing-stairs/)
1st 2022-05-26
2nd 2024-06-29
3rd 2024-06-29

You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways 
can you climb to the top?

Constraints:
    1 <= n <= 45

 * @param {number} n
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Store ways to climb stairs in the array
var climbStairs = function (n) {
  if (n < 2) return 1;
  let ways = [];
  ways[1] = 1;
  ways[2] = 2;
  for (let i = 3; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }
  return ways[n];
};

// 2nd Attempt
// LOGIC: Store ways to climb stairs in the array
// Time : O(n) | Space: O(n)
var climbStairs = function (n) {
  let fibonacci = [];
  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      fibonacci[i] = 1;
    } else {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
  }
  return fibonacci[n];
};

// 3rd Attempt
// LOGIC: using recursion - Time Limit Exceeded
// Time : O(n^2) | Space: O(n^2)
var climbStairs = function (n) {
  if (n < 2) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

// TEST
// let n = 2
// Output: 2
console.log(climbStairs(n));
