/*********************************************************************** 
Source LeetCode
235 Lowest Common Ancestor of a Binary Search Tree
(https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
1st 2022-05-05

Given a binary search tree (BST), find the lowest common ancestor (LCA) 
of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common 
ancestor is defined between two nodes p and q as the lowest node in T 
that has both p and q as descendants (where we allow a node to be a 
descendant of itself).”

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }

 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
************************************************************************/

// 1st Attempt
// LOGIC: Check for both p and q are lower or higher than root.
// Return if p, q are between root value or either p, q is same as root value
// Time : O(n)
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null;
    if(p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q); 
    else if(p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q); 
    return root;
};