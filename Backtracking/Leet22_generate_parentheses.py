"""
Source LeetCode
22. Generate Parentheses
https://leetcode.com/problems/generate-parentheses/description/
1st 2024-10-05

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

Constraints:
    1 <= n <= 8
"""
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        dp = [[] for _ in range(n + 1)]
        dp[0] = [""]  

        for i in range(1, n + 1):
            for j in range(i):
                for left in dp[j]:
                    for right in dp[i - j - 1]:
                        dp[i].append("(" + left + ")" + right)

        return dp[n]
