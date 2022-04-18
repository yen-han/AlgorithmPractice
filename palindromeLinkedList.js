/*********************************************************************** 
Source LeetCode
234 Palindrome Linked List
(https://leetcode.com/problems/palindrome-linked-list/)
1st 2022-04-18

Given the head of a singly linked list, return true if it is a palindrome.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} head
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC: Find exact match by creating new string
// Time: O(n)  |  Memory: O(n)  
var isPalindrome = function(head) {
    let current = head;
    let fromStart = "";
    let fromEnd = "";
    while(current) {
        fromStart += current.val;
        fromEnd = current.val+fromEnd;
        current = current.next;
    }
    return fromStart === fromEnd;
};

// TEST
// head = [1,2,2,1]
// Output: true

// head = [1,2]
// Output: false