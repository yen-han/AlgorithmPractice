/*********************************************************************** 
Source LeetCode
144 Binary Tree Preorder Traversal
(https://leetcode.com/problems/binary-tree-preorder-traversal/)
1st 2022-05-02
2nd 2022-05-02

Given the root of a binary tree, return the preorder traversal of 
its nodes' values.

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
var preorderTraversal = function(root) {
    let stack = [];
    preorder(root, stack);
    return stack;
};
function preorder(node, stack){
    if(!node) return stack;
    stack.push(node.val);
    preorder(node.left, stack);
    preorder(node.right, stack);
}

// 2nd Attempt
// LOGIC: Iteration
var preorderTraversal = function(root) {
    let stack = [];
    let response = [];
    let node = root;
    if(node) stack.push(node);
    while(stack.length>0){
        node = stack.pop();
        response.push(node.val);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
        
    }
    return response;
};