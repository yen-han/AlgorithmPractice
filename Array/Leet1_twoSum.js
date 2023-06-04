/*********************************************************************** 
From LeetCode
1. Two Sum
https://leetcode.com/problems/two-sum/description/
1st 2022-03-31 (JavaScript)
2nd 2023-05-10 (Java)
3rd 2023-05-11 (Java)
4th 2023-06-03 (JavaScript)

Given an array of integers numbers and an integer target, return indices of 
the two numbers such that they add up to target. You may assume that each 
input would have exactly one solution, and you may not use the same element 
twice. You can return the answer in any order.

Constraints:
    2 <= nums.length <= 10^4
    -10^9 <= nums[i] <= 10^9
    -10^9 <= target <= 10^9
    Only one valid answer exists.

 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
************************************************************************/

// 1st Attempt
// Logic : Check if target-numbers[i] includes in the remaining array.
// Time  : O(n^2)  | Space : O(1)
let twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let diff = numbers.indexOf(target - numbers[i]);
    // Not the same element & have matched integer in the remaining array
    if (diff !== i && diff !== -1) {
      return [i, diff];
    }
  }
  return [];
};

// 4th Attempt
// LOGIC: Using Hash Map, create map with key-value pair of (number, index)
//        Check if the difference between target and number is in the map.
// Notes: Hash Map reduces accessing time
// Time  : O(n)  | Space : O(n)
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff) && i != map.get(diff)) {
      return [i, map.get(diff)];
    }
  }
};

// // TEST
// // Output: [0,1]
// console.log(twoSum([2, 7, 11, 15], 9));
// // Output: [1,2]
// console.log(twoSum([3, 2, 4], 6));
// // Output: [0,1]
// console.log(twoSum([3, 3], 6));
// // Output: []
// console.log(twoSum([1, 3], 6));
