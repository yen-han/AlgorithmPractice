/*********************************************************************** 
Source LeetCode
169 Find Peak Element
https://leetcode.com/problems/find-peak-element/description/
1st 2023-02-17

A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return 
its index. If the array contains multiple peaks, return the index to 
any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element 
is always considered to be strictly greater than a neighbor that is 
outside the array.

You must write an algorithm that runs in O(log n) time.

Example 1:
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the 
index number 2.

Example 2:
Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the 
peak element is 2, or index number 5 where the peak element is 6.

 * @param {number[]} nums
 * @return {number}

Constraints:
    1 <= nums.length <= 1000
    -231 <= nums[i] <= 231 - 1
    nums[i] != nums[i + 1] for all valid i.
************************************************************************/

// 1st Attempt
// LOGIC: Set before & after number to have cycle and compare
// Time : O(n)  | Space : O(1)
var findPeakElement = function (nums) {
  if (nums.length == 1) return 0;

  for (let i = 0; i < nums.length; i++) {
    let before, after;
    if (i == 0) before = nums[nums.length - 1];
    else before = nums[i - 1];
    if (i == nums.length - 1) after = nums[0];
    else after = nums[i + 1];
    if (before < nums[i] && nums[i] > after) return i;
  }
  return 0;
};
