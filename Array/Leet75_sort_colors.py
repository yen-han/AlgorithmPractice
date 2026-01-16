'''
Source LeetCode
75. Sort Colors
https://leetcode.com/problems/sort-colors/description/
1st 2023-05-02

Given an array nums with n objects colored red, white, or blue, sort 
them in-place so that objects of the same color are adjacent, with the 
colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, 
and blue, respectively.

You must solve this problem without using the library's sort function.

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.

Constraints:
    n == nums.length
    1 <= n <= 300
    nums[i] is either 0, 1, or 2.
'''

# 1st Attempt
# LOGIC: Using constraints, track the positions of 0's and 2's and swap accordingly
# Time : O(n)  | Space : O(1)
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        track_zero = 0
        track_two = len(nums)-1
        i = 0
        while i <= track_two:
            if nums[i] == 2:
                nums[track_two], nums[i] = nums[i], nums[track_two]
                track_two -= 1
            elif nums[i] == 0:
                nums[track_zero], nums[i] = nums[i], nums[track_zero]
                track_zero += 1
                i += 1
            elif nums[i] == 1:
                i += 1