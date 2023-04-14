/*********************************************************************** 
Source LeetCode
78. Subsets
(https://leetcode.com/problems/subsets/description/)
1st 2023-04-13

Given an integer array nums of unique elements, return all possible
subsets(the power set).

The solution set must not contain duplicate subsets. Return the solution 
in any order.

* @param {number[]} nums
 * @return {number[][]}
************************************************************************/

// 1st Attempt
var subsets = function (nums) {
  let res = [[]];
  for (let i = 0; i < nums.length; ++i) {
    let length = res.length;
    for (let j = 0; j < length; ++j) {
      res.push([...res[j], nums[i]]);
    }
  }
  return res;
};
