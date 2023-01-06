/*********************************************************************** 
Source LeetCode
268 Missing Number
(https://leetcode.com/problems/missing-number/description/)
1st : 2023-01-05
2nd : 2023-01-05
3rd : 2023-01-05

Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in 
the range [0,3]. 2 is the missing number in the range since it does not 
appear in nums.

 * @param {number[]} nums
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC : Make array with -1 & change the value to 1 when the index of
// nums matches, then check for -1, which is the missing number
// Time : O(n)  | Space : O(n)
var missingNumber = function (nums) {
  let arr = new Array(nums.length).fill(-1);
  let found = true;
  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]] = 1;
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === -1) {
      return j;
    } else {
      found = false;
    }
  }
  if (!found) return arr.length;
};

// 2nd Attempt
// LOGIC: If the match(starts 0) is found, add 1 to match,
// if not found, return the missing number.
// Time: O(n2) | Space: O(1)
let match = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === match) {
    match++;
    i = -1;
  } else if (i == nums.length - 1) return match;
}

// 3rd Attempt
// LOGIC: Sum all the number until the size of nums, then subtract
// elements in the array.
// Time: O(n) | Space: O(1)
var missingNumber = function (nums) {
  let n = nums.length;
  let sum = (n * (n + 1)) / 2;

  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];
  }
  return sum;
};
