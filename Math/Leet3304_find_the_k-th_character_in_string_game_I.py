"""
Source LeetCode
3304. Find the K-th Character in String Game I
https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/description/
1st 2025-09-25

Alice and Bob are playing a game. Initially, Alice has a string word = "a".

You are given a positive integer k.

Now Bob will ask Alice to perform the following operation forever:

    Generate a new string by changing each character in word to its next character 
    in the English alphabet, and append it to the original word.

For example, performing the operation on "c" generates "cd" and performing the operation 
on "zb" generates "zbac".

Return the value of the kth character in word, after enough operations have been done 
for word to have at least k characters.

Example 1:
Input: k = 5
Output: "b"

Example 2:
Input: k = 10
Output: "c"


Constraints:
    1 <= k <= 500
"""

# 1st Attempt
# LOGIC: Generate the string with the next character until its length is >= k
# Time: O(n) | Space: O(1)
class Solution:
    def kthCharacter(self, k: int) -> str:
        word = "a"
        while len(word) <= k:
            generated = ""
            for i in range(len(word)):
                generated += chr(ord(word[i])+1)
            word += generated
        return word[k-1]