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

// 2nd Attempt
// LOGIC: Find the size of the linked list & make stack in half way &
// pop element if the same value occurs in the order
// Time: O(n)  |  Memory: O(1)  
var isPalindrome = function(head) {
    let current = head;
    let stack = [];
    let size = 0;
    while(current){
        current = current.next;
        size++;
    }
    if(size === 0 || size === 1 ) return true;
    current = head;
    for(let i = 0;i < size/2; i++){
        stack.push(current.val);
        current = current.next;
    }
    if(size % 2 === 1) stack.pop();
    while(current){
        if(stack[stack.length-1] === current.val){
            stack.pop();
        }
        current = current.next;
    }
    return stack.length === 0;
};

// TEST
// head = [1,2,2,1]
// Output: true

// head = [1,2]
// Output: false