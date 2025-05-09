"""
Source LeetCode
83. Remove Duplicates from Sorted List
https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
1st 2025-05-08

Given the head of a sorted linked list, delete all duplicates such that each element 
appears only once. Return the linked list sorted as well.

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]

Constraints
    The number of nodes in the list is in the range [0, 300].
    -100 <= Node.val <= 100
    The list is guaranteed to be sorted in ascending order.

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
"""

# 1st Attempt
# LOGIC: Use a dummy node to keep track of the head and if duplicate is found, skip the next node.
# Time: O(n)  | Space: O(1)
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # edge case
        if head is None:
            return None

        res = head
        dup = head

        while head is not None:
            if dup.val == head.val:
                dup.next = head.next
            else: 
                dup = head
            head = head.next

        return res