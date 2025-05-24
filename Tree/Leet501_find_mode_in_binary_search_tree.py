"""
Source LeetCode
501. Find Mode in Binary Search Tree
https://leetcode.com/problems/find-mode-in-binary-search-tree/description/
1st 2025-05-22
2nd 2025-05-22

Given the root of a binary search tree (BST) with duplicates, return all the mode(s) 
(i.e., the most frequently occurred element) in it.

If the tree has more than one mode, return them in any order.

Assume a BST is defined as follows:

    The left subtree of a node contains only nodes with keys less than or equal to the node's key.
    The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
    Both the left and right subtrees must also be binary search trees.


Example 1:
Input: root = [1,null,2,2]
Output: [2]

Example 2:
Input: root = [0]
Output: [0]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

Constraints:
    The number of nodes in the tree is in the range [1, 10^4].
    -10^5 <= Node.val <= 10^5
"""

# 1st Attempt
# LOGIC: Using Hash map and inorder traversal, get max occurrence and return keys with max occurrence.
# Time : O(n)  | Space: O(n)
class Solution:
    def inorder(self, root: Optional[TreeNode], hash_map: dict):
        if root:
            self.inorder(root.left, hash_map)
            if root.val in hash_map:
                hash_map[root.val] += 1
            else:
                hash_map[root.val] = 1
            self.inorder(root.right, hash_map)
        return hash_map

    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        hash_map = {}
        max_occurence = 0
        res = []

        hash_map = self.inorder(root, hash_map)

        max_occurence = max(hash_map.values())
        for key, value in hash_map.items():
            if value == max_occurence:
                res.append(key)
        return res

# 2nd Attempt
# LOGIC: Using inorder traversal, compare values with previous node and count the occurrence.
# Time : O(n)  | Space: O(1)
class Solution:
    def inorder(self, root: Optional[TreeNode], hash_map: dict):
        max_key = []
        max_count = 0
        count = 0
        prev = None

        def inorder(root):
            nonlocal prev, count, max_count, max_key
            if root:
                inorder(root.left)
                if prev and prev.val == root.val:
                    count += 1
                else:
                    count = 1

                if max_count < count:
                    max_count = count
                    max_key = [root.val]
                elif max_count == count:
                    max_key.append(root.val)

                prev = root
                inorder(root.right)

        inorder(root)
        return max_key