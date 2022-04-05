/*********************************************************************** 
Source LeetCode
217 Contains Duplicate
(https://leetcode.com/problems/contains-duplicate/)
1st : 2022-04-02
2nd : 2022-04-04

Given an integer array nums, return true if any value appears at least 
twice in the array, and return false if every element is distinct.

 * @param {number[]} nums
 * @return {boolean}
************************************************************************/

// 1st Attempt: Go through every index to check for duplicate
//  var containsDuplicate = function(nums) {
//     for(let i = 0; i< nums.length-1; i++) {
//         for(let j = i+1; j < nums.length; j++) {
//             if(nums[i] == nums[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };

// 2nd Attempt
// LOGIC: Create Set to remove duplicate and compare length with original array
var containsDuplicate = function(nums) {
    return nums.length > 1 && new Set(nums).size !== nums.length;
}

// TEST
// Output: true
console.log(containsDuplicate([1,2,3,1]));
// Output: false
console.log(containsDuplicate([1,2,3,4]));
// Output: true
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));