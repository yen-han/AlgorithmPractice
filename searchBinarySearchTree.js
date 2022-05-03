/*********************************************************************** 
Source LeetCode
700 Search in a Binary Search Tree
(https://leetcode.com/problems/search-in-a-binary-search-tree/)
1st 2022-05-03
2nd 2022-05-03

You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the 
subtree rooted with that node. If such a node does not exist, return null.

Constraints:
    The number of nodes in the tree is in the range [1, 5000].
    1 <= Node.val <= 107
    root is a binary search tree.
    1 <= val <= 107
    
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)

 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
************************************************************************/

// 1st Attempt
// LOGIC: Iteration
// Time: O(n)  |  Space: O(1)
var searchBST = function(root, val) {
    while(root){
        if(root.val === val) return root;
        else if(val < root.val) root = root.left;
        else if(val > root.val) root = root.right;
    }
    return null;
};

// 2st Attempt
// LOGIC: Recursion
// Time: O(n)  |  Space: O(1)
var searchBST = function(root, val) {
    return findMatch(root, val);
};
function findMatch(node, val){
    if(!node) return null;
    else if(node.val === val) return node;
    else if(val < node.val) return findMatch(node.left, val);
    else if(val > node.val) return findMatch(node.right, val);
}

// TEST
/*   
     4
   /   \
  2     7
 / \
1   3 
 */
// root = [4,2,7,1,3], val = 2
// Output [2,1,3]

/*   
     4
   /   \
  2     7
 / \
1   3 
 */
// root = [4,2,7,1,3], val = 5
// Output []