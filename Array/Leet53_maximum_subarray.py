"""
Source LeetCode
53 Maximum Subarray
https://leetcode.com/problems/maximum-subarray/
Date 2024-09-18

Given an integer array nums, find the contiguous subarray (containing 
at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.

 * @param {number[]} nums
 * @return {number}
"""

class Solution(object):
    def maxSubArray(self, nums):
        return self.max_subarray(nums, 0, len(nums) - 1)

    def max_crossing_sum(self, nums, left, mid, right):
        # Find max subarray sum crossing the midpoint

        # Max sum on the left of mid
        left_sum = float('-inf')
        curr_sum = 0
        for i in range(mid, left - 1, -1):
            curr_sum += nums[i]
            left_sum = max(left_sum, curr_sum)

        # Max sum on the right of mid
        right_sum = float('-inf')
        curr_sum = 0
        for i in range(mid + 1, right + 1):
            curr_sum += nums[i]
            right_sum = max(right_sum, curr_sum)

        # The maximum crossing sum is the left max sum + right max sum
        return left_sum + right_sum

    def max_subarray(self, nums, left, right):
        # Base case: if only one element
        if left == right:
            return nums[left]

        mid = (left + right) // 2

        # Recursively find the maximum subarray in the left half and right half
        left_max = self.max_subarray(nums, left, mid)
        right_max = self.max_subarray(nums, mid + 1, right)

        # Find the maximum subarray that crosses the midpoint
        cross_max = self.max_crossing_sum(nums, left, mid, right)

        # Return the maximum of the three
        return max(left_max, right_max, cross_max)