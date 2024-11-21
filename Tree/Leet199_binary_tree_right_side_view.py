"""
Source LeetCode
199. Binary Tree Right Side View
https://leetcode.com/problems/binary-tree-right-side-view/description/
1st 2024-11-16

Given the root of a binary tree, imagine yourself standing on the right 
side of it, return the values of the nodes you can see ordered from top to bottom.

Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:
Input: root = [1,null,3]
Output: [1,3]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

Constraints:
    The number of nodes in the tree is in the range [0, 100].
    -100 <= Node.val <= 100
"""

# 1st Attempt
# LOGIC: using BFS
# Time : O(n) | Space: O(n)
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        queue = deque([root])
        result = []
        while queue:
            level_size = len(queue)
            for i in range(level_size):
                node = queue.popleft() 

                # Add the left and right children to the queue 
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

                # if it's last node, add the last value to the result
                if i == level_size - 1:
                    result.append(node.val) 
        return result
