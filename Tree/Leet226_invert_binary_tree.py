"""
Source LeetCode
226. Invert Binary Tree
https://leetcode.com/problems/invert-binary-tree/description/
2nd: 2024-09-10

Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Constraints:
    The number of nodes in the tree is in the range [0, 100].
    -100 <= Node.val <= 100

:type root: TreeNode
:rtype: TreeNode

# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""

# 1st Attempt
# LOGIC: find the position using binary search
# Time : O(logn)  |  Space: O(n)
class Solution(object):
    def invertTree(self, root):
        if root is None:
            return None
        temp = root.left
        root.left = root.right
        root.right = temp
        self.invertTree(root.left)
        self.invertTree(root.right)
        return root