/*********************************************************************** 
Source LeetCode
226. Invert Binary Tree
https://leetcode.com/problems/invert-binary-tree/description/
1st 2024-06-16

Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

 * @param {TreeNode} root
 * @return {TreeNode}
************************************************************************/

// 1st Attempt
// LOGIC: recursion, go through each tree and swap
// Time : O(n)  |  Space: O(n)
var invertTree = function (root) {
  if (root == null) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  if (root.left != null) invertTree(root.left);
  if (root.right != null) invertTree(root.right);

  return root;
};
