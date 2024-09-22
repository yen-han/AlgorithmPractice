"""
Source LeetCode
169. Majority Element
https://leetcode.com/problems/majority-element/description/
2nd: 2024-09-21

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2


Constraints:
    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109

:type nums: List[int]
:rtype: int
"""

# 2nd Attempt
# LOGIC: Use sorting, return the middle of the array
# Time : O(nlogn)  |  Space: O(1)
class Solution(object):
    def majorityElement(self, nums):
        nums.sort()
        return nums[len(nums) // 2]