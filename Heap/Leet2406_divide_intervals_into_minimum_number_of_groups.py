"""
Source LeetCode
2406. Divide Intervals Into Minimum Number of Groups
https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/description/
1st 2025-06-12
2nd 2025-06-12

You are given a 2D integer array intervals where intervals[i] = [lefti, righti] represents the inclusive interval [lefti, righti].

You have to divide the intervals into one or more groups such that each interval is in exactly one group, and no two intervals that are in the same group intersect each other.

Return the minimum number of groups you need to make.

Two intervals intersect if there is at least one common number between them. For example, the intervals [1, 5] and [5, 8] intersect.

Example 1:
Input: intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]]
Output: 3

Example 2:
Input: intervals = [[1,3],[5,6],[8,10],[11,13]]
Output: 1

Constraints:
    1 <= intervals.length <= 105
    intervals[i].length == 2
    1 <= lefti <= righti <= 106
"""

# 1st Attempt
# LOGIC: Using min heap, keep track right element of intervals in groups and check overlapping. - Time Limit Exceeded
# Time: O(n^2)  | Space: O(n)
class Solution:
    def minGroups(self, intervals: List[List[int]]) -> int:
        groups = []
        heap = []

        for interval in intervals:
            heapq.heappush(heap, (interval))

        while heap:
            interval = heapq.heappop(heap)
            if len(groups) == 0:
                groups.append(interval[1])
            else: 
                flag = False
                for i in range(len(groups)):
                    if groups[i] < interval[0] :
                        groups[i] = interval[1]
                        flag = True
                        break
                if flag is False:
                    groups.append(interval[1])    
        return len(groups)

# 2nd Attempt
# LOGIC: Using min heap, keep track right element of intervals in groups and check overlapping.
# Time: O(nlogn)  | Space: O(n)
class Solution:
    def minGroups(self, intervals: List[List[int]]) -> int:
        groups = []
        heap = []

        for interval in intervals:
            heapq.heappush(heap, (interval))

        while heap:
            interval = heapq.heappop(heap)
            if len(groups) == 0:

                heapq.heappush(groups, interval[1])
            else:   
                if groups[0] < interval[0]:
                    heapq.heappop(groups)
                heapq.heappush(groups, interval[1])

        return len(groups)