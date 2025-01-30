'''
Source LeetCode
189 Rotate Array
https://leetcode.com/problems/rotate-array/
3rd 2025-01-23

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
'''

# 3rd Attempt
# LOGIC: Get the remainder of k/len(nums) to get the actual number of rotations, 
# then pop the last element and insert it at the beginning of the list
# Time: O(n)  | Space: O(1)
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        times = k % len(nums)
        for i in range(times):
            last = nums.pop()
            nums.insert(0, last)