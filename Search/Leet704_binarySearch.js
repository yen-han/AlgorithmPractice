/*********************************************************************** 
Source LeetCode
704 Binary Search
(https://leetcode.com/problems/binary-search/)
1st 2022-04-25

Given an array of integers nums which is sorted in ascending order, and 
an integer target, write a function to search target in nums. If target 
exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Recursion 
var search = function(nums, target) {
    let start = 0, end = nums.length-1;
         
    while (start <= end){
        let mid=Math.floor((start + end)/2);

        if (nums[mid]===target) return mid;
 
        else if (nums[mid] < target)
            // look on the right
             start = mid + 1;
        else
            // look on the left
             end = mid - 1;
    }
    return -1;
};
// TEST
let nums = [-1,0,3,5,9,12]; let target = 9;
console.log(nums, target);