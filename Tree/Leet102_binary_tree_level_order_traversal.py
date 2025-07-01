"""
Source LeetCode
102. Binary Tree Level Order Traversal
https://leetcode.com/problems/binary-tree-level-order-traversal/description/
1st 2024-11-23

Given the root of a binary tree, return the level order traversal of its nodes' values. 
(i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

Constraints:
    The number of nodes in the tree is in the range [0, 2000].
    -1000 <= Node.val <= 1000
"""

# 1st Attempt
# LOGIC: using BFS
# Time : O(n)  | Space: O(1)
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return []
        queue = deque([root])
        result = []

        while queue:
            level_size = len(queue)
            temp = []
            for _ in range(level_size):
                
                node = queue.popleft()
                temp.append(node.val)

                if node.left :
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(temp)    
        return result



