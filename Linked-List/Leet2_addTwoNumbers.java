/*********************************************************************** 
Source LeetCode
2. Add Two Numbers
https://leetcode.com/problems/add-two-numbers/description/
1st 2023-05-14

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

// 1st Attempt
// LOGIC: Add each Linked List's value and create new Linked List.
// Time: O(max(m, n))  |  Space: O(n)
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode result = new ListNode();
        ListNode head = result;
        int digit = 0;
        while(l1 != null || l2 != null|| digit != 0){
            if(l1 != null) {
                digit += l1.val;
                l1 = l1.next;
            }
            if(l2 != null){
                digit += l2.val;
                l2 = l2.next;
            }
            result.next = new ListNode(digit % 10);
            digit /= 10;
            result = result.next;
        }
        return head.next;
    }
}