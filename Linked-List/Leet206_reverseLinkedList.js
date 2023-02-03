/*********************************************************************** 
Source LeetCode
206 Reverse Linked List
(https://leetcode.com/problems/reverse-linked-list/description/)
1st 2023-01-01
2nd 2023-02-02

Given the head of a singly linked list, reverse the list, and return 
the reversed list.

Example:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Constraints:
    The number of nodes in the list is the range [0, 5000].
    -5000 <= Node.val <= 5000

 * @param {ListNode} head
 * @return {ListNode}
************************************************************************/

// 1st Attempt
// LOGIC: Iteration, change direction of the next node by tracking previous
// & forward node
// Time : O(n)  |  Memory: O(1)
var reverseList = function (head) {
  if (!head) return head;
  let node = head;
  let prev = null;
  let forward;
  while (node) {
    forward = node.next;
    node.next = prev;
    prev = node;
    if (forward) node = forward;
    else return node;
  }
};

// 2nd Attempt
// LOGIC: Recursion, change direction from next node to current node
//        & make current node's reference field point to null
// Time : -  |  Memory: O(1)
var reverseList = function (head) {
  if (head == null || head.next == null) return head;
  let next = head.next;
  let list = reverseList(next);
  next.next = head;
  head.next = null;
  return list;
};
