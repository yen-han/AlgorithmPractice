"""
Source LeetCode
2575. Find the Divisibility Array of a String
https://leetcode.com/problems/find-the-divisibility-array-of-a-string/description/
1st 2026-02-19

You are given a 0-indexed string word of length n consisting of digits, and a positive integer m.

The divisibility array div of word is an integer array of length n such that:

    div[i] = 1 if the numeric value of word[0,...,i] is divisible by m, or
    div[i] = 0 otherwise.

Return the divisibility array of word.

Example 1:
Input: word = "998244353", m = 3
Output: [1,1,0,0,0,1,1,0,0]

Example 2:
Input: word = "1010", m = 10
Output: [0,1,0,1]

Constraints:
    1 <= n <= 105
    word.length == n
    word consists of digits from 0 to 9
    1 <= m <= 109
"""

# 1st Attempt
# LOGIC: Remainder can be determined by the formula: (previous_remainder * 10 + current_digit) % m. 
# Time: O(n) | Space: O(n)
class Solution:
    def divisibilityArray(self, word: str, m: int) -> List[int]:
        output =[]

        curr = 0
        for i in range(len(word)):
            sub_num = int(word[i])
            remain = ((curr*10) + sub_num)%m
            if(remain == 0):
                output.append(1)
            else: 
                output.append(0)
            curr = remain
        return output