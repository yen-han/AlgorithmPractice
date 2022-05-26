/*********************************************************************** 
Source LeetCode
70 Climbing Stairs
(https://leetcode.com/problems/climbing-stairs/)
1st 2022-05-26

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
var climbStairs = function(n) {
    if(n < 2) return 1;
    let ways = [];
    ways[1] = 1;
    ways[2] = 2;
    for(let i = 3;i <= n; i++){
        ways[i] = ways[i-1] + ways[i-2];
        
    }
    return ways[n];
};

// TEST
// let n = 2
// Output: 2
console.log(climbStairs(n));