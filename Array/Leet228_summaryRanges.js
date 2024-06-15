/*********************************************************************** 
Source LeetCode
228. Summary Ranges
https://leetcode.com/problems/summary-ranges/description/
1st 2024-06-15

You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers 
in the array exactly. That is, each element of nums is covered by exactly 
one of the ranges, and there is no integer x such that x is in one of the 
ranges but not in nums.

Each range [a,b] in the list should be output as:
    "a->b" if a != b
    "a" if a == b

Example 1:
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Constraints:
    0 <= nums.length <= 20
    -231 <= nums[i] <= 231 - 1
    All the values of nums are unique.
    nums is sorted in ascending order.

 * @param {number[]} nums
 * @return {string[]}
************************************************************************/

// 1st Attempt
// LOGIC : Using two pointer
// Time : O(n)  | Space : O(n)
var summaryRanges = function (nums) {
  let res = [];
  let start = nums[0];
  let next = nums[0];
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] !== undefined && next + 1 == nums[i]) {
      next = nums[i];
    } else {
      let temp = "";
      if (start == next) {
        temp += start;
      } else {
        temp += start + "->" + next;
      }
      start = nums[i];
      next = nums[i];
      res.push(temp);
    }
  }
  return res;
};
