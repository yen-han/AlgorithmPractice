"""
Source LeetCode
2680. Maximum OR
https://leetcode.com/problems/maximum-or/description/
1st 2025-9-18

You are given a 0-indexed integer array nums of length n and an integer k. 
In an operation, you can choose an element and multiply it by 2.

Return the maximum possible value of nums[0] | nums[1] | ... | nums[n - 1] 
that can be obtained after applying the operation on nums at most k times.

Note that a | b denotes the bitwise or between two integers a and b.

Example 1:
Input: nums = [12,9], k = 1
Output: 30

Example 2:
Input: nums = [8,1,2], k = 2
Output: 35

Constraints:
    1 <= nums.length <= 105
    1 <= nums[i] <= 109
    1 <= k <= 15
"""

# 1st Attempt
# LOGIC: Brute Force - Time Limit Exceeded
# Time: O(2^n)  | Space: O(1)
class Solution:
    def maximumOr(self, nums: List[int], k: int) -> int:
        max_value = 0

        for j in range(len(nums)):
            res=0
            for i in range(j):
                res |= nums[i]
            res |= (nums[j] << k)
            for i in range(j+1,len(nums)):
                res |= nums[i]
            max_value = max(res, max_value)

        return max_value
    
# 2nd Attempt
# LOGIC: prefix, suffix calculation first and add multiple of 2^k to each element
# Time: O(n)  | Space: O(n)
class Solution:
    def maximumOr(self, nums: List[int], k: int) -> int:
        max_value=0
        prefix = [0 for _ in range(len(nums)+1)]
        for i in range(len(nums)):
            prefix[i+1] = prefix[i]|nums[i]
            
        suffix = [0 for i in range(len(nums)+1)]
        for i in range(len(nums)-1, -1,-1):
            suffix[i] = suffix[i+1]|nums[i]

        for i in range(len(nums)):
            res = prefix[i]|(nums[i]<<k)|suffix[i+1]
            max_value = max(res, max_value)
        return max_value