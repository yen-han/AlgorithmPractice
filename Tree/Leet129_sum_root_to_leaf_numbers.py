"""
Source LeetCode
129. Sum Root to Leaf Numbers
https://leetcode.com/problems/sum-root-to-leaf-numbers/description/
1st 2024-11-06

You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

    For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.

Return the total sum of all root-to-leaf numbers. Test cases are generated so 
that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.

Example 1:
Input: root = [1,2,3]
Output: 25

Example 2:
Input: root = [4,9,0,5,1]
Output: 1026

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

Constraints:
    The number of nodes in the tree is in the range [1, 1000].
    0 <= Node.val <= 9
    The depth of the tree will not exceed 10.
"""

# 1st Attempt
# LOGIC: 
# Time : 
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        sum = 0
        arr = []

        def dfs(path: str, node: Optional[TreeNode]) -> str:
            if node is None:
                return
            
            path += str(node.val) 

            if node.left is None and node.right is None: 
                arr.append(path)
            
            dfs(path, node.left)
            dfs(path, node.right)
       
        dfs("", root)
        
        for i in range(len(arr)):
            sum += int(arr[i])
        return sum