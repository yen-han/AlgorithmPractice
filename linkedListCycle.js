/*********************************************************************** 
Source LeetCode
141 Linked List Cycle
(https://leetcode.com/problems/linked-list-cycle/)
1st 2022-04-10

Given head, the head of a linked list, determine if the linked list has 
a cycle in it. There is a cycle in a linked list if there is some node 
in the list that can be reached again by continuously following the next 
pointer. Internally, pos is used to denote the index of the node that 
tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }

 * @param {ListNode} head
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC: If the next node has already appeared, it has cycle
// Time : O(n)
var hasCycle = function(head) {
    let set = new Set();
    let current = head;
    while(current) {
        if(set.has(current)) {
            return true;
        } else {
            set.add(current);
        }
        current = current.next;
    }
    return false;  
};

// TEST
// Output: true
head = [3,2,0,-4]; // pos: 1
console.log(hasCycle(head));
// Output: true
head = [1,2]; // pos: 0
console.log(hasCycle(head));