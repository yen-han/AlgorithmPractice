"""
Source LeetCode
77. Combinations
https://leetcode.com/problems/combinations/description/
1st 2024-09-30

Given two integers n and k, return all possible combinations of 
k numbers chosen from the range [1, n].
You may return the answer in any order.

Example 1:
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.

Example 2:
Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.

Constraints:
    1 <= n <= 20
    1 <= k <= n
"""

class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        result = []
        nums = list(range(1, n + 1))
        def backtrack(nums, temp, res, k):
            if len(temp) == k:
                res.append(temp)
                return
            for i in range(len(nums)):
                backtrack(nums[i+1:], temp + [nums[i]], res, k)
        backtrack(nums, [], result, k)
        return result