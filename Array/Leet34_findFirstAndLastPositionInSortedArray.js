/*********************************************************************** 
LeetCode
34. Find First and Last Position of Element in Sorted Array
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
1st 2023-08-07

Given an array of integers nums sorted in non-decreasing order, find 
the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

Constraints:
    0 <= nums.length <= 105
    -109 <= nums[i] <= 109
    nums is a non-decreasing array.
    -109 <= target <= 109

************************************************************************/

// 1st Attempt
// LOGIC: Check for edge cases, then find the index of the target
// Time : O(n)  | Space : O(1)
var searchRange = function (nums, target) {
  if (nums.length == 0 || target < nums[0] || target > nums[nums.length - 1])
    return [-1, -1];
  let idx = nums.indexOf(target);
  if (idx == -1) return [-1, -1];
  for (let i = nums.length - 1; i > idx; i--) {
    if (nums[i] == target) return [idx, i];
  }
  return [idx, idx];
};
