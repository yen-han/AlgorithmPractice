"""
Source LeetCode
141. Linked List Cycle
https://leetcode.com/problems/linked-list-cycle/submissions/
2nd 2024-10-23

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached 
again by continuously following the next pointer. Internally, pos is used to denote 
the index of the node that tail's next pointer is connected to. Note that pos 
is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

Constraints:
    The number of the nodes in the list is in the range [0, 104].
    -105 <= Node.val <= 105
    pos is -1 or a valid index in the linked-list.
"""

# 2nd Attempt
# LOGIC: using hash set
# Time: O(n)  | Space: O(n)
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        hash_set = set()
        while head:
            if head in hash_set:
                return True
            hash_set.add(head)
            head = head.next
        return False
        
# 3rd Attempt
# LOGIC: using two pointer
# Time: O(n)  | Space: O(1)
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False