"""
Source LeetCode
222. Count Complete Tree Nodes
https://leetcode.com/problems/count-complete-tree-nodes/description/
1st: 2024-09-30

Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely 
filled in a complete binary tree, and all nodes in the last level are as far 
left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Design an algorithm that runs in less than O(n) time complexity.

Example 1:
Input: root = [1,2,3,4,5,6]
Output: 6

Example 2:
Input: root = []
Output: 0

Example 3:
Input: root = [1]
Output: 1


Constraints:
    The number of nodes in the tree is in the range [0, 5 * 104].
    0 <= Node.val <= 5 * 104
    The tree is guaranteed to be complete.

# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""

# 1st Attempt
# LOGIC: depth-first search
# Time : O(n)  |  Space: O(n)
class Solution:
    def __init__(self):
        self.count = 0
    def countNodes(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
            
        def dfs(node):
            if node is None:
                return
            dfs(node.left)
            self.count += 1
            dfs(node.right)
        
        dfs(root)
        return self.count