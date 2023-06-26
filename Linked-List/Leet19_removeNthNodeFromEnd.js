/*********************************************************************** 
Source LeetCode
19. Remove Nth Node From End of List
https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
1st 2023-06-20
2nd 2023-06-26

Given the head of a linked list, remove the nth node from the end of 
the list and return its head.

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}

Constraints
    The number of nodes in the list is sz.
    1 <= sz <= 30
    0 <= Node.val <= 100
    1 <= n <= sz

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
************************************************************************/

// 1st Attempt
// LOGIC: Find the nth from the start of the list, and change the pointer
// Time: O(n)  |  Space: O(1)
var removeNthFromEnd = function (head, n) {
  // calculate nth from end of list => nth from the first
  let node = head;
  let count = 0;
  while (node) {
    node = node.next;
    count++;
  }
  let nth = count - n + 1;

  // iterate till the nth from the first, pointer change
  node = head;
  let prev = head;
  count = 0;
  while (node) {
    count++;
    if (nth == 1) return head.next;
    else if (nth == count) {
      prev.next = node.next;
    }
    prev = node;
    node = node.next;
  }
  return head;
};

// 2nd Attempt
// LOGIC: Using two pointers(fast & slow), and move fast n times first for counting nth node.
// Time: O(n)  |  Space: O(1)
var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};
