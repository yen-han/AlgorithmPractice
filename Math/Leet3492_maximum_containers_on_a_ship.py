"""
Source LeetCode
3492. Maximum Containers on a Ship
https://leetcode.com/problems/maximum-containers-on-a-ship/description/
1st 2025-08-02

You are given a positive integer n representing an n x n cargo deck on a ship. 
Each cell on the deck can hold one container with a weight of exactly w.

However, the total weight of all containers, if loaded onto the deck, 
must not exceed the ship's maximum weight capacity, maxWeight.

Return the maximum number of containers that can be loaded onto the ship.

Example 1:
Input: n = 2, w = 3, maxWeight = 15
Output: 4

Example 2:
Input: n = 3, w = 5, maxWeight = 20
Output: 4

Constraints:
    1 <= n <= 1000
    1 <= w <= 1000
    1 <= maxWeight <= 109
"""

# 1st Attempt
# LOGIC: The maximum number of containers that can be fit on the container.
# Time: O(1)  | Space: O(1)
class Solution:
    def maxContainers(self, n: int, w: int, maxWeight: int) -> int:
        total_container = n*n
        max_loaded = maxWeight // w 

        return min(total_container, max_loaded) 