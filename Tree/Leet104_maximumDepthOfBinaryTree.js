/*********************************************************************** 
Source LeetCode
104 Maximum Depth of Binary Tree
(https://leetcode.com/problems/maximum-depth-of-binary-tree/)
1st 2022-06-08

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest 
path from the root node down to the farthest leaf node.

Constraints
    The number of nodes in the tree is in the range [0, 104].
    -100 <= Node.val <= 100

 * @param {TreeNode} root
 * @return {number}
************************************************************************/

// 1st Attempt
// LOGIC: Recursion
var maxDepth = function(root) {
    if (root == null)
        return 0;
    else {
        //find until leaf node
        var lheight = maxDepth(root.left);
        var rheight = maxDepth(root.right);

        // compare depth
        if (lheight > rheight)
            return (lheight + 1);
        else
            return (rheight + 1);
    }
};