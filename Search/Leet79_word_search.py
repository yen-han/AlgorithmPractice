"""
Source LeetCode
79. Word Search
https://leetcode.com/problems/word-search/description/
1st 2024-10-08

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells 
are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Constraints:
    m == board.length
    n = board[i].length
    1 <= m, n <= 6
    1 <= word.length <= 15
    board and word consists of only lowercase and uppercase English letters.
"""

class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        for i in range(len(board)):
            for j in range(len(board[0])):
                if self.dfs(board, word, i, j, 0):
                    return True
        return False

    def dfs(self, board: List[List[str]], word: str, i: int, j: int, s: int) -> bool:
        if i < 0 or i == len(board) or j < 0 or j == len(board[0]): # boundary
            return False
        if board[i][j] != word[s] or board[i][j] == '*': # no match or visited
            return False
        if s == len(word) - 1: # end of word
            return True
        
        original_value = board[i][j]
        board[i][j] = '*'
        is_exist = self.dfs(board, word, i + 1, j, s + 1) or \
                   self.dfs(board, word, i - 1, j, s + 1) or \
                   self.dfs(board, word, i, j + 1, s + 1) or \
                   self.dfs(board, word, i, j - 1, s + 1)
        board[i][j] = original_value
        
        return is_exist