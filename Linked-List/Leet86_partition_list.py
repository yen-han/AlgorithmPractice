"""
Source LeetCode
86. Partition List
https://leetcode.com/problems/partition-list/description/
1st 2024-11-23

Given the head of a linked list and a value x, partition it such that all nodes 
less than x come before nodes greater than or equal to x.
You should preserve the original relative order of the nodes in each of the two partitions.

Example 1:
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]

Example 2:
Input: head = [2,1], x = 2
Output: [1,2]

Constraints:
    The number of nodes in the list is in the range [0, 200].
    -100 <= Node.val <= 100
    -200 <= x <= 200
    
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
"""

# 1st Attempt
# LOGIC: using 2 lists, separate one for less than x and other for greater than x, combine them at the end
# Time: O(n)  | Space: O(n)
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        list_less = ListNode(0)
        list_greater= ListNode(0)

        less = list_less
        greater = list_greater

        while head:
            if head.val < x:
                list_less.next = head
                list_less = list_less.next
            else: 
                list_greater.next = head
                list_greater = list_greater.next
            head = head.next
        # make it to the last node
        list_greater.next = None

        # connect both less and greater list together
        list_less.next = greater.next
        return less.next