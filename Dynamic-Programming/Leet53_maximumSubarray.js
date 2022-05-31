/*********************************************************************** 
Source LeetCode
53 Maximum Subarray
(https://leetcode.com/problems/maximum-subarray/)
1st 2022-05-27

Given an integer array nums, find the contiguous subarray (containing 
at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Constraints:
    1 <= nums.length <= 105
    -104 <= nums[i] <= 104

 * @param {number[]} nums
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Sliding window
// Time : O(n) Space : O(1)
var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0];
    let max = -Number.MAX_VALUE;
    let sum = 0;
    for(let i = 0;i < nums.length; i++){
        // change the starting point
        sum = Math.max(nums[i], nums[i]+sum);
        // stop at ending point
        max = Math.max(max, sum);
    }
    return max;
};