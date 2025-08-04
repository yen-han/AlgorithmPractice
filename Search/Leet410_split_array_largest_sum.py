"""
Source LeetCode
410. Split Array Largest Sum
https://leetcode.com/problems/split-array-largest-sum/description/
1st 2025-08-04

Given an integer array nums and an integer k, split nums into k non-empty subarrays such 
that the largest sum of any subarray is minimized.

Return the minimized largest sum of the split.
A subarray is a contiguous part of the array.

Example 1:
Input: nums = [7,2,5,10,8], k = 2
Output: 18

Example 2:
Input: nums = [1,2,3,4,5], k = 2
Output: 9

Constraints:
    1 <= nums.length <= 1000
    0 <= nums[i] <= 106
    1 <= k <= min(50, nums.length)
"""

# 1st Attempt
# # LOGIC: Use binary search to find the minimum largest sum of sub-arrays.
# Time: O(n log(sum(nums)))  | Space: O(1)
class Solution:
    def splitArray(self, nums: List[int], k: int) -> int:
        low, high = max(nums), sum(nums)
        ans = high
        while low <= high:
            mid = (low + high) // 2
            if self.is_feasible(nums, mid, k):
                ans = mid
                high = mid - 1
            else:
                low = mid + 1
        return ans
    
    def is_feasible(self, nums, max_sum, k):
        count = 1
        current_sum = 0
        for num in nums:
            current_sum += num
            if current_sum > max_sum:
                count += 1
                current_sum = num
                if count > k:
                    return False
        return True