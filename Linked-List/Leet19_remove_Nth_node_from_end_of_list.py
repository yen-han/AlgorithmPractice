"""
Source LeetCode
19. Remove Nth Node From End of List
https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
3rd 2024-11-16

Given the head of a linked list, remove the nth node from the end of 
the list and return its head.

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Constraints
    The number of nodes in the list is sz.
    1 <= sz <= 30
    0 <= Node.val <= 100
    1 <= n <= sz

# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
"""

# 3rd Attempt
# LOGIC: Find the nth from the start of the list, and change the pointer
# Time: O(n)  |  Space: O(1)
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        # fast, slow
        fast = head
        slow = head

        # skp nth node from the start
        for _ in range(n):
            fast = fast.next

        # Edge case: if size == 1 or n ==1
        if fast is None: 
            return head.next
        
        # when fast is None, it's same n times from the end 
        while fast.next:
            fast = fast.next
            slow = slow.next
        slow.next = slow.next.next
        return head
