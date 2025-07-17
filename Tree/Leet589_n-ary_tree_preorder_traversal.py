"""
Source LeetCode
589. N-ary Tree Preorder Traversal
https://leetcode.com/problems/n-ary-tree-preorder-traversal/description/
1st 2025-07-16
2nd 2025-07-16

Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
Nary-Tree input serialization is represented in their level order traversal. 
Each group of children is separated by the null value (See examples)

Example 1:
Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]

Example 2:
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]

# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children

Constraints:
    The number of nodes in the tree is in the range [0, 104].
    0 <= Node.val <= 104
    The height of the n-ary tree is less than or equal to 1000.
"""

# 1st Attempt
# LOGIC: using Recursion
# Time : O(n) | Space: O(n)
class Solution:
    def preorderTraversal(self, node: Optional[TreeNode], res:List[int])-> List[int]:
        if node is None: 
            return res
        res.append(node.val)

        for child in node.children:
            self.preorderTraversal(child, res)

        return res

    def preorder(self, root: 'Node') -> List[int]:
        res = []
        
        self.preorderTraversal(root, res)
        return res
    
# 2nd Attempt
# LOGIC: using Iterative approach with stack
# Time : O(n) | Space: O(n)
class Solution:      
    def preorder(self, root: 'Node') -> List[int]:
        if root is None: 
            return []
        stack  = [root]
        res = []
        while len(stack) > 0:
            root = stack.pop()
            res.append(root.val)
            for child in reversed(root.children):
                stack.append(child)

        return res