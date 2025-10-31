'''
Source LeetCode
3349. Adjacent Increasing Subarrays Detection I
https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/
1st 2025-10-30

Given an array nums of n integers and an integer k, determine whether there exist two adjacent

of length k such that both subarrays are strictly increasing. Specifically, check if there are two 
subarrays starting at indices a and b (a < b), where:

    Both subarrays nums[a..a + k - 1] and nums[b..b + k - 1] are strictly increasing.
    The subarrays must be adjacent, meaning b = a + k.

Return true if it is possible to find two such subarrays, and false otherwise.

Example 1:
Input: nums = [2,5,7,8,9,2,3,4,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,2,3,4,4,4,4,5,6,7], k = 5
Output: false

Constraints
    2 <= nums.length <= 100
    1 < 2 * k <= nums.length
    -1000 <= nums[i] <= 1000
'''

# 1st Attempt
# LOGIC: Using two pointer, check for every subarray of length k if both are strictly increasing
# Time: O(n)  | Space: O(1)
class Solution:
    def strictlyIncreasing(self, arr) -> bool:
        for i in range(1, len(arr)):
            if arr[i-1] >= arr[i]:
                return False
        return True

    def hasIncreasingSubarrays(self, nums: List[int], k: int) -> bool:
        for i in range(len(nums) - 2*k + 1):
            next_idx = i + k
            if self.strictlyIncreasing(nums[i:i+k]) and self.strictlyIncreasing(nums[next_idx:next_idx+k]):
                return True

        return False
