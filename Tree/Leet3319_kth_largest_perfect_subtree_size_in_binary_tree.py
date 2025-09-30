"""
Source LeetCode
3319. K-th Largest Perfect Subtree Size in Binary Tree
https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/description/
1st 2025-09-29

ou are given the root of a binary tree and an integer k.

Return an integer denoting the size of the kth largest perfect binary

, or -1 if it doesn't exist.

A perfect binary tree is a tree where all leaves are on the same level, and every parent has two children.

Example 1:
Input: root = [5,3,6,5,2,5,7,1,8,null,null,6,8], k = 2
Output: 3

Example 2:
Input: root = [1,2,3,4,5,6,7], k = 1
Output: 7

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

Constraints:
    The number of nodes in the tree is in the range [1, 2000].
    1 <= Node.val <= 2000
    1 <= k <= 1024
"""

# 1st Attempt
# LOGIC: using Recursion, 
# Time : O(n) | Space: O(n)
class Solution:
    def dfs(self, root: Optional[TreeNode], res:List[int]) -> Tuple[bool, int, int]:
        if not root: 
            return True, 0, 0
        leftbinary, leftSize, leftHeight =  self.dfs(root.left, res)
        rightbinary, rightSize, rightHeight = self.dfs(root.right, res)

        if leftbinary and rightbinary and leftHeight==rightHeight :
            res.append(leftSize+rightSize+1)
            return True, leftSize+rightSize+1, leftHeight + 1

        return False, leftSize+rightSize+1, max(leftHeight, rightHeight)+1

    def kthLargestPerfectSubtree(self, root: Optional[TreeNode], k: int) -> int:
        res = []
        self.dfs(root, res)
        
        res.sort(reverse=True)
        if k <= len(res):
            return res[k-1]
        return -1