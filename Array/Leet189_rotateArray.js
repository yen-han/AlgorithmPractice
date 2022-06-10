/*********************************************************************** 
Source LeetCode
189 Rotate Array
(https://leetcode.com/problems/rotate-array/)
1st 2022-06-08
1st 2022-06-08

Given an array, rotate the array to the right by k steps,
where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.

Constraints
    1 <= nums.length <= 105
    -231 <= nums[i] <= 231 - 1
    0 <= k <= 105
************************************************************************/

// 1st Attempt
// LOGIC: Using temp array to store
// Time: O(n) Space: O(n)
var rotate = function(nums, k) {
    if(k > nums.length) k%=nums.length;
    let move = nums.length-k
    let temp = [];
    // Save array that goes to the end
    for(let i = 0;i < move; i++) {
        temp.push(nums[i]);
    }   
    // Bring remaining array to the front
    for(let i = 0;move < nums.length;i++, move++){
            nums[i] = nums[move]
    }
    // Assign the temp array to the end
    for(let j = 0 ;j < temp.length; k++, j++){
        nums[k] = temp[j]
    }
};

// 2nd Attempt
// LOGIC: Reverse array as a whole, reverse respectively.
// Time: O(n) Space: O(1)
var rotate = function(nums, k) {
    if(k > nums.length) k %= nums.length;
    nums.reverse();
    arrReverse(nums, 0, k-1)
    arrReverse(nums, k, nums.length-1)
};
function arrReverse(nums, start, end){
     while (start < end) {
         let temp = nums[start];
         nums[start] = nums[end];
         nums[end] = temp;
         start++;
         end--;
   }
}