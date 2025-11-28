"""
Source LeetCode
2419. Longest Subarray With Maximum Bitwise AND
https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/description/
1st 2025-11-27

You are given an integer array nums of size n.

Consider a non-empty subarray from nums that has the maximum possible bitwise AND.

    In other words, let k be the maximum value of the bitwise AND of any subarray of nums. Then, only subarrays with a bitwise AND equal to k should be considered.

Return the length of the longest such subarray.

The bitwise AND of an array is the bitwise AND of all the numbers in it.

A subarray is a contiguous sequence of elements within an array.

Example 1:
Input: nums = [1,2,3,3,2,2]
Output: 2

Example 2:
Input: nums = [1,2,3,4]
Output: 1

Constraints:
    1 <= nums.length <= 105
    1 <= nums[i] <= 106
"""

# 1st Attempt
# LOGIC: Find the maximum value in the array and then count the longest contiguous subarray with that maximum value.
# Time: O(n)  | Space: O(1)
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        max_value = max(nums)
        longest = 0
        current = 0
        for i in range(len(nums)):
            if(nums[i] == max_value):
                current +=1
                longest= max(current, longest)
            else: 
                current = 0
                
        return longest