/*********************************************************************** 
Source LeetCode
561 Array Partition I
(https://leetcode.com/problems/array-partition-i/)
1st 2022-05-15

Given an integer array nums of 2n integers, group these integers into 
n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, 
    bi) for all i is maximized. Return the maximized sum.

 * @param {number[]} nums
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Sort the array in ascending order and pick the second largest in every pair
var arrayPairSum = function(nums) {
    let min;
    //sorting: selection sort
    for(let i = 0; i < nums.length - 1; i++){
        min = i;
        for(let j = i+1; j < nums.length; j++){
            if(nums[j] < nums[min]){
                //swap
                let temp = nums[min];
                nums[min] = nums[j];
                nums[j] = temp;
            }
        }
    }
    //pick second largest from the pair
    let pair = (nums.length + 1) / 2;
    let maxSum = 0;
    for(let i = nums.length - 1, count = 0; count < pair && i > 0; count++, i -= 2){
        maxSum += nums[i-1];
    }
    return maxSum;
};