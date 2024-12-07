"""
Source LeetCode
61. Rotate List
https://leetcode.com/problems/rotate-list/description/
1st 2024-11-27

Given the head of a linked list, rotate the list to the right by k places.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Constraints
    The number of nodes in the list is in the range [0, 500].
    -100 <= Node.val <= 100
    0 <= k <= 2 * 109

# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
"""

# 1st Attempt
# LOGIC: with fast, slow node, possible to loop each time and make the last node to front
# Time: O(n)  | Space: O(1)
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if head is None:
            return None
        times = 0
        new_head = head
        while times < k:
            fast = new_head.next
            slow = new_head
            if fast is None: 
                return new_head
            while fast.next:
                slow = slow.next
                fast = fast.next
            fast.next = new_head
            new_head = fast
            slow.next = None
            times += 1

        return new_head