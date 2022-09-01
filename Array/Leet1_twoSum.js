/*********************************************************************** 
From LeetCode
1 Two Sum
(https://leetcode.com/problems/two-sum/)
Date 2022-03-31

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

// Logic : Check if target-numbers[i] includes in the remaining array. 
// Time  : O(n)  | Space : O(1)
let twoSum = function(numbers, target) {
    for(let i = 0; i < numbers.length ; i++) {
        let diff = numbers.indexOf(target - numbers[i]);
        // Not the same element & have matched integer in the remaining array
        if(diff !== i &&  diff !== -1) {
            return [i, diff];
        }
    }
    return [];
};

// TEST
// Output: [0,1]
console.log(twoSum([2,7,11,15], 9));
// Output: [1,2]
console.log(twoSum([3,2,4], 6));
// Output: [0,1]
console.log(twoSum([3,3], 6));
// Output: []
console.log(twoSum([1,3], 6));
