"""
Source LeetCode
2439. Minimize Maximum of Array
https://leetcode.com/problems/minimize-maximum-of-array/description/
1st 2025-07-31

You are given a 0-indexed array nums comprising of n non-negative integers.

In one operation, you must:

    Choose an integer i such that 1 <= i < n and nums[i] > 0.
    Decrease nums[i] by 1.
    Increase nums[i - 1] by 1.

Return the minimum possible value of the maximum integer of nums after performing any number of operations.

Example 1:
Input: nums = [3,7,1,6]
Output: 5

Example 2:
Input: nums = [10,1]
Output: 10

Constraints:
    n == nums.length
    2 <= n <= 105
    0 <= nums[i] <= 109
"""

# 1st Attempt
# LOGIC: Iterate through the array, maintaining a prefix sum to calculate the average at each step.
# Time: O(n)  | Space: O(n)
class Solution:
    def minimizeArrayValue(self, nums: List[int]) -> int:
        max_value = 0
        prefix_sum = 0
        
        for i in range(len(nums)):
            prefix_sum += nums[i]
            avg = (prefix_sum + i) // (i + 1) 
            if avg > max_value:
                max_value = avg

        return max_value
