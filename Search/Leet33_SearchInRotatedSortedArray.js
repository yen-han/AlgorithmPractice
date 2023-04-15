/*********************************************************************** 
Source LeetCode
33. Search in Rotated Sorted Array
https://leetcode.com/problems/search-in-rotated-sorted-array/description/
1st 2023-04-15

There is an integer array nums sorted in ascending order (with distinct 
    values).

Prior to being passed to your function, nums is possibly rotated at an 
unknown pivot index k (1 <= k < nums.length) such that the resulting array i
s [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] 
(0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 
3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, 
return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: find the lowest integer, then drop left/right of given array
// , afterwards Binary search
// Time : O(logn)  |  Space: O(1)
var search = function (nums, target) {
  //find the lowest
  let lowestIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[lowestIdx]) lowestIdx = i;
  }

  //first drop
  let start, end;
  if (nums[lowestIdx - 1] && target >= nums[0]) {
    start = 0;
    end = lowestIdx - 1;
  } else {
    start = lowestIdx;
    end = nums.length - 1;
  }

  //binary search
  while (start <= end) {
    let mid = Math.ceil((start + end) / 2);
    if (nums[mid] == target) return mid;
    else if (nums[mid] < target)
      // look on the right
      start = mid + 1;
    // look on the left
    else end = mid - 1;
  }
  return -1;
};
