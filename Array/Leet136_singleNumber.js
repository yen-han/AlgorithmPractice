/*********************************************************************** 
Source LeetCode
136 Single Number
(https://leetcode.com/problems/single-number/)
1st 2022-08-25

Given a non-empty array of integers nums, every element appears twice 
except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use 
only constant extra space.

 * @param {number[]} nums
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC : Count integers in nums using map and check for single number
// Time : O(n)  | Space : O(n)
var singleNumber = function(nums) {
    let map = {};
    for(let i = 0;i < nums.length; i++){
        if(map[nums[i]]) map[nums[i]]++;
        else map[nums[i]] = 1;
    }
    for (let m in map) {
        if(map[m] === 1) return m;
    }
};