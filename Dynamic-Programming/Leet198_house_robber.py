"""
Source LeetCode
198. House Robber
https://leetcode.com/problems/house-robber/description/
1st 2025-03-18

You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, the only constraint stopping 
you from robbing each of them is that adjacent houses have security systems 
connected and it will automatically contact the police if two adjacent houses 
were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.

Example 1:
Input: nums = [1,2,3,1]
Output: 4

Example 2:
Input: nums = [2,7,9,3,1]
Output: 12

Constraints:
    1 <= nums.length <= 100
    0 <= nums[i] <= 400
"""

# 1st Attempt
# LOGIC: using array, store the maximum amount of money that can be robbed till that house.
# Time : O(n)  | Space : O(n)
class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
                
        if n == 1:
            return nums[0]
        
        dp = [0] * n
        
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1]) 
        
        for i in range(2, n):
            dp[i] = max(dp[i-1], nums[i] + dp[i-2])

        return dp[n-1] 