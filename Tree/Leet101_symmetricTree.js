/*********************************************************************** 
Source LeetCode
101 Symmetric Tree
(https://leetcode.com/problems/symmetric-tree/)
1st 2022-05-01

Given the root of a binary tree, check whether it is a mirror of itself 
(i.e., symmetric around its center).

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }

 * @param {TreeNode} root
 * @return {boolean}
************************************************************************/

// 1st Attempt
// LOGIC: Recursion to right for the outer node and inner node
// Time : O(n)

// Recursion
var isSymmetric = function(root) {
    let leftT = root.left;
    let rightT = root.right;
    return mirror(leftT, rightT);
};
function mirror(left, right){
    if(!left&&!right) return true;  
    if (left && right && left.val == right.val)
        return (mirror(left.left, right.right)
                && mirror(left.right, right.left));
    return false;
}
// TEST 
root = [1,2,2,3,4,4,3];
/* output: true
      1
   /    \
  2      2
 / \    / \
3   4  4   3
*/