"""
Source LeetCode
3211. Generate Binary Strings Without Adjacent Zeros
https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/description/
1st 2025-06-02

You are given a positive integer n.
A binary string x is valid if all substring of x of length 2 contain at least one "1".

Return all valid strings with length n, in any order.

Example 1:
Input: n = 3
Output: ["010","011","101","110","111"]

Example 2:
Input: n = 1
Output: ["0","1"]

Constraints:
    1 <= n <= 18
"""

# 1st Attempt
# LOGIC: Use backtracking with recursion, add 0 or 1 not to have adjacent zeros.
# Time : - | Space: O(n)
class Solution:
    def validStrings(self, n: int) -> List[str]:
        result = ["0", "1"]
        def backtrack(result, n):
            if n == 0:
                return
            to_add = []
            for i in range(len(result)):
                if result[i][-1] == "0":
                    result[i] = result[i] + "1"
                else:
                    to_add.append(result[i] + "1")
                    result[i] = result[i] + "0"
            result += to_add
            backtrack(result, n - 1)
        
        backtrack(result, n - 1)

        return result
