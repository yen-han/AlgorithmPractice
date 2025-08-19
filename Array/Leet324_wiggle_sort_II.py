'''
Source LeetCode
324. Wiggle Sort II
https://leetcode.com/problems/wiggle-sort-ii/description/
1st 2025-08-18

Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

You may assume the input array always has a valid answer.

Example 1:
Input: nums = [1,5,1,1,6,4]
Output: [1,6,1,5,1,4]

Example 2:
Input: nums = [1,3,2,2,3,1]
Output: [2,3,1,3,1,2]

Constraints
    1 <= nums.length <= 5 * 104
    0 <= nums[i] <= 5000
    It is guaranteed that there will be an answer for the given input nums.
'''

# 1st Attempt
# LOGIC: Sort the array and then rearrange it by taking elements from the middle and the end alternatively.
# Time: O(n)  | Space: O(n)
class Solution:
    def wiggleSort(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        nums.sort()
        sorted_nums = nums[:]

        length=len(nums)

        mid = (length - 1) // 2
        end = length - 1

        for index in range(length):
            if index % 2 == 0:
                nums[index] = sorted_nums[mid]
                mid -= 1
            else:
                nums[index] = sorted_nums[end]
                end -= 1
