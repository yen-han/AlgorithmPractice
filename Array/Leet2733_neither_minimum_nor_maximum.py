'''
Source LeetCode
2733. Neither Minimum nor Maximum
https://leetcode.com/problems/neither-minimum-nor-maximum/description/
1st 2026-01-15

Given an integer array nums containing distinct positive integers, find and return any number 
from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.

Return the selected integer.

Example 1:
Input: nums = [3,2,1,4]
Output: 2

Example 2:
Input: nums = [1,2]
Output: -1

Constraints
    1 <= nums.length <= 100
    1 <= nums[i] <= 100
    All values in nums are distinct
'''
# 1st Attempt 
# LOGIC: Find the min and max values in the array and return the first value that is neither    
# Time: O(n)  | Space: O(1)
class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        if len(nums) < 2: 
            return -1

        min_val = min(nums)
        max_val = max(nums)
        for i in range(len(nums)):
            if(nums[i]!= min_val and nums[i]!=max_val):
                return nums[i]
        return -1
