/*********************************************************************** 
Source LeetCode
160 Intersection of Two Linked Lists
(https://leetcode.com/problems/intersection-of-two-linked-lists/description/)
1st 2022-01-11

Given the heads of two singly linked-lists headA and headB, return the 
node at which the two lists intersect. If the two linked lists have no 
intersection at all, return null.

The test cases are generated such that there are no cycles anywhere in 
the entire linked structure.

Note that the linked lists must retain their original structure after 
the function returns.

Note that the linked lists must retain their original structure after the 
function returns.

Custom Judge:

The inputs to the judge are given as follows (your program is not given 
    these inputs):

    intersectVal - The value of the node where the intersection occurs. 
    This is 0 if there is no intersected node.
    listA - The first linked list.
    listB - The second linked list.
    skipA - The number of nodes to skip ahead in listA (starting from 
        the head) to get to the intersected node.
    skipB - The number of nodes to skip ahead in listB (starting from 
        the head) to get to the intersected node.


 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;

 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}

Constraints:
    The number of nodes of listA is in the m.
    The number of nodes of listB is in the n.
    1 <= m, n <= 3 * 104
    1 <= Node.val <= 105
    0 <= skipA < m
    0 <= skipB < n
    intersectVal is 0 if listA and listB do not intersect.
    intersectVal == listA[skipA] == listB[skipB] if listA and listB intersect.
************************************************************************/

// 1st Attempt
// LOGIC: Brute Force, Loop all nodes for the match
// Time : O(m * n)  |  Space : O(1)
var getIntersectionNode = function (headA, headB) {
  let tempA = headA;
  while (tempA != null) {
    let tempB = headB;

    while (tempB != null) {
      if (tempA == tempB) return tempA;
      tempB = tempB.next;
    }

    tempA = tempA.next;
  }
  return null;
};

// 2nd Attempt
// LOGIC: Hash Table, Store all nodes on one list. Then check if the other
// has the same node.
// Time : O(m + n)  |  Space : O(n)
var getIntersectionNode = function (headA, headB) {
  const set = new Set();

  while (headB != null) {
    set.add(headB);
    headB = headB.next;
  }

  while (headA != null) {
    if (set.has(headA)) return headA;
    headA = headA.next;
  }

  return null;
};
