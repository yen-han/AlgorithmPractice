"""
Source LeetCode
3550. Smallest Index With Digit Sum Equal to Index
https://leetcode.com/problems/smallest-index-with-digit-sum-equal-to-index/description/
1st 2025-11-13

You are given an integer array nums.
Return the smallest index i such that the sum of the digits of nums[i] is equal to i.
If no such index exists, return -1.

Example 1:
Input: nums = [1,3,2]
Output: 2

Example 2:
Input: nums = [1,10,11]
Output: 1

Constraints:
    1 <= nums.length <= 100
    0 <= nums[i] <= 1000
"""

# 1st Attempt
# LOGIC: Iterate through the array and calculate the sum of digits for each element.
# Time: O(n)  | Space: O(1)
class Solution:
    def smallestIndex(self, nums: List[int]) -> int:
        for i in range(len(nums)):
            sum_of_digits = 0
            value = nums[i]
            while value > 0:
                sum_of_digits += value % 10
                value //= 10
            if (i == sum_of_digits):
                return i
        return -1