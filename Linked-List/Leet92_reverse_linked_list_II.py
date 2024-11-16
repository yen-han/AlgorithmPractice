"""
Source LeetCode
92. Reverse Linked List II
https://leetcode.com/problems/reverse-linked-list-ii/description/
1st 2024-11-16

Given the head of a singly linked list and two integers left and right where left <= right, 
reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]

Constraints:
    The number of nodes in the list is n.
    1 <= n <= 500
    -500 <= Node.val <= 500
    1 <= left <= right <= n
    
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
"""

# 1st Attempt
# LOGIC: using stack loop through after left node, put it in stack and remove
# after right node, add new node with the value picked from stack
# Time: O(n)  | Space: O(n)
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        if left == right:
            return head
        i = 1
        prev = head
        copy = head
        stack = []
        while i <= right or len(stack)>0:   
            if i >= left and i < right:
                stack.append(head.val)
                prev.next=head.next
            elif i == right or i < left - 1:
                prev = prev.next 
            elif len(stack)> 0:
                next_node = prev.next
                prev.next = ListNode(stack.pop(), next_node)     
                prev = prev.next 
                head = prev
            head = head.next 
            i += 1
        if left == 1:
            return copy.next
        return copy