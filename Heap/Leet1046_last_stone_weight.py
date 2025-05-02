"""
Source LeetCode
1046. Last Stone Weight
https://leetcode.com/problems/last-stone-weight/description/
1st 2025-05-01

You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and 
smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

    If x == y, both stones are destroyed, and
    If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.

At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.

Example 1:
Input: stones = [2,7,4,1,8,1]
Output: 1

Example 2:
Input: stones = [1]
Output: 1

Constraints:
    1 <= stones.length <= 30
    1 <= stones[i] <= 1000
"""

# 1st Attempt
# LOGIC: Using max heap to keep track of the heaviest stones. 
# pop the first two, calculate smash result and push back the result if not 0.
# Time: O(nlogn)  | Space: O(n)
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        pq = [-stone for stone in stones]
        heapq.heapify(pq)

        while len(pq) > 1:
            x = -heapq.heappop(pq) 
            y = -heapq.heappop(pq) 
            if abs(x-y) > 0:
                heapq.heappush(pq, -abs(x-y))

        return -heapq.heappop(pq) if pq else 0