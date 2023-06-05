/*********************************************************************** 
Source LeetCode
2. Add Two Numbers
https://leetcode.com/problems/add-two-numbers/description/
1st 2023-05-14 (Java)
2nd 2023-06-04 (JavaScript)
3rd 2023-06-04 (JavaScript)

You are given two non-empty linked lists representing two non-negative 
integers. The digits are stored in reverse order, and each of their nodes 
contains a single digit. Add the two numbers and return the sum as a 
linked list.

You may assume the two numbers do not contain any leading zero, except 
the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

 * @return {ListNode}

Constraints
    The number of nodes in each linked list is in the range [1, 100].
    0 <= Node.val <= 9
    It is guaranteed that the list represents a number that does not have leading zeros.

 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
************************************************************************/

// 2nd Attempt
// LOGIC: Add each Linked List's value and create new Linked List.
// Time: O(max(m,n))  |  Space: O(n)
var addTwoNumbers = function (l1, l2) {
  let res = new ListNode();
  let head = res;
  let sum = 0;
  while (l1 || l2 || sum != 0) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    res.next = new ListNode(sum % 10);
    sum >= 10 ? (sum = 1) : (sum = 0);
    res = res.next;
  }
  return head.next;
};

// 3rd Attempt
// LOGIC: Using Recursive algorithm
// Time: -  |  Space: O(n)
var addTwoNumbers = function (l1, l2) {
  let res = new ListNode();
  let head = res;
  let adding = 0;

  sumNumbers(res, l1, l2, adding);
  return head.next;
};

function sumNumbers(res, l1, l2, adding) {
  let sum = l1.val + l2.val + adding;
  res.next = new ListNode(sum % 10);
  sum > 9 ? (adding = 1) : (adding = 0);
  res = res.next;
  if (l1.next && l2.next) return sumNumbers(res, l1.next, l2.next, adding);
  else if (!l1.next && l2.next)
    return sumNumbers(res, new ListNode(0), l2.next, adding);
  else if (l1.next && !l2.next)
    return sumNumbers(res, l1.next, new ListNode(0), adding);
  else if (adding > 0)
    return sumNumbers(res, new ListNode(0), new ListNode(1), 0);
}
