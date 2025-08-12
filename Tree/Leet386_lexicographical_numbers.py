"""
Source LeetCode
386. Lexicographical Numbers
https://leetcode.com/problems/lexicographical-numbers/description/
1st 2025-08-11

Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.

You must write an algorithm that runs in O(n) time and uses O(1) extra space. 

Example 1:
Input: n = 13
Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]

Example 2:
Input: n = 2
Output: [1,2]

Constraints:
    1 <= n <= 5 * 104
"""

# 1st Attempt
# LOGIC: Using Trie,
# Time: O(n)  | Space: O(n)
class TrieNode:
    def __init__(self):
        self.children = {}

class Solution:
    def lexicalOrder(self, n: int) -> List[int]:
        res = []
        root = TrieNode()
        for i in range(1, n + 1):
            node = root 
            for number in str(i):
                if number not in node.children:
                    node.children[number] = TrieNode()
                node = node.children[number]

        def TrieTraversal(node, prefix):
            if prefix != "":
                res.append(int(prefix))
            for i in node.children:
                TrieTraversal(node.children[i], prefix+i)

        TrieTraversal(root, "")

        return res
