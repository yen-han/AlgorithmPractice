/*********************************************************************** 
Source LeetCode
26 Remove Duplicates from Sorted Array
(https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
1st 2022-07-04

Given an integer array nums sorted in non-decreasing order, remove the 
duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some 
languages, you must instead have the result be placed in the first part 
of the array nums. More formally, if there are k elements after removing 
the duplicates, then the first k elements of nums should hold the final 
result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by 
modifying the input array in-place with O(1) extra memory.

 * @param {number[]} nums
 * @return {number}

Constraints:
    1 <= nums.length <= 3 * 104
    -100 <= nums[i] <= 100
    nums is sorted in non-decreasing order.
************************************************************************/

// 1st Attempt
// LOGIC: Loop the array to check for duplicate & 
// replace non-duplicate element in a correct position
// Time : O(n)  | Space : O(1)
var removeDuplicates = function(nums) {
    let pos = 1;
    //loop to check for duplicate
    for(let i = 0;i < nums.length - 1; i++){
        if(nums[i] !== nums[i+1]){
            //change element in the correct position
            nums[pos] = nums[i+1];
            pos++;
        }
    }
    return pos;
};