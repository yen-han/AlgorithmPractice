"""
Source LeetCode
82. Remove Duplicates from Sorted List II
https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
1st 2024-11-17

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, 
leaving only distinct numbers from the original list. Return the linked list sorted as well.

Example 1:
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:
Input: head = [1,1,1,2,3]
Output: [2,3]

Constraints
    The number of nodes in the list is in the range [0, 300].
    -100 <= Node.val <= 100
    The list is guaranteed to be sorted in ascending order.

# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
"""

# 1st Attempt
# LOGIC: Use a dummy node to keep track of the head and prev node to keep track of the previous node.
# Time: O(n)  | Space: O(1)
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        head = ListNode(9999, head)
        copy = head
        prev = head

        while head:
            if head and head.next and head.val == head.next.val:
                while head and head.next and head.val == head.next.val:
                    head = head.next
                prev.next = head.next
            else: 
                prev = head
            head = head.next
        return copy.next