/*********************************************************************** 
Source LeetCode
21 Merge Two Sorted Lists
(https://leetcode.com/problems/merge-two-sorted-lists/)
1st 2022-04-11

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by 
splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)

 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
************************************************************************/

// 1st Attempt
// LOGIC: Loop & connect the node if the order condition is satisfied
// Time : O(n)  |  Memory: O(1)
var mergeTwoLists = function(list1, list2) {
    let newHead = new ListNode();
    let curr1 = list1;
    let curr2 = list2;
    let currNode = newHead;

    while(curr1 && curr2) {
        if(curr1.val <= curr2.val) {
            currNode.next = curr1;
            curr1 = curr1.next;
        } else {
            currNode.next = curr2;
            curr2 = curr2.next;
        }
        currNode = currNode.next;
    }
    if (curr1 === null) { 
        currNode.next = curr2; 
    } else if (curr2 === null) {
         currNode.next = curr1; 
    }
    return newHead.next;
};

// TEST
// let list1 = [1,2,4]; let list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Input: list1 = [], list2 = []
// Output: []
// Input: list1 = [], list2 = [0]
// Output: [0]
