/*********************************************************************** 
Source LeetCode
100. Same Tree
https://leetcode.com/problems/same-tree/description/
1st 2023-06-21

Given the roots of two binary trees p and q, write a function to check 
if they are the same or not.

Two binary trees are considered the same if they are structurally 
identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Constraints:
    The number of nodes in both trees is in the range [0, 100].
    -104 <= Node.val <= 104

* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }

 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC: Using deep first search, return false if values of p & q tree are not matched
// Time: O(V+E), Vertex+Edges  |  Memory: O(d), maximum depth
var isSameTree = function (p, q) {
  if (p == null && q == null) return true;
  else if (!q || !p) return false;
  if (p.val != q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
