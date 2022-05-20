/*********************************************************************** 
Source LeetCode
53 Maximum Subarray
(https://leetcode.com/problems/maximum-subarray/)
Date 2022-04-04

Given an integer array nums, find the contiguous subarray (containing 
at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.

 * @param {number[]} nums
 * @return {number}
************************************************************************/

var maxSubArray = function(nums) {
    let max = nums[0];
    let sum;
    for(let i = 0; i < nums.length; i++) {
        for(let k = 0, sum = 0; k < nums.length-i; k++) {
            sum += nums[i+k];
            if(sum > max){
            max = sum;
            }
        }
    }
    return max;
};

// TEST
// Output: 6
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
// Output: 1
console.log(maxSubArray([1]));
// Output: 23
console.log(maxSubArray([5,4,-1,7,8]));
