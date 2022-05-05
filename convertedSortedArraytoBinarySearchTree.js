/*********************************************************************** 
Source LeetCode
108 Converted Sorted Array to Binary Search Tree
(https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)
1st 2022-05-05

Given an integer array nums where the elements are sorted in ascending 
order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the 
two subtrees of every node never differs by more than one.

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 
 * @param {number[]} nums
 * @return {TreeNode}
************************************************************************/

// 1st Attempt
// LOGIC: Recursion 
var sortedArrayToBST = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    return recursion(nums, start, end);
};

function recursion(nums, start, end) {
    if(start > end) return null;
    // get middle 
    let mid = Math.ceil((start + end) / 2);
    let node = new TreeNode(nums[mid]);

    //left subtree
    node.left = recursion(nums, start, mid - 1);
    //right subtree
    node.right = recursion(nums, mid + 1, end);
    return node;
}