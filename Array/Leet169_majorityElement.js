/*********************************************************************** 
Source LeetCode
169 Majority Element
(https://leetcode.com/problems/majority-element/)
1st 2022-07-04

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

 * @param {number[]} nums
 * @return {number}

Constraints:
    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109
************************************************************************/

// 1st Attempt
// LOGIC: Sort the array & count continuous number
// Time : O(n)  | Space : O(1)
var majorityElement = function(nums) { 
    if(nums.length === 1) return nums[0];
    nums.sort();
    let count = 1;
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] === nums[i+1]){
            count++;
        } else{
            count = 1;
        }
        if(count > nums.length/2){
            return nums[i];
        }
    }
};

// Input: nums = [3,2,3]
// Output: 3

Input: nums = [2,2,1,1,1,2,2]
// Output: 2
console.log(majorityElement(nums));