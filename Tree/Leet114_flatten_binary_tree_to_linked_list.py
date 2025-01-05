"""
Source LeetCode
114. Flatten Binary Tree to Linked List
https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/
1st 2024-11-05

Given the root of a binary tree, flatten the tree into a "linked list":

    The "linked list" should use the same TreeNode class where the 
    right child pointer points to the next node in the list and the 
    left child pointer is always null.
    The "linked list" should be in the same order as a pre-order 
    traversal of the binary tree.


Example 1:
Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]

Example 2:
Input: root = []
Output: []

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

Constraints:
    The number of nodes in the tree is in the range [0, 2000].
    -100 <= Node.val <= 100
"""

# 1st Attempt
# LOGIC: using dfs, we traverse the tree and update move all the node to right
# Time : O(n) | Space : O(1)
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        self.prev = None
        
        def helper(node: Optional[TreeNode]) -> None:
            if not node:
                return
            
            helper(node.right)
            helper(node.left)
            
            node.right = self.prev  
            node.left = None        

            self.prev = node
        
        helper(root)