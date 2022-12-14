/*********************************************************************** 
LeetCode
27 Remove Element
(https://leetcode.com/problems/remove-element/description/)
1st 2022-12-13

Given an integer array nums and an integer val, remove all occurrences of 
val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, 
you must instead have the result be placed in the first part of the array 
nums. More formally, if there are k elements after removing the duplicates, 
then the first k elements of nums should hold the final result. It does not 
matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying 
the input array in-place with O(1) extra memory.

 * @param {number[]} nums
 * @param {number} val
 * @return {number}

Constraints:
    0 <= nums.length <= 100
    0 <= nums[i] <= 50
    0 <= val <= 100
************************************************************************/

// 1st Attempt
// LOGIC: Loop the array to check for non-match element and re-arrange the order
// Time : O(n)  | Space : O(1)
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
