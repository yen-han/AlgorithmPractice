"""
Source LeetCode
213. House Robber II
https://leetcode.com/problems/house-robber-ii/description/
1st 2025-10-02

You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed. All houses at this place 
are arranged in a circle. That means the first house is the neighbor of the last one. 
Meanwhile, adjacent houses have a security system connected, and it will automatically 
contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.

Example 1:
Input: nums = [2,3,2]
Output: 3

Example 2:
Input: nums = [1,2,3,1]
Output: 4

Constraints:
    1 <= nums.length <= 100
    0 <= nums[i] <= 1000
"""

# 1st Attempt
# LOGIC: using dynamic programming, rob not adjacent houses considering circular arrangement.
# Time : O(n)  | Space : O(n)
class Solution:
    def rob(self, nums: List[int]) -> int:
        def dp_cal(nums: List[int]) -> int:
            dp = [0] * len(nums)

            dp[0] = nums[0]
            dp[1] = max(nums[0], nums[1])

            for i in range(2, len(dp)):
                dp[i]= max(dp[i-2]+nums[i], dp[i-1])
            return dp[len(dp)-1]

        without_last_house = dp_cal(nums[:len(nums)-1])
        without_first_house = dp_cal(nums[1:])

        return max(without_last_house, without_first_house)