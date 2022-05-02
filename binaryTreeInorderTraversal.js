/*********************************************************************** 
Source LeetCode
94 Binary Tree Inorder Traversal
(https://leetcode.com/problems/binary-tree-inorder-traversal/)
1st 2022-05-01

Given the root of a binary tree, return the inorder traversal of its 
nodes' values.

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)

 * @param {TreeNode} root
 * @return {number[]}
************************************************************************/

// 1st Attempt
// LOGIC: Recursion 
var inorderTraversal = function(root) {
    let stack = [];
    inorder(root, stack);
    return stack;
};
function inorder(node, stack){
    if(!node) return stack;
    inorder(node.left, stack);
    stack.push(node.val);
    inorder(node.right, stack);
    return stack;
} 

// 2nd Attempt
// LOGIC: Iteration
var inorderTraversal = function(root) {
    let stack = [];
    let res = [];
    let node = root
    while(node|| stack.length>0){
        while(node){
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        res.push(node.val);
        node = node.right;
    }
    return res;
};
// TEST
// Input: root = [1,null,2,3]
// Output: [1,3,2]