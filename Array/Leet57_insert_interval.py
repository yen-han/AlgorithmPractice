"""
Source LeetCode
57. Insert Interval
https://leetcode.com/problems/insert-interval/description/
1st: 2024-12-12

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.

 
Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]

Constraints:
    0 <= intervals.length <= 104
    intervals[i].length == 2
    0 <= starti <= endi <= 105
    intervals is sorted by starti in ascending order.
    newInterval.length == 2
    0 <= start <= end <= 105
"""

# 1st Attempt
# LOGIC: Insert the new interval in the correct position in the intervals list.
# Time : O(n)  |  Space: O(n)
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        res = []
        index= -1
        for i in range(len(intervals)):
            if intervals[i][0] > newInterval[1]:
                res.append(intervals[i])
            elif intervals[i][1] < newInterval[0]:
                res.append(intervals[i])
                index = i 
            else:
                newInterval[0] = min(intervals[i][0], newInterval[0])
                newInterval[1] = max(newInterval[1], intervals[i][1])
        res.insert(index + 1, newInterval) 

        return res