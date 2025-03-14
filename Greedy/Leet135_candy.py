"""
Source LeetCode
135. Candy
https://leetcode.com/problems/candy/description/
1st 2025-03-12

There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

    Each child must have at least one candy.
    Children with a higher rating get more candies than their neighbors.

Return the minimum number of candies you need to have to distribute the candies to the children.

Example 1:
Input: ratings = [1,0,2]
Output: 5

Example 2:
Input: ratings = [1,2,2]
Output: 4

Constraints:
    n == ratings.length
    1 <= n <= 2 * 104
    0 <= ratings[i] <= 2 * 104
"""

# 1st Attempt
# LOGIC: Two-pass greedy approach. First pass from left to right, second pass from right to left.
# Time: O(n)  | Space: O(n)
class Solution:
    def candy(self, ratings: List[int]) -> int:
        n = len(ratings)
        candy_arr = [1] * len(ratings)
        # Left-to-right pass (ensure increasing ratings get more candies)
        for i in range(1, n):
            if ratings[i] > ratings[i - 1]:
                candy_arr[i] = candy_arr[i - 1] + 1  
 
        # Right-to-left pass (ensure decreasing ratings get more candies)
        for i in range(n - 2, -1, -1):  # Start from second last element
            if ratings[i] > ratings[i + 1]:
                candy_arr[i] = max(candy_arr[i], candy_arr[i + 1] + 1)

        return sum(candy_arr)
