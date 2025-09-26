"""
Source LeetCode
1266. Minimum Time Visiting All Points
https://leetcode.com/problems/minimum-time-visiting-all-points/description/
1st 2025-09-25

On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. 
Return the minimum time in seconds to visit all the points in the order given by points.

You can move according to these rules:

    In 1 second, you can either:
        move vertically by one unit,
        move horizontally by one unit, or
        move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
    You have to visit the points in the same order as they appear in the array.
    You are allowed to pass through points that appear later in the order, but these do not count as visits.


Example 1:
Input: points = [[1,1],[3,4],[-1,0]]
Output: 7

Example 2:
Input: points = [[3,2],[-2,2]]
Output: 5

Constraints:
    points.length == n
    1 <= n <= 100
    points[i].length == 2
    -1000 <= points[i][0], points[i][1] <= 1000
"""

# 1st Attempt
# LOGIC: Calculate the seconds to move from one point to another using max of the absolute differences of x and y coordinates
# Time: O(n) | Space: O(1)
class Solution:
    def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
        seconds = 0
        for i in range(len(points)-1):
            seconds += max(abs(points[i+1][0]-points[i][0]), abs(points[i+1][1]-points[i][1]))
        return seconds