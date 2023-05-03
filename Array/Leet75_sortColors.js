/*********************************************************************** 
Source LeetCode
75. Sort Colors
https://leetcode.com/problems/sort-colors/description/
1st 2023-05-02

Given an array nums with n objects colored red, white, or blue, sort 
them in-place so that objects of the same color are adjacent, with the 
colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, 
and blue, respectively.

You must solve this problem without using the library's sort function.

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.

Constraints:
    n == nums.length
    1 <= n <= 300
    nums[i] is either 0, 1, or 2.
************************************************************************/

// 1st Attempt
// LOGIC: Using constraints, count colors & overwrite the array.
// Time : O(n)  | Space : O(1)
var sortColors = function (nums) {
  let countZero = 0;
  let countOne = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) countZero++;
    else if (nums[i] == 1) countOne++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (countZero != 0) {
      nums[i] = 0;
      countZero--;
    } else if (countOne != 0) {
      nums[i] = 1;
      countOne--;
    } else {
      nums[i] = 2;
    }
  }
};
