/*********************************************************************** 
Source LeetCode
300. Longest Increasing Subsequence
https://leetcode.com/problems/longest-increasing-subsequence/description/
1st 2024-07-07

Given an integer array nums, return the length of the longest strictly increasing .

Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4

Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4

Constraints:
    1 <= nums.length <= 2500
    -104 <= nums[i] <= 104

 * @param {number[]} nums
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Using array to store the longest increasing subsequence to the point
// Time : O(n^2) | Space: O(n)
var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length);
  dp.fill(1);
  for (let i = 1; i < nums.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log(dp);
  return Math.max(...dp);
};
