"""
Source LeetCode
654. Maximum Binary Tree
https://leetcode.com/problems/maximum-binary-tree/description/
1st 2025-07-24

You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively 
from nums using the following algorithm:

    Create a root node whose value is the maximum value in nums.
    Recursively build the left subtree on the subarray prefix to the left of the maximum value.
    Recursively build the right subtree on the subarray suffix to the right of the maximum value.

Return the maximum binary tree built from nums.

Example 1:
Input: nums = [3,2,1,6,0,5]
Output: [6,3,5,null,2,0,null,null,1]

Example 2:
Input: nums = [3,2,1]
Output: [3,null,2,null,1]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

Constraints:
    1 <= nums.length <= 1000
    0 <= nums[i] <= 1000
    All integers in nums are unique.
"""

# 1st Attempt
# LOGIC: using Recursion, find the index of the maximum element, slice left and right subarrays.
# Time : O(n^2) | Space: O(n)
class Solution:
    def constructMaximumBinaryTree(self, nums: List[int]) -> Optional[TreeNode]:
        if len(nums) ==0:
            return None

        max_index = nums.index(max(nums))
        root = TreeNode(nums[max_index])

        root.left = self.constructMaximumBinaryTree(nums[:max_index])
        root.right = self.constructMaximumBinaryTree(nums[max_index+1:])

        return root