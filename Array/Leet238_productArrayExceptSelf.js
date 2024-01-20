/*********************************************************************** 
Source LeetCode
238. Product of Array Except Self
https://leetcode.com/problems/product-of-array-except-self/description/
1st 2024-01-20
2nd 2024-01-20

Given an integer array nums, return an array answer such that answer[i] 
is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 
32-bit integer.

You must write an algorithm that runs in O(n) time and without using 
the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

 * @param {number[]} nums
 * @return {number[]}

Constraints
    1 <= nums.length <= 105
    -231 <= nums[i] <= 231 - 1
    0 <= k <= 105
************************************************************************/

// 1st Attempt
// LOGIC: Brute force - Time limit exceeded
// Time: O(n^2) | Space: O(n)
var productExceptSelf = function (nums) {
  // Set up return array filled with 1
  let answer = Array(nums.length).fill(1);

  // Loop through nums to multiply except nums[i]
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (j != i) {
        answer[j] *= nums[i];
      }
    }
  }
  return answer;
};
// 2nd Attempt
// LOGIC: prefix, suffix method
// Time: O(n) | Space: O(n)
var productExceptSelf = function (nums) {
  let answer = [];
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = suffix;
    suffix *= nums[i];
  }
  let prefix = 1;
  for (let j = 0; j < nums.length; j++) {
    answer[j] *= prefix;
    prefix *= nums[j];
  }
  return answer;
};
