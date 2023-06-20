/*********************************************************************** 
From LeetCode
15. 3Sum
https://leetcode.com/problems/3sum/description/
1st 2023-06-19

Given an integer array nums, return all the triplets [nums[i], nums[j], 
nums[k]] such that i != j, i != k, and j != k,
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Constraints:
    3 <= nums.length <= 3000
    -105 <= nums[i] <= 105

 * @param {number[]} nums
 * @return {number[][]}
************************************************************************/

// 1st Attempt
// LOGIC: after sorting, use 2 pointers to find the sum of 3 numbers
// Time: O(n^2)  |  Memory: O(n)
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  let target = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum == target) {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j] == nums[j + 1]) j++;
        while (nums[k] == nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum < target) j++;
      else k--;
    }
  }
  return result;
};
