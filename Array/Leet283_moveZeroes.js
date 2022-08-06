/*********************************************************************** 
Source LeetCode
283 Move Zeroes
(https://leetcode.com/problems/move-zeroes/)
1st 2022-08-02
1st 2022-08-04

Given an integer array nums, move all 0's to the end of it while 
maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Constraints:
    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
************************************************************************/

// 1st Attempt
// LOGIC: Count 0, move non-zero integer to the front and fill the 0
// Time: O(n) Space: O(1)
var moveZeroes = function(nums) {
    let count = 0;
    // Count for 0 in nums
    for(let i = 0;i < nums.length; i++){
        if(nums[i] == 0) count++;
    }
    // If 0 exists in the array
    if(count > 0){
        // Move non-zero integer to the front
        for(let i = 0, j = 0;i < nums.length; i++){
            if(nums[i] != 0){
                nums[j] = nums[i];
                j++;
            }
        }
        // Fill the 0 fromm the end
        for(let i = nums.length-1, j = 0;j < count; i--, j++){
            nums[i] = 0
        }
    }
};

// 2nd Attempt
// LOGIC: If nums[i] is not 0, it moves to the front and replaces with 0
// Time: O(n) Space: O(1)
var moveZeroes = function(nums) {
    for(let i = 0, j = 0;i < nums.length; i++){
        if(nums[i]){
            if(i != j){
                nums[j] = nums[i]
                nums[i] = 0
            }
            j++
        }
    }

};