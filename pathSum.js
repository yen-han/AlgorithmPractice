/*********************************************************************** 
Source LeetCode
112 Path Sum
(https://leetcode.com/problems/path-sum/)
1st 2022-05-13

Given the root of a binary tree and an integer targetSum, return true 
if the tree has a root-to-leaf path such that adding up all the values 
along the path equals targetSum.

A leaf is a node with no children.

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC: Sum until leaf node either left or right
// Time : O(n)

var hasPathSum = function(root, targetSum) {
    return findSum(root, 0, targetSum);
};

function findSum(node, sum, targetSum) {
    if (!node)  return false;
    sum += node.val; 
    if (!node.left && !node.right) {
        return sum === targetSum;
    }
    
    return findSum(node.left, sum, targetSum) || findSum(node.right, sum, targetSum);
}