"""
Source LeetCode
98. Validate Binary Search Tree
https://leetcode.com/problems/validate-binary-search-tree/description/
1st 2024-12-07

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

    The left
    subtree
    of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.


Example 1:
Input: root = [2,1,3]
Output: true

Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

Constraints:
    The number of nodes in the tree is in the range [1, 104].
    -231 <= Node.val <= 231 - 1
"""

# 1st Attempt
# LOGIC: 
# Time : O(n)  | Space: O(1)
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        INF = sys.maxsize
        lower = -INF
        upper = INF
        def helper(node, lower, upper):
            if node is None:
                return True
            
            if lower < node.val < upper:
                return helper(node.left, lower, node.val) and helper(node.right, node.val, upper)           
            else:
                return False
            
        return helper( root, lower, upper)
       