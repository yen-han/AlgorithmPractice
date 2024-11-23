"""
Source LeetCode
637. Average of Levels in Binary Tree
https://leetcode.com/problems/average-of-levels-in-binary-tree/description/
1st 2024-11-16

Given the root of a binary tree, return the average value of the nodes on each 
level in the form of an array. Answers within 10-5 of the actual answer will be accepted. 

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]

Example 2:
Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]

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
# LOGIC: using BFS, sum all the nodes in each level and append average to the result
# Time : O(n) | Space: O(n)
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        result = []
        queue = deque([root])
        
        while queue:
            level_size = len(queue)
            sum = 0
            for _ in range(level_size):
                node = queue.popleft()
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
                sum += node.val
            result.append(sum / level_size)
        return result
