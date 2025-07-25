"""
Source LeetCode
117. Populating Next Right Pointers in Each Node II
https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/
1st 2024-11-02

Given a binary tree
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Populate each next pointer to point to its next right node. If there is no next right node,
the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Example 1:
Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]

Example 2:
Input: root = []
Output: []

# Definition for a binary tree node.
# class Node:
#     def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
#         self.val = val
#         self.left = left
#         self.right = right
#         self.next = next

Constraints:
    The number of nodes in the tree is in the range [0, 6000].
    -100 <= Node.val <= 100
"""

# 1st Attempt
# LOGIC: using BFS, we traverse the tree level by level and connect the next pointers
# Time : O(n) | Space : O(n)
class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root:
            return None
        
        queue = deque()  
        queue.append(root)
        while queue:
            level_size = len(queue)
            prev = Node()

            for i in range(level_size):
                curr = queue.popleft()

                if curr.left:
                    queue.append(curr.left)
                    prev.next = curr.left
                    prev = curr.left

                if curr.right:
                    queue.append(curr.right)
                    prev.next = curr.right
                    prev = curr.right
        return root