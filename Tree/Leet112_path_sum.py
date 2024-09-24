"""
Source LeetCode
112 Path Sum
(https://leetcode.com/problems/path-sum/)
2nd 2024-09-24

Given the root of a binary tree and an integer targetSum, return true 
if the tree has a root-to-leaf path such that adding up all the values 
along the path equals targetSum.

A leaf is a node with no children.

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
"""

# 1st Attempt
# LOGIC: Subtract until leaf node either left or right
# Time : O(n)
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if root is None:
            return False
        if not root.left and not root.right and (targetSum - root.val) == 0:
            return True
        targetSum -= root.val
        return self.hasPathSum(root.left, targetSum) or self.hasPathSum(root.right, targetSum)