/*********************************************************************** 
Source LeetCode
203 Remove Linked List Elements
(https://leetcode.com/problems/remove-linked-list-elements/)
1st 2022-04-11

Given the head of a linked list and an integer val, remove all the nodes 
of the linked list that has Node.val == val, and return the new head.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)

 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
************************************************************************/

// 1st Attempt
// LOGIC: If the current node is same as given value, it skip the node
// If the next node is same as given value, it skip the next node
// Time : O(n)  |  Memory: O(1)
var removeElements = function(head, val) {
    let current = head;
    let prev = new ListNode();
    while(current !== null) {
        if(current.val === val) {
            if(head === current) {
                head = current.next;
            } 
            else {
                prev.next = current.next;
            }
        } else {
            if(current.next !== null && current.next.val === val) {
                prev = current;
                current.next = current.next.next;
            } 
        }
        current=current.next;
    }
    return head;
};

// TEST
// Output: [1,2,3,4,5]
let head = [1,2,6,3,4,5,6]; let val = 6;
// Output: []
//let head = []; let val = 1;
// Output: []
//let head = [7,7,7,7]; let val = 7;

console.log(removeElements(head, val));
