/*********************************************************************** 
Source LeetCode
35 Search Insert Position
(https://leetcode.com/problems/search-insert-position/)
Date 2022-04-03

Given a sorted array of distinct integers and a target value, return 
the index if the target is found. If not, return the index where it would 
be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
************************************************************************/

var searchInsert = function(nums, target) {
    if(nums.indexOf(target)!==-1){
        return nums.indexOf(target);
    } 
    const lessThan = (element) => element > target;
    return nums.findIndex(lessThan)!==-1? nums.findIndex(lessThan): nums.length; 
    
};

// TEST
// Output: 2
console.log(searchInsert([1,3,5,6], 5));
// Output: 1
console.log(searchInsert([1,3,5,6], 2));
// Output: 4
console.log(searchInsert([1,3,5,6], 7));
